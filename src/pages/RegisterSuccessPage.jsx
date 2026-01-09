import { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { CheckCircle, Mail, ArrowLeft, Download } from 'lucide-react';
import { eventsData } from '../eventsData';

export default function RegisterSuccessPage() {
  const { eventId } = useParams();
  const location = useLocation();
  const [registration, setRegistration] = useState(null);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    if (location.state?.registration) {
      setRegistration(location.state.registration);
      if (eventId && eventsData[eventId]) {
        setEvent(eventsData[eventId]);
      }
    } else {
      // If no state, try to fetch from API using orderId from URL params
      const params = new URLSearchParams(location.search);
      const orderId = params.get('orderId');
      if (orderId && eventId) {
        fetchRegistration(eventId, orderId);
      }
    }
  }, [location, eventId]);

  const fetchRegistration = async (eventId, orderId) => {
    try {
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';
      const response = await fetch(`${API_BASE_URL}/registrations/${eventId}/${orderId}`);
      const data = await response.json();
      if (data.success) {
        setRegistration(data.registration);
        if (eventId && eventsData[eventId]) {
          setEvent(eventsData[eventId]);
        }
      }
    } catch (error) {
      console.error('Error fetching registration:', error);
    }
  };

  if (!registration) {
    return (
      <div className="page-container">
        <section className="section">
          <div className="success-container">
            <p>Loading registration details...</p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page-container">
      <section className="page-hero" style={{ '--accent-color': '#10b981' }}>
        <Link to="/" className="back-link">
          <ArrowLeft size={20} /> Back to Home
        </Link>
        <div className="success-icon-wrapper">
          <CheckCircle size={64} className="success-icon" />
        </div>
        <h1 className="page-title">Registration Successful!</h1>
        <p className="page-subtitle">Thank you for registering for {event?.title || registration.eventName}</p>
      </section>

      <section className="section">
        <div className="success-container">
          <div className="success-card">
            <div className="success-header">
              <Mail size={24} />
              <h2>Confirmation Email Sent</h2>
            </div>
            <p className="success-message">
              A confirmation email has been sent to <strong>{registration.email}</strong> with all the details.
              Please check your inbox (and spam folder).
            </p>
          </div>

          <div className="registration-details-card">
            <h3>Registration Details</h3>
            <div className="details-grid">
              <div className="detail-item">
                <span className="detail-label">Registration ID</span>
                <span className="detail-value">{registration.orderId}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Event</span>
                <span className="detail-value">{event?.title || registration.eventName}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Name</span>
                <span className="detail-value">{registration.name}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email</span>
                <span className="detail-value">{registration.email}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Phone</span>
                <span className="detail-value">{registration.phone}</span>
              </div>
              {registration.teamMembers && registration.teamMembers.length > 0 && (
                <div className="detail-item">
                  <span className="detail-label">Team Members</span>
                  <span className="detail-value">{registration.teamMembers.join(', ')}</span>
                </div>
              )}
              <div className="detail-item">
                <span className="detail-label">Amount Paid</span>
                <span className="detail-value">₹{(registration.amount / 100).toFixed(2)}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Payment ID</span>
                <span className="detail-value">{registration.paymentId || 'N/A'}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Status</span>
                <span className="detail-value status-badge completed">Completed</span>
              </div>
            </div>
          </div>

          {event && (
            <div className="event-reminder-card">
              <h3>Event Reminder</h3>
              <div className="reminder-details">
                {event.details.map((detail, index) => (
                  <div key={index} className="reminder-row">
                    <span className="reminder-label">{detail.label}:</span>
                    <span className="reminder-value">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="success-actions">
            <Link to="/" className="btn-primary">
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <button 
              className="btn-secondary"
              onClick={() => window.print()}
            >
              <Download size={20} />
              Print Receipt
            </button>
          </div>

          <div className="support-info">
            <p>
              <strong>Need help?</strong> Contact us at{' '}
              <a href="mailto:ascacet@gmail.com">ascacet@gmail.com</a> or call{' '}
              <a href="tel:+917356160270">+91 73561 60270</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

