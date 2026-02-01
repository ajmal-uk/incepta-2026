import React from 'react';
import { Calendar, Clock, MapPin, Mic } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Inauguration() {
  return (
    <section className="inauguration-section" id="inauguration">
      <div className="inauguration-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inauguration-header"
        >
          <h2 className="section-title">The Dialogue: Live at CET</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="glass-card">
          <div className="bg-decoration-1"></div>
          <div className="bg-decoration-2"></div>

          <div className="inauguration-grid">
            {/* Image Section */}
            <div className="speaker-image-wrapper">
              <div className="speaker-frame">
                {/* Front Face */}
                <div className="card-face card-front">
                  <img 
                    src="/1.png" 
                    alt="Anantharaman Front" 
                    className="speaker-img"
                    onError={(e) => {
                      e.target.src = 'https://ui-avatars.com/api/?name=Anantharaman&background=0D8ABC&color=fff&size=400';
                    }}
                  />
                  <div className="image-overlay"></div>
                  <div className="speaker-info-overlay">
                    <h3 className="speaker-name">ANANTHARAMAN</h3>
                    <p className="speaker-role">Influencer, Free thinker, Actor, Youtuber</p>
                  </div>
                </div>

                {/* Back Face */}
                <div className="card-face card-back">
                  <img 
                    src="/2.png" 
                    alt="Anantharaman Back" 
                    className="speaker-img"
                    onError={(e) => {
                      e.target.src = 'https://ui-avatars.com/api/?name=Anantharaman&background=0D8ABC&color=fff&size=400';
                    }}
                  />
                  <div className="image-overlay"></div>
                  <div className="speaker-info-overlay">
                    <h3 className="speaker-name">ANANTHARAMAN</h3>
                    <p className="speaker-role">Influencer, Free thinker, Actor, Youtuber</p>
                  </div>
                </div>
              </div>
              
              <div className="floating-badge">
                <Mic size={16} />Speaker
              </div>
            </div>

            {/* Content Section */}
            <div className="content-wrapper">
              <div className="meta-info">
                <div className="meta-pill pill-blue">
                  <Calendar size={16} />
                  <span>6 FEB 2026</span>
                </div>
                <div className="meta-pill pill-purple">
                  <Clock size={16} />
                  <span>09:00 AM</span>
                </div>
                <div className="meta-pill pill-pink">
                  <MapPin size={16} />
                  <span>CETAA HALL</span>
                </div>
              </div>

              <h3 className="talk-title">
                Thinking for Ourselves in the Age of AI
              </h3>
              <h4 className="talk-subtitle">
                Critical Thinking in an AI World
              </h4>

              <div className="description-text">
                <p>
                  <span className="highlight"></span> Gen AI creates new content like text, images, or code by learning patterns from data. AI Agents combine this ability with reasoning and tools to make decisions and perform tasks autonomously.
                </p>
                
                <div className="quote-box">
                  <p>
                    "As AI increasingly shapes how we learn, work, and decide, critical thinking matters more than ever. This session explores scientific temper, human judgment, and independent thinking, encouraging reflection beyond simply using AI tools."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
