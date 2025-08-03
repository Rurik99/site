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
          {/* Информация о компании */}
          <div>
            <div className="heading-2" style={{ marginBottom: '1rem', color: 'white' }}>
              WP Мастер
            </div>
            <p className="body-medium" style={{ marginBottom: '1.5rem', opacity: 0.8 }}>
              Помогаем новичкам создавать профессиональные WordPress сайты через всестороннее практическое обучение.
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
                  onClick={() => alert('Ссылка на социальную сеть - демонстрационная реализация')}
                >
                  <Icon size={16} color="white" />
                </button>
              ))}
            </div>
          </div>

          {/* Быстрые ссылки */}
          <div>
            <h4 className="heading-3" style={{ marginBottom: '1rem', color: 'white' }}>
              Быстрые ссылки
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { label: 'Обзор курса', href: '#course' },
                { label: 'Об инструкторе', href: '#instructor' },
                { label: 'Отзывы студентов', href: '#testimonials' },
                { label: 'Вопросы и ответы', href: '#faq' },
                { label: 'Зарегистрироваться', href: '#register' }
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

          {/* Информация о курсе */}
          <div>
            <h4 className="heading-3" style={{ marginBottom: '1rem', color: 'white' }}>
              Детали курса
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div className="body-small" style={{ opacity: 0.8 }}>
                📚 6 всесторонних модулей
              </div>
              <div className="body-small" style={{ opacity: 0.8 }}>
                ⏱️ 12+ часов контента
              </div>
              <div className="body-small" style={{ opacity: 0.8 }}>
                👥 2,500+ довольных студентов
              </div>
              <div className="body-small" style={{ opacity: 0.8 }}>
                🏆 Сертификат о завершении
              </div>
              <div className="body-small" style={{ opacity: 0.8 }}>
                💯 Пожизненный доступ
              </div>
            </div>
          </div>

          {/* Контактная информация */}
          <div>
            <h4 className="heading-3" style={{ marginBottom: '1rem', color: 'white' }}>
              Связаться с нами
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="body-small">
                <Mail size={14} style={{ opacity: 0.8 }} />
                <span style={{ opacity: 0.8 }}>hello@wpmaster.ru</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="body-small">
                <Phone size={14} style={{ opacity: 0.8 }} />
                <span style={{ opacity: 0.8 }}>+7 (495) 123-45-67</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }} className="body-small">
                <MapPin size={14} style={{ opacity: 0.8, marginTop: '0.125rem', flexShrink: 0 }} />
                <span style={{ opacity: 0.8 }}>ул. Обучения, 123<br />Москва, 123456</span>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя панель */}
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
              'Политика конфиденциальности',
              'Условия использования',
              'Политика возврата',
              'Поддержка студентов'
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
                onClick={() => alert(`${item} - демонстрационная реализация`)}
              >
                {item}
              </button>
            ))}
          </div>
          
          <div className="caption" style={{ opacity: 0.6, textAlign: 'center' }}>
            © {currentYear} WP Мастер. Все права защищены. Создано с ❤️ для изучающих WordPress.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;