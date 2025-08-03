import React from 'react';
import { Star, Users, Award, BookOpen } from 'lucide-react';
import { instructor } from '../data/mock';

const Instructor = () => {
  return (
    <section id="instructor" className="pad-2xl" style={{ background: 'var(--bg-page)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="heading-1">Познакомьтесь с вашим инструктором</h2>
          <p className="body-large" style={{ marginTop: '1rem' }}>
            Учитесь у опытного профессионала, который помог тысячам освоить WordPress
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'center'
        }}>
          {/* Изображение инструктора - заглушка */}
          <div style={{
            background: 'var(--accent-purple-200)',
            borderRadius: '1rem',
            aspectRatio: '1/1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '300px'
          }}>
            <div style={{
              width: '6rem',
              height: '6rem',
              borderRadius: '50%',
              background: 'var(--bg-card)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Users size={32} style={{ color: 'var(--text-secondary)' }} />
            </div>
          </div>

          {/* Информация об инструкторе */}
          <div>
            <h3 className="heading-1" style={{ marginBottom: '0.5rem' }}>
              {instructor.name}
            </h3>
            <p className="body-large" style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              {instructor.title}
            </p>
            
            {/* Статистика */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              <div style={{
                background: 'var(--bg-card)',
                padding: '1rem',
                borderRadius: '0.75rem',
                textAlign: 'center'
              }}>
                <div className="heading-2" style={{ color: 'var(--accent-blue-400)' }}>
                  {instructor.experience}
                </div>
                <div className="body-small" style={{ color: 'var(--text-muted)' }}>
                  Опыта
                </div>
              </div>
              <div style={{
                background: 'var(--bg-card)',
                padding: '1rem',
                borderRadius: '0.75rem',
                textAlign: 'center'
              }}>
                <div className="heading-2" style={{ color: 'var(--accent-orange-400)' }}>
                  {instructor.students}
                </div>
                <div className="body-small" style={{ color: 'var(--text-muted)' }}>
                  Обученных студентов
                </div>
              </div>
            </div>

            <p className="body-medium" style={{ marginBottom: '2rem', lineHeight: '1.6' }}>
              {instructor.bio}
            </p>

            {/* Сертификаты */}
            <div>
              <h4 className="heading-3" style={{ marginBottom: '1rem' }}>
                Сертификаты и квалификация
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {instructor.credentials.map((credential, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="body-small">
                    <Award size={14} style={{ color: 'var(--accent-green-200)' }} />
                    {credential}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <button 
                className="btn-secondary"
                onClick={() => document.getElementById('register').scrollIntoView({ behavior: 'smooth' })}
              >
                Учиться с Анной
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;