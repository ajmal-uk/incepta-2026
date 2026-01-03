import { useState, useEffect } from 'react';
import { Sun } from 'lucide-react';

export default function Hero() {
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const eventDate = new Date('2026-01-29T00:00:00').getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = eventDate - now;

            if (distance > 0) {
                setCountdown({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000)
                });
            }
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, []);

    const scrollToEvents = () => {
        const element = document.getElementById('events');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero">
            <div className="hero-badge">
                <Sun size={18} />
                January 29-30, 2026
            </div>
            <h1 className="hero-title">INCEPTA 2026</h1>
            <p className="hero-subtitle">
                A premier technical festival focused on AI Agents & Generative AI at the College of Engineering, Trivandrum.
            </p>
            <div className="countdown" id="countdown">
                <div className="countdown-item">
                    <span className="countdown-number">{countdown.days.toString().padStart(2, '0')}</span>
                    <span className="countdown-label">Days</span>
                </div>
                <div className="countdown-item">
                    <span className="countdown-number">{countdown.hours.toString().padStart(2, '0')}</span>
                    <span className="countdown-label">Hours</span>
                </div>
                <div className="countdown-item">
                    <span className="countdown-number">{countdown.minutes.toString().padStart(2, '0')}</span>
                    <span className="countdown-label">Minutes</span>
                </div>
                <div className="countdown-item">
                    <span className="countdown-number">{countdown.seconds.toString().padStart(2, '0')}</span>
                    <span className="countdown-label">Seconds</span>
                </div>
            </div>
            <button className="cta-button" onClick={scrollToEvents}>Register Now</button>
        </section>
    );
}
