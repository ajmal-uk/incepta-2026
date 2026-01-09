import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, LayoutDashboard, MapPin, BrainCircuit, ShieldCheck, Zap, Sparkles, Image, Presentation, Bot, Palette, MonitorPlay, Compass, Music } from 'lucide-react';
import { eventsData, eventCategories } from '../eventsData';
import EventOverlay from '../components/EventOverlay';

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
    music: Music
};

export default function EventsPage() {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const category = eventCategories.competitions;
    console.log(category, "Comp")
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
                        const Icon = iconMap[event.icon] || LayoutDashboard;
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
