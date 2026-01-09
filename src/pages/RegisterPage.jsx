import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { eventsData } from '../eventsData';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

export default function RegisterPage() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    teamMembers: '',
    additionalInfo: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (eventId && eventsData[eventId]) {
      setEvent(eventsData[eventId]);
    } else {
      navigate('/');
    }
  }, [eventId, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Invalid phone number (10 digits required)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Load Razorpay script
      const razorpayLoaded = await loadRazorpayScript();
      if (!razorpayLoaded) {
        throw new Error('Failed to load Razorpay script');
      }

      // Parse team members if provided
      const teamMembers = formData.teamMembers
        ? formData.teamMembers.split(',').map(m => m.trim()).filter(m => m)
        : null;

      // Create registration and order
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventId,
          eventName: event.title,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          teamMembers,
          additionalInfo: formData.additionalInfo || null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      // Initialize Razorpay payment
      const options = {
        key: data.key,
        amount: data.amount,
        currency: data.currency,
        name: 'INCEPTA 2026',
        description: `Registration for ${event.title}`,
        order_id: data.orderId,
        handler: async function (response) {
          // Verify payment
          try {
            const verifyResponse = await fetch(`${API_BASE_URL}/payment/verify`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                orderId: response.razorpay_order_id,
                paymentId: response.razorpay_payment_id,
                signature: response.razorpay_signature,
                eventId,
              }),
            });

            const verifyData = await verifyResponse.json();

            if (verifyResponse.ok && verifyData.success) {
              // Navigate to success page
              navigate(`/register-success/${eventId}`, {
                state: {
                  registration: verifyData.registration,
                  orderId: response.razorpay_order_id,
                },
              });
            } else {
              throw new Error(verifyData.error || 'Payment verification failed');
            }
          } catch (error) {
            console.error('Payment verification error:', error);
            alert('Payment verification failed. Please contact support with your order ID: ' + data.orderId);
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: '#667eea',
        },
        modal: {
          ondismiss: function() {
            setLoading(false);
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed: ' + error.message);
      setLoading(false);
    }
  };

  if (!event) {
    return (
      <div className="page-container">
        <div className="loading-container">
          <Loader2 className="spinner" size={48} />
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <section className="page-hero" style={{ '--accent-color': '#667eea' }}>
        <Link to="/" className="back-link">
          <ArrowLeft size={20} /> Back to Home
        </Link>
        <h1 className="page-title">Register for {event.title}</h1>
        <p className="page-subtitle">{event.tagline}</p>
      </section>

      <section className="section2">
        <div className="register-container">
          <div className="register-form-wrapper">
            <form onSubmit={handleSubmit} className="register-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                  placeholder="Enter your full name"
                  required
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  placeholder="your.email@example.com"
                  required
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'error' : ''}
                  placeholder="10-digit phone number"
                  required
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>

              {(event.details.find(d => d.label === 'Team Size') || event.details.find(d => d.label === 'Format')?.value?.includes('Team')) && (
                <div className="form-group">
                  <label htmlFor="teamMembers">Team Members (comma-separated)</label>
                  <input
                    type="text"
                    id="teamMembers"
                    name="teamMembers"
                    value={formData.teamMembers}
                    onChange={handleChange}
                    placeholder="Member 1, Member 2, Member 3..."
                  />
                  <small>Leave empty if registering individually</small>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="additionalInfo">Additional Information</label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Any additional details or special requirements..."
                />
              </div>

              <button type="submit" className="register-submit-btn" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="spinner" size={20} />
                    Processing...
                  </>
                ) : (
                  'Proceed to Payment'
                )}
              </button>
            </form>
          </div>

          <div className="register-info">
            <div className="info-card">
              <h3>Event Details</h3>
              <div className="info-details">
                {event.details.map((detail, index) => (
                  <div key={index} className="info-row">
                    <span className="info-label">{detail.label}:</span>
                    <span className="info-value">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="info-card">
              <h3>Payment Information</h3>
              <p>Secure payment powered by Razorpay</p>
              <p className="payment-note">
                You will be redirected to a secure payment gateway after submitting the form.
                A confirmation email will be sent to your registered email address.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

