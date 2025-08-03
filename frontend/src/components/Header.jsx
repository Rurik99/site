import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="header-nav">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <a href="#" className="logo">
            WP Master
          </a>
          
          <nav className="nav-actions">
            <a 
              href="#course" 
              className="body-small" 
              style={{ textDecoration: 'none', color: 'var(--text-primary)' }}
            >
              Course
            </a>
            <a 
              href="#instructor" 
              className="body-small" 
              style={{ textDecoration: 'none', color: 'var(--text-primary)' }}
            >
              Instructor
            </a>
            <a 
              href="#testimonials" 
              className="body-small" 
              style={{ textDecoration: 'none', color: 'var(--text-primary)' }}
            >
              Reviews
            </a>
            <a 
              href="#register" 
              className="btn-primary"
              style={{ textDecoration: 'none' }}
            >
              Start Learning
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;