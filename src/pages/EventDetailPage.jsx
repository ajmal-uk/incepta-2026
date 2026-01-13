import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ChevronDown, ChevronUp, LayoutDashboard, MapPin, BrainCircuit, ShieldCheck, Zap, Sparkles, Image, Presentation, Bot, Palette, MonitorPlay, Compass, Music, Mic, Users, Award, Calendar, Clock } from 'lucide-react';
import { eventsData, eventCategories } from '../eventsData';
import SEO from '../components/SEO';

const iconMap = {
    layoutDashboard: LayoutDashboard,
    mapPin: MapPin,
    brainCircuit: BrainCircuit,
    shieldCheck: ShieldCheck,
    zap: Zap,
    sparkles: Sparkles,
    image: Image,
    presentation: Presentation,
    bot: Bot,
    palette: Palette,
    monitorPlay: MonitorPlay,
    compass: Compass,
    music: Music,
    mic: Mic,
    users: Users,
    award: Award,
    calendar: Calendar,
    clock: Clock
};

// Get back link based on event category
function getBackLink(category) {
    switch (category) {
        case 'competitions':
            return { path: '/competitions', label: 'Competitions' };
        case 'egames':
            return { path: '/competitions/egames', label: 'E-Games' };
        case 'workshops':
            return { path: '/events', label: 'Events' };
        case 'gala':
            return { path: '/gala', label: 'Home' };
        default:
            return { path: '/', label: 'Home' };
    }
}

// Get category color
function getCategoryColor(category) {
    return eventCategories[category]?.color || '#c678ff';
}

export default function EventDetailPage() {
    const { eventId } = useParams();
    const [openSections, setOpenSections] = useState({});

    const event = eventsData[eventId];

    // Event not found
    if (!event) {
        return (
            <div className="page-container">
                <SEO title="Event Not Found" />
                <section className="page-hero" style={{ '--accent-color': '#ff6b6b' }}>
                    <Link to="/" className="back-link">
                        <ArrowLeft size={20} /> Back to Home
                    </Link>
                    <h1 className="page-title">Event Not Found</h1>
                    <p className="page-subtitle">The event you're looking for doesn't exist.</p>
                </section>
            </div>
        );
    }

    const backInfo = getBackLink(event.category);
    const categoryColor = getCategoryColor(event.category);
    const Icon = iconMap[event.icon] || LayoutDashboard;

    const toggleSection = (sectionIndex) => {
        setOpenSections(prev => ({
            ...prev,
            [sectionIndex]: !prev[sectionIndex]
        }));
    };

    return (
        <div className="page-container event-detail-page">
            <SEO
                title={event.title}
                description={event.description}
                keywords={event.badge}
            />
            <section className="page-hero" style={{ '--accent-color': categoryColor }}>
                <div className="event-header-row">
                    <Link to={backInfo.path} className="back-link">
                        <ArrowLeft size={18} /> Back to {backInfo.label}
                    </Link>
                    <div className="event-detail-badge">{event.badge}</div>
                </div>
                <h1 className="page-title">{event.title}</h1>
                <p className="page-subtitle">{event.tagline}</p>
            </section>

            <section className="event-detail-content">
                {/* Details Grid */}
                <div className="overlay-details-grid">
                    {event.details?.map((detail, index) => (
                        <div className="overlay-detail-card" key={index}>
                            <h4>{detail.label}</h4>
                            <p>{detail.value}</p>
                        </div>
                    ))}
                </div>

                {/* About Section */}
                <div className="overlay-description">
                    <h3>About This Event</h3>
                    <p>{event.description}</p>
                    {event.highlights && (
                        <ul>
                            {event.highlights.map((highlight, index) => (
                                <li key={index}>{highlight}</li>
                            ))}
                        </ul>
                    )}
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
                                                        .replace(/^./, str => str.toUpperCase())}
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

                {/* Judging Criteria */}
                {event.judgingCriteria && (
                    <div className="overlay-description">
                        <h3>Judging Criteria</h3>
                        <ul>
                            {event.judgingCriteria.map((criteria, index) => (
                                <li key={index}>{criteria}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Prizes */}
                {event.prizes && (
                    <div className="overlay-description">
                        <h3>Prizes</h3>
                        <ul>
                            {event.prizes.map((prize, index) => (
                                <li key={index}>{prize}</li>
                            ))}
                        </ul>
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
                                    <p>📞 {person.phone}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </section>

            {/* Floating CTA Button */}
            <div className="floating-cta">
                <a
                    href={event.registrationUrl}
                    className="floating-register-btn"
                    style={{ '--accent-color': categoryColor }}
                >
                    {event.buttonText}
                    <ArrowRight size={20} />
                </a>
            </div>
        </div>
    );
}
