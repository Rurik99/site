import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="header-nav">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <a href="#" className="logo">
            WP Мастер
          </a>
          
          <nav className="nav-actions">
            <a 
              href="#course" 
              className="body-small" 
              style={{ textDecoration: 'none', color: 'var(--text-primary)' }}
            >
              Курс
            </a>
            <a 
              href="#instructor" 
              className="body-small" 
              style={{ textDecoration: 'none', color: 'var(--text-primary)' }}
            >
              Инструктор
            </a>
            <a 
              href="#testimonials" 
              className="body-small" 
              style={{ textDecoration: 'none', color: 'var(--text-primary)' }}
            >
              Отзывы
            </a>
            <a 
              href="#register" 
              className="btn-primary"
              style={{ textDecoration: 'none' }}
            >
              Начать обучение
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;