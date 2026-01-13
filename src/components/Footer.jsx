import { Instagram, Linkedin, Link } from 'lucide-react';
const socialLinks = [
    { name: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/incepta.cet?igsh=MTNpZmNudWtnNW44' },
    { name: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/company/asca-cet/' },
    { name: 'Linktree', icon: 'linktree', href: 'https://linktr.ee/incepta26?utm_source=linktree_profile_share' }
];

const iconMap = {
    instagram: Instagram,
    linkedin: Linkedin,
    linktree: Link
};

export default function Footer() {
    return (
        <footer>
            <div className="footer-logo">INCEPTA 2026</div>
            <div className="social-links">
                {socialLinks.map(link => {
                    const Icon = iconMap[link.icon];
                    return (
                        <a href={link.href} className="social-link" aria-label={link.name} key={link.name}>
                            <Icon size={22} />
                        </a>
                    );
                })}
            </div>
            <p className="footer-text">© 2026 INCEPTA. Organized by ASCA, College of Engineering Trivandrum.</p>
            <p className="footer-text" style={{ marginTop: '12px' }}>
                Designed with <span className="footer-text-highlight">♥</span> by ASCA Tech Team
            </p>
        </footer>
    );
}
