import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Info, Calendar, Image, BarChart3, Mail, X, Instagram, Linkedin } from 'lucide-react';

const navItems = [
    { id: 'about', label: 'About', icon: Info },
    { id: 'events', label: 'Explore', icon: Calendar },
    { id: 'gallery', label: 'Gallery', icon: Image },
    { id: 'stats', label: 'Stats', icon: BarChart3 },
    { id: 'contact', label: 'Contact', icon: Mail },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (sidebarOpen) {
            document.body.classList.add('sidebar-open');
        } else {
            document.body.classList.remove('sidebar-open');
        }
    }, [sidebarOpen]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setSidebarOpen(false);
    };

    return (
        <>
            <header className={scrolled ? 'scrolled' : ''}>
                <Link to="/" className="logo">
                    <img src={`${import.meta.env.BASE_URL}logo.png`} alt="INCEPTA 2026" style={{ height: '40px', width: 'auto', verticalAlign: 'middle' }} />
                </Link>
                <nav>
                    <ul>
                        {navItems.map(item => (
                            <li key={item.id}>
                                <a href={`#${item.id}`} onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <button
                    className={`burger-menu ${sidebarOpen ? 'active' : ''}`}
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={sidebarOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </header>

            {/* Sidebar */}
            <div
                className={`sidebar ${sidebarOpen ? 'active' : ''}`}
                role="navigation"
                aria-label="Mobile navigation"
                aria-hidden={!sidebarOpen}
            >
                <div className="sidebar-header">
                    <div className="sidebar-logo">
                        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="INCEPTA 2026" style={{ height: '40px', width: 'auto' }} />
                    </div>
                    <button className="sidebar-close" onClick={() => setSidebarOpen(false)} aria-label="Close menu">
                        <X size={24} />
                    </button>
                </div>
                <nav className="sidebar-nav">
                    {navItems.map(item => {
                        const Icon = item.icon;
                        return (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                            >
                                <Icon size={20} />
                                {item.label}
                            </a>
                        );
                    })}
                </nav>
                <div className="sidebar-footer">
                    <p>Follow us on social media</p>
                    <div className="social-links" style={{ marginTop: '15px', gap: '10px', justifyContent: 'center' }}>
                        <a href="#" aria-label="Instagram" className="social-link">
                            <Instagram size={20} />
                        </a>
                        <a href="#" aria-label="LinkedIn" className="social-link">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>

            { }
            <div
                className={`overlay ${sidebarOpen ? 'active' : ''}`}
                onClick={() => setSidebarOpen(false)}
            />
        </>
    );
}
