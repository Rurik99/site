import React from 'react';
import { Clock, BookOpen, CheckCircle } from 'lucide-react';
import { courseModules } from '../data/mock';

const CourseOverview = () => {
  return (
    <section id="course" className="pad-2xl" style={{ background: 'var(--bg-page)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="heading-1">Полная программа изучения WordPress</h2>
          <p className="body-large" style={{ marginTop: '1rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            Шесть всесторонних модулей, разработанных чтобы провести вас от полного новичка до профессионала WordPress. Каждый модуль основывается на предыдущем, обеспечивая прочное понимание.
          </p>
        </div>

        <div className="course-grid">
          {courseModules.map((module, index) => (
            <div key={module.id} className={`course-card ${module.accent}`}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div className="mono-text" style={{ 
                  background: 'rgba(255, 255, 255, 0.6)', 
                  padding: '0.25rem 0.5rem', 
                  borderRadius: '0.5rem',
                  fontSize: '0.75rem'
                }}>
                  МОДУЛЬ {index + 1}
                </div>
                <CheckCircle size={16} style={{ color: 'var(--text-secondary)' }} />
              </div>
              
              <h3 className="heading-3" style={{ marginBottom: '0.5rem' }}>
                {module.title}
              </h3>
              
              <p className="body-small" style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                {module.description}
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: 'auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="caption">
                  <Clock size={12} />
                  <span>{module.duration}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="caption">
                  <BookOpen size={12} />
                  <span>{module.lessons} уроков</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button 
            className="btn-primary"
            onClick={() => document.getElementById('register').scrollIntoView({ behavior: 'smooth' })}
          >
            Записаться на полный курс
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;