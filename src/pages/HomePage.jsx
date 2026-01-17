import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Trophy, Calendar, Music, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

const categories = [
    {
        id: 'competitions',
        title: 'Competitions',
        description: 'Test your skills in hackathons, CTF, coding challenges, and more. Compete for glory and prizes!',
        icon: Trophy,
        color: '#c678ff',
        link: '/competitions'
    },
    {
        id: 'events',
        title: 'Workshops & Events',
        description: 'Learn from industry experts with hands-on workshops and fun activities like treasure hunts.',
        icon: Calendar,
        color: '#61dafb',
        link: '/events'
    },
    {
        id: 'gala',
        title: 'INCEPTA Gala',
        description: 'Two nights of music, dance, and unforgettable performances. The cultural highlight of the fest!',
        icon: Music,
        color: '#ff6ac1',
        link: '/gala'
    }
];

function CategoryCard({ category }) {
    const Icon = category.icon;
    const isEvents = category.id === 'events';

    if (isEvents) {
        return (
            <div className="category-card disabled" style={{ '--accent-color': category.color, opacity: 0.7, cursor: 'not-allowed' }}>
                <div className="category-icon" style={{ background: `linear-gradient(135deg, ${category.color}33 0%, ${category.color}15 100%)`, borderColor: `${category.color}40` }}>
                    <Icon size={36} style={{ color: category.color }} />
                </div>
                <h3 className="category-title">{category.title}</h3>
                <p className="category-description">{category.description}</p>
                <div className="category-cta" style={{ color: category.color }}>
                    Coming Soon
                </div>
            </div>
        );
    }

    return (
        <Link to={category.link} className="category-card" style={{ '--accent-color': category.color }}>
            <div className="category-icon" style={{ background: `linear-gradient(135deg, ${category.color}33 0%, ${category.color}15 100%)`, borderColor: `${category.color}40` }}>
                <Icon size={36} style={{ color: category.color }} />
            </div>
            <h3 className="category-title">{category.title}</h3>
            <p className="category-description">{category.description}</p>
            <div className="category-cta" style={{ color: category.color }}>
                Explore <ArrowRight size={18} />
            </div>
        </Link>
    );
}

export default function HomePage() {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            setTimeout(() => {
                const element = document.getElementById(location.state.scrollTo);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location.state]);

    return (
        <div className="page-container home-page">
            <SEO title="Home" />
            <Hero />

            <section id="events" className="section">
                <h2 className="section-title">Explore INCEPTA</h2>
                <p className="section-subtitle">Choose your adventure - competitions, workshops, or cultural celebrations</p>
                <div className="categories-grid">
                    {categories.map(cat => (
                        <CategoryCard key={cat.id} category={cat} />
                    ))}
                </div>
            </section>

            <Gallery />

            <Contact />
        </div>
    );
}
