import { useState } from 'react';
import { Layers, Flag, Code, Music, MessageSquare, LayoutDashboard, BookOpen, MapPin, Award } from 'lucide-react';
import { eventsData } from '../eventsData';
import EventOverlay from './EventOverlay';

const iconMap = {
    layers: Layers,
    flag: Flag,
    code: Code,
    music: Music,
    messageSquare: MessageSquare,
    layoutDashboard: LayoutDashboard,
    bookOpen: BookOpen,
    mapPin: MapPin,
    award: Award
};

export default function Events() {
    const [selectedEvent, setSelectedEvent] = useState(null);

    const eventKeys = Object.keys(eventsData);

    return (
        <section id="events" className="section">
            <h2 className="section-title">Festival Events</h2>
            <p className="section-subtitle">Two days of innovation, competition, and unforgettable experiences</p>
            <div className="events-grid">
                {eventKeys.map(key => {
                    const event = eventsData[key];
                    const Icon = iconMap[event.icon] || Layers;
                    return (
                        <div
                            className="event-card"
                            key={key}
                            onClick={() => setSelectedEvent(key)}
                        >
                            <div className="event-icon">
                                <Icon size={32} />
                            </div>
                            <h3 className="event-title">{event.title}</h3>
                            <p className="event-description">{event.tagline}</p>
                        </div>
                    );
                })}
            </div>

            {selectedEvent && (
                <EventOverlay
                    eventId={selectedEvent}
                    event={eventsData[selectedEvent]}
                    onClose={() => setSelectedEvent(null)}
                />
            )}
        </section>
    );
}
