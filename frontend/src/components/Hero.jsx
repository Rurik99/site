import React from 'react';
import { Star, Play, Users, Clock } from 'lucide-react';

const Hero = () => {
  const handleGetStarted = () => {
    document.getElementById('register').scrollIntoView({ behavior: 'smooth' });
  };

  const handleWatchPreview = () => {
    alert('Video preview would open here - this is a mock implementation');
  };

  return (
    <section className="hero-section" id="hero">
      <div className="hero-content">
        <div className="hero-announcement">
          <Star size={12} fill="currentColor" />
          <span>4.9/5 Rating • 2,500+ Students Enrolled</span>
        </div>
        
        <h1 className="heading-hero hero-title">
          Master WordPress From Zero to Professional Website Creator
        </h1>
        
        <p className="body-large hero-subtitle">
          Learn everything you need to build stunning WordPress websites. From basic setup to advanced customization - we'll guide you step by step through the complete journey.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button 
              className="btn-primary"
              onClick={handleGetStarted}
            >
              Start Learning Now
            </button>
            <button 
              className="btn-secondary"
              onClick={handleWatchPreview}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Play size={16} />
              Watch Preview
            </button>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }} className="caption">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Users size={14} />
              <span>2,500+ students</span>
            </div>
            <span>•</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Clock size={14} />
              <span>12+ hours content</span>
            </div>
            <span>•</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Star size={14} fill="currentColor" />
              <span>Lifetime access</span>
            </div>
          </div>
        </div>
        
        <div className="mono-text" style={{ textAlign: 'center' }}>
          "The most comprehensive WordPress course for beginners"
        </div>
      </div>
    </section>
  );
};

export default Hero;