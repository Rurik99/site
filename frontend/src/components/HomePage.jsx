import React from 'react';
import { useCourseInfo } from '../hooks/useApi';
import Header from './Header';
import Hero from './Hero';
import CourseOverview from './CourseOverview';
import Benefits from './Benefits';
import Instructor from './Instructor';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Registration from './Registration';
import Footer from './Footer';
import LoadingSpinner from './LoadingSpinner';

const HomePage = () => {
  const { data: courseInfo, loading, error } = useCourseInfo();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error && !courseInfo) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        background: 'var(--bg-page)'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h2 className="heading-2">Ошибка загрузки данных</h2>
          <p className="body-medium">Пожалуйста, перезагрузите страницу</p>
          <button 
            className="btn-primary" 
            onClick={() => window.location.reload()}
            style={{ marginTop: '1rem' }}
          >
            Перезагрузить
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-page)' }}>
      <Header />
      <Hero courseInfo={courseInfo} />
      <CourseOverview modules={courseInfo?.modules} />
      <Benefits benefits={courseInfo?.benefits} />
      <Instructor instructor={courseInfo?.instructor} />
      <Testimonials />
      <FAQ faqItems={courseInfo?.faq} />
      <Registration registrationBenefits={courseInfo?.registration_benefits} />
      <Footer />
    </div>
  );
};

export default HomePage;