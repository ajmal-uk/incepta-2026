import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Music, Sparkles, Star, PartyPopper } from 'lucide-react';
import { eventsData, eventCategories } from '../eventsData';
import SEO from '../components/SEO';

export default function GalaPage() {
    const category = eventCategories.gala;
    const gala = eventsData.gala;

    return (
        <div className="page-container gala-page">
            <SEO title="INCEPTA Gala" description="Experience the cultural highlight of INCEPTA 2026. Two nights of music, dance, and performances." />

            {/* Celebration Particles Background */}
            <div className="gala-particles">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="particle"
                        style={{
                            '--delay': `${Math.random() * 5}s`,
                            '--duration': `${3 + Math.random() * 4}s`,
                            '--x-start': `${Math.random() * 100}%`,
                            '--size': `${4 + Math.random() * 8}px`
                        }}
                    />
                ))}
            </div>

            {/* Hero Section */}
            <section className="gala-hero-section">
                <div className="event-header-row">
                    <Link to="/" className="back-link">
                        <ArrowLeft size={18} /> Back to Home
                    </Link>
                    <div className="gala-badge-new">
                        <PartyPopper size={16} />
                        {gala.badge}
                    </div>
                </div>

                <div className="gala-hero-content">
                    <h1 className="gala-main-title">{gala.title}</h1>
                    <p className="gala-main-tagline">{gala.tagline}</p>
                </div>
            </section>

            <section className="gala-content-section">
                {/* Details Grid with Enhanced Cards */}
                <div className="gala-details-grid">
                    {gala.details.map((detail, index) => (
                        <div className="gala-detail-card" key={index}>
                            <div className="gala-detail-glow"></div>
                            <h4>{detail.label}</h4>
                            <p>{detail.value}</p>
                        </div>
                    ))}
                </div>

                {/* About Section */}
                <div className="gala-section-card">
                    <div className="section-header">
                        <Sparkles size={24} className="section-icon" />
                        <h3>About The Gala</h3>
                    </div>
                    <p>{gala.description}</p>
                </div>

                {/* Highlights Section */}
                <div className="gala-section-card">
                    <div className="section-header">
                        <Star size={24} className="section-icon" />
                        <h3>Highlights</h3>
                    </div>
                    <ul className="gala-highlights-list">
                        {gala.highlights.map((highlight, index) => (
                            <li key={index}>
                                <span className="highlight-bullet">✦</span>
                                {highlight}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Floating CTA */}
            <div className="floating-cta gala-cta-enhanced">
                <a
                    href={gala.registrationUrl}
                    className="gala-register-btn"
                >
                    <PartyPopper size={20} />
                    {gala.buttonText}
                    <ArrowRight size={20} />
                </a>
            </div>
        </div>
    );
}
