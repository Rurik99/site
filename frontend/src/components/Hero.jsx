import React from 'react';
import { Star, Play, Users, Clock } from 'lucide-react';

const Hero = ({ courseInfo }) => {
  const handleGetStarted = () => {
    document.getElementById('register').scrollIntoView({ behavior: 'smooth' });
  };

  const handleWatchPreview = () => {
    alert('Здесь откроется видео-превью - это демонстрационная реализация');
  };

  // Получить статистику из API или использовать fallback
  const stats = courseInfo?.stats || {
    total_students: 2500,
    rating: 4.9
  };

  return (
    <section className="hero-section" id="hero">
      <div className="hero-content">
        <div className="hero-announcement">
          <Star size={12} fill="currentColor" />
          <span>Рейтинг {stats.rating}/5 • Более {stats.total_students} студентов зарегистрировано</span>
        </div>
        
        <h1 className="heading-hero hero-title">
          Освойте WordPress от нуля до профессионального создателя сайтов
        </h1>
        
        <p className="body-large hero-subtitle">
          Изучите все необходимое для создания потрясающих WordPress сайтов. От базовой настройки до продвинутой кастомизации - мы проведем вас пошагово через весь путь.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button 
              className="btn-primary"
              onClick={handleGetStarted}
            >
              Начать обучение сейчас
            </button>
            <button 
              className="btn-secondary"
              onClick={handleWatchPreview}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Play size={16} />
              Смотреть превью
            </button>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }} className="caption">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Users size={14} />
              <span>{stats.total_students}+ студентов</span>
            </div>
            <span>•</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Clock size={14} />
              <span>12+ часов контента</span>
            </div>
            <span>•</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Star size={14} fill="currentColor" />
              <span>Пожизненный доступ</span>
            </div>
          </div>
        </div>
        
        <div className="mono-text" style={{ textAlign: 'center' }}>
          "Самый полный курс WordPress для начинающих"
        </div>
      </div>
    </section>
  );
};

export default Hero;