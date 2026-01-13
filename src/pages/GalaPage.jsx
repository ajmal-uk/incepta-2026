import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award, ArrowRight, Calendar, MapPin, Clock, Users } from 'lucide-react';
import { eventsData, eventCategories } from '../eventsData';

export default function GalaPage() {
    const category = eventCategories.gala;
    const gala = eventsData.gala;

    return (
        <div className="page-container gala-page">
            <section className="page-hero gala-hero" style={{ '--accent-color': category.color }}>
                <Link to="/" className="back-link">
                    <ArrowLeft size={20} /> Back to Home
                </Link>
                <div className="gala-badge">
                    <Award size={20} />
                    Cultural Celebration
                </div>
                <h1 className="gala-title">{gala.title}</h1>
                <p className="gala-tagline">{gala.tagline}</p>
            </section>

            <section className="section gala-content">
                <div className="gala-info-grid">
                    <div className="gala-info-card">
                        <Calendar size={28} />
                        <div>
                            <h4>Date</h4>
                            <p>Jan 29-30, 2026</p>
                        </div>
                    </div>
                    <div className="gala-info-card">
                        <Clock size={28} />
                        <div>
                            <h4>Time</h4>
                            <p>5:00 PM - 10:00 PM</p>
                        </div>
                    </div>
                    <div className="gala-info-card">
                        <MapPin size={28} />
                        <div>
                            <h4>Venue</h4>
                            <p>Gazebo/DJ Hall</p>
                        </div>
                    </div>
                    <div className="gala-info-card">
                        <Users size={28} />
                        <div>
                            <h4>Audience</h4>
                            <p>500+ Expected</p>
                        </div>
                    </div>
                </div>

                <div className="gala-description">
                    <h2>About The Gala</h2>
                    <p>{gala.description}</p>
                </div>

                <div className="gala-highlights">
                    <h3>Highlights</h3>
                    <div className="highlights-grid">
                        {gala.highlights.map((highlight, index) => (
                            <div className="highlight-card" key={index}>
                                <span className="highlight-number">{index + 1}</span>
                                <p>{highlight}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="gala-cta">
                    <a href={gala.registrationUrl} className="cta-button gala-button">
                        {gala.buttonText}
                        <ArrowRight size={20} />
                    </a>
                </div>
            </section>
        </div>
    );
}
