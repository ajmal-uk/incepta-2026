import { Calendar, Award, Sparkles, MapPin, Clock, Zap, Brain, Bot, Cpu, Users } from 'lucide-react';
import SEO from '../components/SEO';

const aboutData = [
    {
        id: 'cet',
        title: 'College of Engineering Trivandrum',
        shortTitle: 'CET',
        description: 'For 85 illustrious years since its foundation in 1939, College of Engineering Trivandrum (CET) has remained a beacon of technical excellence in Kerala. Consistently ranking among the foremost engineering institutions in India, CET has nurtured generations of engineers, innovators, and leaders who have made their mark across the globe.',
        highlights: ['Founded in 1939', '85+ Years of Excellence', 'Top Engineering College in Kerala'],
        logo: 'cet.png',
        color: '#c678ff',
        gradient: 'linear-gradient(135deg, rgba(198, 120, 255, 0.2) 0%, rgba(139, 92, 246, 0.3) 100%)'
    },
    {
        id: 'asca',
        title: 'Association of Students of Computer Applications',
        shortTitle: 'ASCA',
        description: 'The Association of Students of Computer Applications (ASCA) is the official student body of the MCA Department at CET. We foster innovation through technical workshops, hackathons, and cultural initiatives, building a vibrant community of future tech leaders. ASCA serves as the bridge between academic learning and industry readiness.',
        highlights: ['MCA Department\'s Official Body', 'Tech Events & Workshops', 'Industry-Academia Bridge'],
        logo: 'logo.png',
        color: '#61dafb',
        gradient: 'linear-gradient(135deg, rgba(97, 218, 251, 0.2) 0%, rgba(0, 188, 212, 0.3) 100%)'
    },
    {
        id: 'incepta',
        title: 'INCEPTA 2026',
        shortTitle: 'INCEPTA',
        description: 'INCEPTA is the flagship tech fest organized by ASCA. The 2026 edition is exclusively focused on the revolutionary fields of AI Agents and Generative AI—technologies that are reshaping industries worldwide. We bridge the gap between academic theory and industry reality, bringing together students, experts, and innovators for two unforgettable days.',
        highlights: ['ASCA\'s Flagship Tech Fest', 'AI Agents & Gen AI Focus', '2 Days of Innovation'],
        logo: 'incepta.png',
        color: '#ff6ac1',
        gradient: 'linear-gradient(135deg, rgba(255, 106, 193, 0.2) 0%, rgba(255, 71, 87, 0.3) 100%)'
    }
];

const festHighlights = [
    { icon: Calendar, label: '2 Days', sublabel: 'of Events' },
    { icon: MapPin, label: 'CET', sublabel: 'Trivandrum' }
];

const aiThemes = [
    {
        icon: Bot,
        title: 'AI Agents',
        description: 'Autonomous systems that perceive, reason, and act in complex environments.',
        color: '#c678ff'
    },
    {
        icon: Brain,
        title: 'Generative AI',
        description: 'Creating new content—from code to art—using advanced neural networks.',
        color: '#61dafb'
    },
    {
        icon: Cpu,
        title: 'LLM Integration',
        description: 'Building real-world applications powered by large language models.',
        color: '#ff6ac1'
    },
    {
        icon: Zap,
        title: 'RAG & Agents',
        description: 'Retrieval-augmented generation and multi-agent orchestration.',
        color: '#ffc34d'
    }
];

export default function AboutPage() {
    return (
        <div className="about-page">
            <SEO title="About Us" description="Learn about ASCA, CET, and the vision behind INCEPTA 2026 - Kerala's premier AI tech fest." />
            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-content">
                    <span className="about-badge">About Us</span>
                    <h1 className="about-hero-title">
                        The Legacy, Community &<br />
                        <span className="gradient-text">Vision of INCEPTA</span>
                    </h1>
                    <p className="about-hero-subtitle">
                        Discover the institutions and people behind Kerala's premier AI-focused tech fest
                    </p>
                </div>
                <div className="about-hero-stats">
                    {festHighlights.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div className="hero-stat" key={index}>
                                <div className="hero-stat-icon">
                                    <Icon size={24} />
                                </div>
                                <div className="hero-stat-content">
                                    <span className="hero-stat-value">{item.label}</span>
                                    <span className="hero-stat-label">{item.sublabel}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* About Cards Section */}
            <section className="about-cards-section">
                {aboutData.map((card, index) => {
                    const isReversed = index % 2 !== 0;

                    return (
                        <div className={`about-card-full ${isReversed ? 'reversed' : ''}`} key={card.id}>
                            <div className="about-card-visual" style={{ background: card.gradient }}>
                                <div className="about-card-logo">
                                    <img
                                        src={`${import.meta.env.BASE_URL}${card.logo}`}
                                        alt={card.shortTitle}
                                    />
                                </div>
                            </div>
                            <div className="about-card-content">
                                <h2 className="about-card-title" style={{ color: card.color }}>{card.title}</h2>
                                <p className="about-card-description">{card.description}</p>
                                <div className="about-card-highlights">
                                    {card.highlights.map((highlight, idx) => (
                                        <span
                                            key={idx}
                                            className="highlight-badge"
                                            style={{
                                                background: `${card.color}15`,
                                                borderColor: `${card.color}40`,
                                                color: card.color
                                            }}
                                        >
                                            {highlight}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </section>

            {/* Theme Focus Section */}
            <section className="theme-section">
                <div className="theme-header">
                    <h2 className="section-title">2026 Theme Focus</h2>
                    <p className="section-subtitle">
                        This year, we dive deep into the technologies defining the next era of computing
                    </p>
                </div>
                <div className="theme-grid">
                    {aiThemes.map((theme, index) => {
                        const Icon = theme.icon;
                        return (
                            <div className="theme-card" key={index}>
                                <div
                                    className="theme-card-icon"
                                    style={{
                                        background: `${theme.color}15`,
                                        borderColor: `${theme.color}40`
                                    }}
                                >
                                    <Icon size={32} style={{ color: theme.color }} />
                                </div>
                                <h3 className="theme-card-title">{theme.title}</h3>
                                <p className="theme-card-description">{theme.description}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Vision Section */}
            <section className="vision-section">
                <div className="vision-content">
                    <h2 className="section-title">Our Vision</h2>
                    <p className="vision-text">
                        INCEPTA 2026 aims to be more than just a tech fest—it's a movement to democratize
                        AI knowledge and inspire the next generation of innovators. We bring together
                        academic excellence, industry expertise, and student enthusiasm to create an
                        environment where ideas flourish and futures are shaped.
                    </p>
                    <div className="vision-features">
                        <div className="vision-feature">
                            <Clock size={20} />
                            <span>2 Days of Immersive Learning</span>
                        </div>
                        <div className="vision-feature">
                            <Users size={20} />
                            <span>Industry Expert Sessions</span>
                        </div>
                        <div className="vision-feature">
                            <Zap size={20} />
                            <span>Hands-on AI Workshops</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
