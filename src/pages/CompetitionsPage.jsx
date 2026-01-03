import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Layers, Flag, Code, Music, MessageSquare, BookOpen } from 'lucide-react';
import { eventsData, eventCategories } from '../eventsData';
import EventOverlay from '../components/EventOverlay';

const iconMap = {
    layers: Layers,
    flag: Flag,
    code: Code,
    music: Music,
    messageSquare: MessageSquare,
    bookOpen: BookOpen
};

export default function CompetitionsPage() {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const category = eventCategories.competitions;
    const categoryEvents = category.events.map(id => ({ id, ...eventsData[id] }));

    return (
        <div className="page-container">
            <section className="page-hero" style={{ '--accent-color': category.color }}>
                <Link to="/" className="back-link">
                    <ArrowLeft size={20} /> Back to Home
                </Link>
                <h1 className="page-title">{category.title}</h1>
                <p className="page-subtitle">{category.description}</p>
            </section>

            <section className="section">
                <div className="events-grid">
                    {categoryEvents.map(event => {
                        const Icon = iconMap[event.icon] || Layers;
                        return (
                            <div
                                className="event-card"
                                key={event.id}
                                onClick={() => setSelectedEvent(event.id)}
                            >
                                <div className="event-icon">
                                    <Icon size={32} />
                                </div>
                                <h3 className="event-title">{event.title}</h3>
                                <p className="event-description">{event.tagline}</p>
                                <div className="event-badge-small">{event.badge}</div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {selectedEvent && (
                <EventOverlay
                    eventId={selectedEvent}
                    event={eventsData[selectedEvent]}
                    onClose={() => setSelectedEvent(null)}
                />
            )}
        </div>
    );
}
