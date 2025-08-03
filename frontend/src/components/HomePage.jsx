import React, { useState } from 'react';
import { Star, Play, Users, Clock, Award, CheckCircle, MessageCircle, ArrowRight } from 'lucide-react';
import Header from './Header';
import Hero from './Hero';
import CourseOverview from './CourseOverview';
import Benefits from './Benefits';
import Instructor from './Instructor';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Registration from './Registration';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-page)' }}>
      <Header />
      <Hero />
      <CourseOverview />
      <Benefits />
      <Instructor />
      <Testimonials />
      <FAQ />
      <Registration />
      <Footer />
    </div>
  );
};

export default HomePage;