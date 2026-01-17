import { useState } from 'react';
import { MapPin, Mail, Phone, Loader2, CheckCircle, XCircle } from 'lucide-react';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzWX_hTEm7uPVonwqJTibMgrOATv-LOBdm0CY7ufkq-3NjbT6oNFuftoiga-y1bddaKUA/exec';

const contactInfo = [
    {
        id: 'location',
        title: 'College of Engineering, Trivandrum',
        subtitle: 'Kerala, India - 695016',
        icon: 'mapPin',
        href: '#'
    },
    {
        id: 'email',
        title: 'Email',
        subtitle: 'ascacet@gmail.com',
        icon: 'mail',
        href: 'mailto:ascacet@gmail.com'
    },
    {
        id: 'phone',
        title: 'Event Coordinators',
        subtitle: 'Aiswarya: +91 73561 60270',
        icon: 'phone',
        href: 'tel:+917356160270'
    }
];

const iconMap = {
    mapPin: MapPin,
    mail: Mail,
    phone: Phone
};

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toast, setToast] = useState({ show: false, type: '', message: '' });

    const showToast = (type, message) => {
        setToast({ show: true, type, message });
        setTimeout(() => setToast({ show: false, type: '', message: '' }), 4000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    recipientEmail: 'ascacet@gmail.com',
                    timestamp: new Date().toISOString()
                })
            });                                                                                                                                                                                                                                                                                                                                                             

            // Since no-cors mode doesn't return response, we assume success
            showToast('success', 'Message sent successfully! We\'ll get back to you soon.');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('Error:', error);
            showToast('error', 'Failed to send message. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <section id="contact" className="section">
            {/* Toast Notification */}
            <div className={`toast ${toast.show ? 'toast-show' : ''} toast-${toast.type}`}>
                {toast.type === 'success' ? <CheckCircle size={20} /> : <XCircle size={20} />}
                <span>{toast.message}</span>
            </div>

            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">Have questions? We'd love to hear from you</p>
            <div className="contact-grid">
                <div className="contact-info">
                    {contactInfo.map(item => {
                        const Icon = iconMap[item.icon];
                        return (
                            <a href={item.href} className="contact-item" key={item.id}>
                                <div className="contact-icon">
                                    <Icon size={24} />
                                </div>
                                <div className="contact-text">
                                    <strong>{item.title}</strong>
                                    <span>{item.subtitle}</span>
                                </div>
                            </a>
                        );
                    })}
                </div>
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Your Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Your Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                className="form-control"
                                placeholder="Your Message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                        <button
                            type="submit"
                            className={`cta-button submit-btn ${isSubmitting ? 'submitting' : ''}`}
                            style={{ width: '100%' }}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="spinner" size={20} />
                                    <span>Sending...</span>
                                </>
                            ) : (
                                'Send Message'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
