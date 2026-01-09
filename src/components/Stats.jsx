import { Users, Home, GraduationCap, BookOpen } from 'lucide-react';
const statsData = [
    { number: '3K+', label: 'MCA Students', icon: 'users' },
    { number: '5K+', label: 'Campus Footfall', icon: 'home' },
    { number: '32', label: 'Colleges', icon: 'graduationCap' },
    { number: '500+', label: 'School Outreach', icon: 'bookOpen' }
];

const iconMap = {
    users: Users,
    home: Home,
    graduationCap: GraduationCap,
    bookOpen: BookOpen
};

export default function Stats() {
    return (
        <section id="stats" className="section">
            <h2 className="section-title">Our Reach</h2>
            <p className="section-subtitle">Connecting thousands of students, colleges, and technology enthusiasts</p>
            <div className="stats-grid">
                {statsData.map((stat, index) => {
                    const Icon = iconMap[stat.icon];
                    return (
                        <div className="stat-card" key={index}>
                            <div className="stat-icon">
                                <Icon size={28} />
                            </div>
                            <span className="stat-number">{stat.number}</span>
                            <span className="stat-label">{stat.label}</span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
