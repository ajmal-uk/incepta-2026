import { GraduationCap, Users, Star } from 'lucide-react';
const aboutData = [
    {
        id: 'cet',
        title: 'About CET',
        description: 'For 85 illustrious years since its foundation in 1939, College of Engineering Trivandrum (CET) has remained a beacon of technical excellence in Kerala. We consistently rank among the foremost institutions in India, fostering innovation and technical brilliance.',
        icon: 'graduationCap'
    },
    {
        id: 'asca',
        title: 'About ASCA',
        description: 'The Association of Students of Computer Applications (ASCA) is the official student body of the MCA Department. We foster innovation through technical workshops, hackathons, and cultural initiatives, building a vibrant community of future tech leaders.',
        icon: 'users'
    },
    {
        id: 'incepta',
        title: 'About INCEPTA',
        description: "INCEPTA is our flagship tech fest. The 2026 edition is purely focused on the disruptive fields of AI Agents and Generative AI, bridging the gap between academic theory and industry reality. Join us for two days of innovation, learning, and competition.",
        icon: 'star'
    }
];

const iconMap = {
    graduationCap: GraduationCap,
    users: Users,
    star: Star
};

export default function About() {
    return (
        <section id="about" className="section">
            <h2 className="section-title">About The Fest</h2>
            <p className="section-subtitle">Discover the legacy, community, and vision behind INCEPTA 2026</p>
            <div className="about-grid">
                {aboutData.map(card => {
                    const Icon = iconMap[card.icon];
                    return (
                        <div className="about-card" key={card.id}>
                            <div className="about-card-icon">
                                <Icon size={24} />
                            </div>
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
