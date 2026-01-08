import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function EventOverlay({ eventId, event, onClose }) {
    useEffect(() => {
        document.body.classList.add('overlay-open');

        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);

        return () => {
            document.body.classList.remove('overlay-open');
            document.removeEventListener('keydown', handleEscape);
        };
    }, [onClose]);

    const handleBackdropClick = (e) => {
        if (e.target.classList.contains('event-overlay')) {
            onClose();
        }
    };

    return (
        <div className="event-overlay active" onClick={handleBackdropClick}>
            <button className="overlay-close-btn" onClick={onClose}>×</button>
            <div className="event-overlay-content">
                <button className="overlay-back-btn" onClick={onClose}>
                    <ArrowLeft size={20} />
                    Back to Events
                </button>
                <div className="overlay-header">
                    <div className="overlay-event-badge">{event.badge}</div>
                    <h1 className="overlay-event-title">{event.title}</h1>
                    <p className="overlay-event-tagline">{event.tagline}</p>
                </div>
                <div className="overlay-details-grid">
                    {event.details.map((detail, index) => (
                        <div className="overlay-detail-card" key={index}>
                            <h4>{detail.label}</h4>
                            <p>{detail.value}</p>
                        </div>
                    ))}
                </div>
                <div className="overlay-description">
                    <h3>About This Event</h3>
                    <p>{event.description}</p>
                    <ul>
                        {event.highlights.map((highlight, index) => (
                            <li key={index}>{highlight}</li>
                        ))}
                    </ul>
                </div>
                <div className="overlay-actions">
                    <Link to={`/register/${eventId}`} className="overlay-register-btn">
                        {event.buttonText}
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
