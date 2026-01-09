import { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
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

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <section id="contact" className="section">
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
                            />
                        </div>
                        <button type="submit" className="cta-button" style={{ width: '100%' }}>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
