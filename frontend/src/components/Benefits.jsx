import React from 'react';
import { Play, Code, Infinity, HelpCircle } from 'lucide-react';
import { benefits } from '../data/mock';

const Benefits = () => {
  const getIcon = (iconName) => {
    const icons = {
      'play': Play,
      'code': Code,
      'infinity': Infinity,
      'help-circle': HelpCircle
    };
    const IconComponent = icons[iconName];
    return IconComponent ? <IconComponent size={24} /> : <Play size={24} />;
  };

  return (
    <section className="pad-2xl" style={{ background: 'var(--bg-section)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="heading-1">Why Choose Our WordPress Course?</h2>
          <p className="body-large" style={{ marginTop: '1rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            Designed specifically for beginners who want to build real websites, not just watch tutorials.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {benefits.map((benefit) => (
            <div key={benefit.id} style={{
              textAlign: 'center',
              padding: '2rem 1rem'
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '3rem',
                height: '3rem',
                borderRadius: '50%',
                background: 'var(--bg-card)',
                marginBottom: '1rem',
                color: 'var(--text-primary)'
              }}>
                {getIcon(benefit.icon)}
              </div>
              
              <h3 className="heading-3" style={{ marginBottom: '0.75rem' }}>
                {benefit.title}
              </h3>
              
              <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div style={{
          background: 'var(--bg-card)',
          borderRadius: '1rem',
          padding: '2rem',
          textAlign: 'center',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
        }}>
          <h3 className="heading-2" style={{ marginBottom: '1rem' }}>
            What You'll Build
          </h3>
          <p className="body-medium" style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
            By the end of this course, you'll have created:
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginBottom: '1.5rem'
          }}>
            {[
              'Personal portfolio website',
              'Business landing page',
              'Blog with custom design',
              'Optimized site for search engines'
            ].map((item, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="body-small">
                <div style={{
                  width: '1rem',
                  height: '1rem',
                  borderRadius: '50%',
                  background: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    width: '0.25rem',
                    height: '0.25rem',
                    borderRadius: '50%',
                    background: 'white'
                  }}></div>
                </div>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;