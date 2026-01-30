import { Link } from 'react-router-dom';
import { ArrowLeft, Gamepad2, Smartphone, Crosshair, Trophy, Zap, Compass } from 'lucide-react';
import { eventsData } from '../eventsData';
import SEO from '../components/SEO';

const iconMap = {
    crosshair: Crosshair,
    smartphone: Smartphone,
    trophy: Trophy,
    zap: Zap,
    gamepad: Gamepad2,
    compass: Compass,
};


export default function EGamesPage() {
    const preFestGames = ['valorant', 'bgmi', 'efootball'];
    const liveGames = ['fifa', 'minimilitia', 'treasurehunt'];

    const preFestEvents = preFestGames.map(id => ({ id, ...eventsData[id] }));
    const liveEvents = liveGames.map(id => ({ id, ...eventsData[id] }));

    return (
        <div className="page-container">
            <SEO title="E-Games Coliseum" description="Join the ultimate E-Sports arena at INCEPTA 2026. Valorant, BGMI, FIFA, and more." />
            {/* Hero Section */}
            <section className="page-hero" style={{ '--accent-color': '#ff0055' }}>
                <Link to="/competitions" className="back-link">
                    <ArrowLeft size={20} /> Back to Competitions
                </Link>
                <h1 className="page-title">COLISEUM</h1>
                <p className="page-subtitle">The Ultimate E-Sports & Gaming Arena</p>
            </section>

            {/* Pre-Fest Online Section */}
            <section className="section">
                <h2 className="section-title">Pre-Fest Online Tournaments</h2>
                <div className="events-grid">
                    {preFestEvents.map(event => {
                        const Icon = iconMap[event.icon] || Gamepad2;
                        return (
                            <Link
                                to={`/competitions/egames/${event.id}`}
                                className="event-card"
                                key={event.id}
                            >
                                <div className="event-icon">
                                    <Icon size={32} />
                                </div>
                                <h3 className="event-title">{event.title}</h3>
                                <p className="event-description">{event.tagline}</p>
                                <div className="event-badge-small">{event.badge}</div>
                            </Link>
                        );
                    })}
                </div>
            </section>

            {/* Live Tournaments Section */}
            <section className="section">
                <h2 className="section-title">Live Tournaments</h2>
                <div className="events-grid">
                    {liveEvents.map(event => {
                        const Icon = iconMap[event.icon] || Gamepad2;
                        return (
                            <Link
                                to={`/competitions/egames/${event.id}`}
                                className="event-card"
                                key={event.id}
                            >
                                <div className="event-icon">
                                    <Icon size={32} />
                                </div>
                                <h3 className="event-title">{event.title}</h3>
                                <p className="event-description">{event.tagline}</p>
                                <div className="event-badge-small">{event.badge}</div>
                            </Link>
                        );
                    })}
                </div>
            </section>



        </div>
    );
}
