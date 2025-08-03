import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/mock';

const Testimonials = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        size={14} 
        fill={i < rating ? 'currentColor' : 'none'}
        style={{ color: i < rating ? '#FFA500' : 'var(--border-light)' }}
      />
    ));
  };

  return (
    <section id="testimonials" className="pad-2xl" style={{ background: 'var(--bg-section)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="heading-1">Отзывы наших студентов</h2>
          <p className="body-large" style={{ marginTop: '1rem' }}>
            Присоединяйтесь к тысячам успешных студентов, которые преобразили свои навыки работы с WordPress
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} style={{
              background: 'var(--bg-card)',
              borderRadius: '1rem',
              padding: '1.5rem',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
              position: 'relative'
            }}>
              {/* Иконка цитаты */}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                opacity: 0.1
              }}>
                <Quote size={32} />
              </div>

              {/* Рейтинг */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '1rem' }}>
                {renderStars(testimonial.rating)}
              </div>

              {/* Текст отзыва */}
              <p className="body-medium" style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                "{testimonial.text}"
              </p>

              {/* Информация об авторе */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div className="body-small" style={{ fontWeight: '500', marginBottom: '0.25rem' }}>
                    {testimonial.name}
                  </div>
                  <div className="caption" style={{ color: 'var(--text-muted)' }}>
                    {testimonial.role}
                  </div>
                </div>
                <div className="caption" style={{ color: 'var(--text-muted)' }}>
                  {testimonial.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Общая статистика */}
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: '1rem',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '2rem'
          }}>
            <div>
              <div className="heading-1" style={{ color: 'var(--accent-blue-400)', marginBottom: '0.5rem' }}>
                4.9/5
              </div>
              <div className="body-small" style={{ color: 'var(--text-muted)' }}>
                Средний рейтинг
              </div>
            </div>
            <div>
              <div className="heading-1" style={{ color: 'var(--accent-orange-400)', marginBottom: '0.5rem' }}>
                2,500+
              </div>
              <div className="body-small" style={{ color: 'var(--text-muted)' }}>
                Довольных студентов
              </div>
            </div>
            <div>
              <div className="heading-1" style={{ color: 'var(--accent-green-200)', marginBottom: '0.5rem' }}>
                98%
              </div>
              <div className="body-small" style={{ color: 'var(--text-muted)' }}>
                Завершили курс
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;