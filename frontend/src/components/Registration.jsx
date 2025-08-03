import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Mail, User, Phone } from 'lucide-react';
import { registrationBenefits } from '../data/mock';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Демонстрационная регистрация - сохранение в localStorage
    const registrations = JSON.parse(localStorage.getItem('wpCourseRegistrations') || '[]');
    registrations.push({
      ...formData,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('wpCourseRegistrations', JSON.stringify(registrations));
    
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '' });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="register" className="pad-2xl" style={{ 
      background: 'var(--gradient-hero-subtle)',
      position: 'relative'
    }}>
      <div className="container">
        {!isSubmitted ? (
          <>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 className="heading-1">Готовы освоить WordPress?</h2>
              <p className="body-large" style={{ marginTop: '1rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
                Присоединяйтесь к тысячам студентов, которые преобразили свои навыки веб-разработки. Начните свое путешествие в мир WordPress уже сегодня!
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3rem',
              alignItems: 'start'
            }}>
              {/* Преимущества регистрации */}
              <div>
                <h3 className="heading-2" style={{ marginBottom: '1.5rem' }}>
                  Что включено:
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {registrationBenefits.map((benefit, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <CheckCircle 
                        size={16} 
                        style={{ 
                          color: 'var(--accent-green-200)', 
                          marginTop: '0.125rem',
                          flexShrink: 0
                        }} 
                      />
                      <span className="body-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div style={{
                  background: 'rgba(255, 255, 255, 0.4)',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  marginTop: '2rem',
                  backdropFilter: 'blur(4px)'
                }}>
                  <div className="mono-text" style={{ marginBottom: '0.5rem' }}>
                    ОГРАНИЧЕННОЕ ПРЕДЛОЖЕНИЕ
                  </div>
                  <div className="heading-2" style={{ marginBottom: '0.5rem' }}>
                    Скидка для первых студентов
                  </div>
                  <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
                    Зарегистрируйтесь сейчас и получите мгновенный доступ плюс эксклюзивные бонусные материалы стоимостью 15,000₽
                  </p>
                </div>
              </div>

              {/* Форма регистрации */}
              <div style={{
                background: 'var(--bg-card)',
                borderRadius: '1rem',
                padding: '2rem',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)'
              }}>
                <h3 className="heading-2" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                  Начните обучение сегодня
                </h3>

                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label className="body-small" style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem',
                      color: 'var(--text-secondary)'
                    }}>
                      Полное имя *
                    </label>
                    <div style={{ position: 'relative' }}>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          paddingLeft: '2.5rem',
                          border: '1px solid var(--border-input)',
                          borderRadius: '0.75rem',
                          fontSize: '1rem',
                          background: 'var(--bg-card)',
                          color: 'var(--text-primary)',
                          outline: 'none',
                          transition: 'border-color 0.2s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--border-input-focus)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--border-input)'}
                        placeholder="Введите ваше полное имя"
                      />
                      <User 
                        size={16} 
                        style={{ 
                          position: 'absolute',
                          left: '0.75rem',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          color: 'var(--text-muted)'
                        }} 
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label className="body-small" style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem',
                      color: 'var(--text-secondary)'
                    }}>
                      Email адрес *
                    </label>
                    <div style={{ position: 'relative' }}>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          paddingLeft: '2.5rem',
                          border: '1px solid var(--border-input)',
                          borderRadius: '0.75rem',
                          fontSize: '1rem',
                          background: 'var(--bg-card)',
                          color: 'var(--text-primary)',
                          outline: 'none',
                          transition: 'border-color 0.2s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--border-input-focus)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--border-input)'}
                        placeholder="ваш@email.ru"
                      />
                      <Mail 
                        size={16} 
                        style={{ 
                          position: 'absolute',
                          left: '0.75rem',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          color: 'var(--text-muted)'
                        }} 
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '2rem' }}>
                    <label className="body-small" style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem',
                      color: 'var(--text-secondary)'
                    }}>
                      Номер телефона (не обязательно)
                    </label>
                    <div style={{ position: 'relative' }}>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          paddingLeft: '2.5rem',
                          border: '1px solid var(--border-input)',
                          borderRadius: '0.75rem',
                          fontSize: '1rem',
                          background: 'var(--bg-card)',
                          color: 'var(--text-primary)',
                          outline: 'none',
                          transition: 'border-color 0.2s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--border-input-focus)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--border-input)'}
                        placeholder="+7 (999) 123-45-67"
                      />
                      <Phone 
                        size={16} 
                        style={{ 
                          position: 'absolute',
                          left: '0.75rem',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          color: 'var(--text-muted)'
                        }} 
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="btn-primary"
                    style={{ 
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      minHeight: '3rem'
                    }}
                  >
                    Записаться на курс
                    <ArrowRight size={16} />
                  </button>
                </form>

                <p className="caption" style={{ 
                  textAlign: 'center', 
                  marginTop: '1rem',
                  color: 'var(--text-muted)'
                }}>
                  Никакого спама. Отписаться можно в любой момент.
                </p>
              </div>
            </div>
          </>
        ) : (
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <div style={{
              width: '4rem',
              height: '4rem',
              borderRadius: '50%',
              background: 'var(--accent-green-200)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem'
            }}>
              <CheckCircle size={32} style={{ color: 'white' }} />
            </div>
            
            <h2 className="heading-1" style={{ marginBottom: '1rem' }}>
              Добро пожаловать в WP Мастер!
            </h2>
            
            <p className="body-large" style={{ marginBottom: '2rem' }}>
              Спасибо за регистрацию! Мы отправим вам данные для доступа к курсу и следующие шаги на email в течение нескольких минут.
            </p>
            
            <div style={{
              background: 'var(--bg-card)',
              borderRadius: '1rem',
              padding: '2rem',
              marginBottom: '2rem'
            }}>
              <h3 className="heading-3" style={{ marginBottom: '1rem' }}>
                Что дальше?
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', textAlign: 'left' }}>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <span style={{ 
                    background: 'var(--text-primary)', 
                    color: 'white', 
                    borderRadius: '50%', 
                    width: '1.5rem', 
                    height: '1.5rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    flexShrink: 0
                  }}>1</span>
                  <span className="body-medium">Проверьте почту для получения ссылки доступа к курсу</span>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <span style={{ 
                    background: 'var(--text-primary)', 
                    color: 'white', 
                    borderRadius: '50%', 
                    width: '1.5rem', 
                    height: '1.5rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    flexShrink: 0
                  }}>2</span>
                  <span className="body-medium">Создайте свой студенческий аккаунт</span>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <span style={{ 
                    background: 'var(--text-primary)', 
                    color: 'white', 
                    borderRadius: '50%', 
                    width: '1.5rem', 
                    height: '1.5rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    flexShrink: 0
                  }}>3</span>
                  <span className="body-medium">Начните с Модуля 1: Основы WordPress</span>
                </div>
              </div>
            </div>
            
            <button 
              className="btn-secondary"
              onClick={() => setIsSubmitted(false)}
            >
              Зарегистрировать еще одного студента
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Registration;