import { Link } from 'react-router-dom';
import { ArrowLeft, Gamepad2, Smartphone, Crosshair, Trophy, Zap, Keyboard, Users, Target, Palette, Dna, Layers, RotateCcw, Box, Smile, Hash, Grip, Clock, HandMetal, Eye } from 'lucide-react';
import { eventsData, playFestData } from '../eventsData';

const iconMap = {
    crosshair: Crosshair,
    smartphone: Smartphone,
    trophy: Trophy,
    zap: Zap,
    gamepad: Gamepad2,
};

const playFestIcons = {
    'speed-typing': Keyboard,
    'escape-room': Users,
    'dart-throw': Target,
    'foam-archery': Target, // Reusing Target
    'cosplay': Palette,
    'nerf-battle': Crosshair,
    'top-that': Layers,
    'chain-triangle': Dna,
    'happy-salmon': HandMetal,
    'maki-stack': Layers,
    'dr-eureka': Dna,
    'taco-cat': RotateCcw,
    'dobble': Eye,
    'face-change': Smile,
    'sling-puck': Zap,
    'pictureka': Hash, // Using Hash as closest standard grid icon
    'magnet-sizzle': Zap,
    'mikkaido': Grip,
    'yeti-spaghetti': Grip,
    'dead-mans-deck': Box,
    'suspend': Layers,
    'connect-4': Grip,
    'jenga': Layers,
    'board-boats': Box,
    'balloon-shooting': Target,
    'tower-hanoi': Layers,
    'hot-wheels': Zap
};



export default function EGamesPage() {
    const preFestGames = ['valorant', 'bgmi', 'efootball', 'minimilitia'];
    const liveGames = ['fifa'];

    const preFestEvents = preFestGames.map(id => ({ id, ...eventsData[id] }));
    const liveEvents = liveGames.map(id => ({ id, ...eventsData[id] }));

    return (
        <div className="page-container">
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

            {/* PlayFest Live Activities */}
            <section className="section">
                <h2 className="section-title">PlayFest - Live Activities</h2>
                <div className="playfest-grid">
                    {playFestData.filter(g => g.group === 'Live Activity').map(game => {
                        const Icon = playFestIcons[game.id] || Gamepad2;
                        return (
                            <div className="playfest-card" key={game.id}>
                                <div className="playfest-header">
                                    <Icon className="playfest-icon" size={24} />
                                    <h3 className="playfest-title">{game.title}</h3>
                                </div>
                                <p className="playfest-desc">{game.description}</p>
                                <div className="playfest-meta">
                                    <span className="meta-item"><Users size={14} /> {game.players}</span>
                                    <span className="meta-item"><Clock size={14} /> {game.duration}</span>
                                </div>
                                <div className="playfest-type">{game.type}</div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Board & Card Games */}
            <section className="section">
                <h2 className="section-title">Board & Card Games</h2>
                <div className="playfest-grid">
                    {playFestData.filter(g => !g.group || g.group === 'Board Games').map(game => { // Default to Board Games if undefined to catch middle items
                        const Icon = playFestIcons[game.id] || Gamepad2;
                        return (
                            <div className="playfest-card" key={game.id}>
                                <div className="playfest-header">
                                    <Icon className="playfest-icon" size={24} />
                                    <h3 className="playfest-title">{game.title}</h3>
                                </div>
                                <p className="playfest-desc">{game.description}</p>
                                <div className="playfest-meta">
                                    <span className="meta-item"><Users size={14} /> {game.players}</span>
                                    <span className="meta-item"><Clock size={14} /> {game.duration}</span>
                                </div>
                                <div className="playfest-type">{game.type}</div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <section className="section">
                <h2 className="section-title">Skill Zones</h2>
                <div className="playfest-grid">
                    {playFestData.filter(g => g.group === 'Skill Zones').map(game => {
                        const Icon = playFestIcons[game.id] || Gamepad2;
                        return (
                            <div className="playfest-card" key={game.id}>
                                <div className="playfest-header">
                                    <Icon className="playfest-icon" size={24} />
                                    <h3 className="playfest-title">{game.title}</h3>
                                </div>
                                <p className="playfest-desc">{game.description}</p>
                                <div className="playfest-meta">
                                    <span className="meta-item"><Users size={14} /> {game.players}</span>
                                    <span className="meta-item"><Clock size={14} /> {game.duration}</span>
                                </div>
                                <div className="playfest-type">{game.type}</div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <style jsx>{`
                .playfest-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 1.5rem;
                    padding: 1rem 0;
                }
                .playfest-card {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 12px;
                    padding: 1.5rem;
                    transition: all 0.3s ease;
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                    position: relative;
                    overflow: hidden;
                }
                .playfest-card:hover {
                    background: rgba(255, 255, 255, 0.07);
                    transform: translateY(-5px);
                    border-color: rgba(255, 255, 255, 0.2);
                }
                .playfest-header {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    margin-bottom: 0.25rem;
                }
                .playfest-icon {
                    color: var(--accent-color, #ff0055);
                }
                .playfest-title {
                    font-size: 1.1rem;
                    font-weight: 600;
                    margin: 0;
                    color: #fff;
                }
                .playfest-desc {
                    font-size: 0.9rem;
                    color: rgba(255, 255, 255, 0.7);
                    line-height: 1.4;
                    flex-grow: 1;
                }
                .playfest-meta {
                    display: flex;
                    gap: 1rem;
                    font-size: 0.8rem;
                    color: rgba(255, 255, 255, 0.5);
                    margin-top: auto;
                    padding-top: 0.75rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                }
                .meta-item {
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                }
                .playfest-type {
                    position: absolute;
                    top: 0;
                    right: 0;
                    background: rgba(255, 0, 85, 0.2);
                    color: #ff0055;
                    font-size: 0.7rem;
                    padding: 0.25rem 0.75rem;
                    border-bottom-left-radius: 8px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
            `}</style>
        </div>
    );
}
