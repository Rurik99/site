import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ 
      background: 'var(--text-primary)', 
      color: 'white',
      padding: '3rem 0 2rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Company Info */}
          <div>
            <div className="heading-2" style={{ marginBottom: '1rem', color: 'white' }}>
              WP Master
            </div>
            <p className="body-medium" style={{ marginBottom: '1.5rem', opacity: 0.8 }}>
              Empowering beginners to create professional WordPress websites through comprehensive, hands-on training.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {[Facebook, Twitter, Youtube, Instagram].map((Icon, index) => (
                <button
                  key={index}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: 'none',
                    borderRadius: '0.5rem',
                    padding: '0.5rem',
                    cursor: 'pointer',
                    transition: 'background 0.2s ease'
                  }}
                  onMouseOver={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
                  onMouseOut={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
                  onClick={() => alert('Social media link - mock implementation')}
                >
                  <Icon size={16} color="white" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="heading-3" style={{ marginBottom: '1rem', color: 'white' }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { label: 'Course Overview', href: '#course' },
                { label: 'About Instructor', href: '#instructor' },
                { label: 'Student Reviews', href: '#testimonials' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Register Now', href: '#register' }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="body-small"
                  style={{ 
                    color: 'white', 
                    opacity: 0.8,
                    textDecoration: 'none',
                    transition: 'opacity 0.2s ease'
                  }}
                  onMouseOver={(e) => e.target.style.opacity = '1'}
                  onMouseOut={(e) => e.target.style.opacity = '0.8'}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Course Info */}
          <div>
            <h4 className="heading-3" style={{ marginBottom: '1rem', color: 'white' }}>
              Course Details
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div className="body-small" style={{ opacity: 0.8 }}>
                📚 6 Comprehensive Modules
              </div>
              <div className="body-small" style={{ opacity: 0.8 }}>
                ⏱️ 12+ Hours of Content
              </div>
              <div className="body-small" style={{ opacity: 0.8 }}>
                👥 2,500+ Happy Students
              </div>
              <div className="body-small" style={{ opacity: 0.8 }}>
                🏆 Certificate of Completion
              </div>
              <div className="body-small" style={{ opacity: 0.8 }}>
                💯 Lifetime Access
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="heading-3" style={{ marginBottom: '1rem', color: 'white' }}>
              Contact Us
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="body-small">
                <Mail size={14} style={{ opacity: 0.8 }} />
                <span style={{ opacity: 0.8 }}>hello@wpmaster.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="body-small">
                <Phone size={14} style={{ opacity: 0.8 }} />
                <span style={{ opacity: 0.8 }}>+1 (555) 123-4567</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }} className="body-small">
                <MapPin size={14} style={{ opacity: 0.8, marginTop: '0.125rem', flexShrink: 0 }} />
                <span style={{ opacity: 0.8 }}>123 Learning Street<br />Education City, EC 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2rem'
          }}>
            {[
              'Privacy Policy',
              'Terms of Service',
              'Refund Policy',
              'Student Support'
            ].map((item, index) => (
              <button
                key={index}
                className="caption"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  opacity: 0.8,
                  cursor: 'pointer',
                  transition: 'opacity 0.2s ease'
                }}
                onMouseOver={(e) => e.target.style.opacity = '1'}
                onMouseOut={(e) => e.target.style.opacity = '0.8'}
                onClick={() => alert(`${item} - mock implementation`)}
              >
                {item}
              </button>
            ))}
          </div>
          
          <div className="caption" style={{ opacity: 0.6, textAlign: 'center' }}>
            © {currentYear} WP Master. All rights reserved. Made with ❤️ for WordPress learners.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;