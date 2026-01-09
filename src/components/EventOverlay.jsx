import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { REGISTRATION_LINKS } from '../eventsData';

export default function EventOverlay({ eventId, event, onClose }) {
    const [openSections, setOpenSections] = useState({});

    useEffect(() => {
        document.body.classList.add('overlay-open');

        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
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

    const toggleSection = (sectionIndex) => {
        setOpenSections(prev => ({
            ...prev,
            [sectionIndex]: !prev[sectionIndex]
        }));
    };

    return (
        <div className="event-overlay active" onClick={handleBackdropClick}>
            <button className="overlay-close-btn" onClick={onClose}>×</button>

            <div className="overlay-scroll-container">
                <div className="event-overlay-content">
                    {/* Back */}
                    <button className="overlay-back-btn" onClick={onClose}>
                        <ArrowLeft size={20} />
                        Back to Events
                    </button>

                    {/* Header */}
                    <div className="overlay-header">
                        <div className="overlay-event-badge">{event.badge}</div>
                        <h1 className="overlay-event-title">{event.title}</h1>
                        <p className="overlay-event-tagline">{event.tagline}</p>
                    </div>

                    {/* Details */}
                    <div className="overlay-details-grid">
                        {event.details.map((detail, index) => (
                            <div className="overlay-detail-card" key={index}>
                                <h4>{detail.label}</h4>
                                <p>{detail.value}</p>
                            </div>
                        ))}
                    </div>

                    {/* About */}
                    <div className="overlay-description">
                        <h3>About This Event</h3>
                        <p>{event.description}</p>
                        <ul>
                            {event.highlights.map((highlight, index) => (
                                <li key={index}>{highlight}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Rules & Guidelines (Accordion) */}
                    {event.rulesAndGuidelines &&
                        typeof event.rulesAndGuidelines === 'object' && (
                            <div className="overlay-description">
                                <h3>Rules & Guidelines</h3>

                                <div className="accordion-container">
                                    {Object.entries(event.rulesAndGuidelines).map(
                                        ([sectionTitle, rules], index) => (
                                            <div
                                                className={`accordion-item ${openSections[index] ? 'open' : ''}`}
                                                key={index}
                                            >
                                                <button
                                                    className="accordion-header"
                                                    onClick={() => toggleSection(index)}
                                                >
                                                    <h4>
                                                        {sectionTitle
                                                            .replace(/([A-Z])/g, ' $1')
                                                            .replace(/^./, str =>
                                                                str.toUpperCase()
                                                            )}
                                                    </h4>
                                                    {openSections[index] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                                </button>

                                                <div className="accordion-content">
                                                    <div className="accordion-inner">
                                                        <ul>
                                                            {Array.isArray(rules) &&
                                                                rules.map((rule, i) => (
                                                                    <li key={i}>{rule}</li>
                                                                ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        )}

                    {/* Contact Section */}
                    {event.contact && event.contact.coordinators && (
                        <div className="overlay-description">
                            <h3>Contact</h3>
                            <div className="overlay-details-grid contact-grid">
                                {event.contact.coordinators.map((person, index) => (
                                    <div className="overlay-detail-card" key={index}>
                                        <h4>{person.name}</h4>
                                        <p>📞 {person.phone}

                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* CTA */}
            <div className="overlay-actions">
                <a
                    href={REGISTRATION_LINKS[eventId]}
                    className="overlay-register-btn"
                >
                    {event.buttonText}
                    <ArrowRight size={20} />
                </a>
            </div>
        </div>
    );
}