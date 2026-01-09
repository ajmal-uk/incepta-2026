import { Link } from 'react-router-dom';
import { Trophy, Calendar, Music, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Stats from '../components/Stats';
import Contact from '../components/Contact';

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
    return (
        <>
            <Hero />
            <About />

            {/* Categories Section */}
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
            <Stats />
            <Contact />
        </>
    );
}
