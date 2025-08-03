import { useState, useEffect } from 'react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Custom hook для загрузки информации о курсе
export const useCourseInfo = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourseInfo = async () => {
      try {
        const response = await axios.get(`${API}/course-info`);
        setData(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching course info:', err);
        setError(err.message);
        // Fallback to mock data if API fails
        const mockData = await import('../data/mock');
        setData({
          modules: mockData.courseModules,
          benefits: mockData.benefits,
          instructor: mockData.instructor,
          faq: mockData.faqItems,
          registration_benefits: mockData.registrationBenefits,
          stats: {
            total_students: 2500,
            rating: 4.9,
            completion_rate: 98
          }
        });
      } finally {
        setLoading(false);
      }
    };

    fetchCourseInfo();
  }, []);

  return { data, loading, error };
};

// Custom hook для загрузки отзывов
export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(`${API}/testimonials`);
        setTestimonials(response.data.testimonials);
        setError(null);
      } catch (err) {
        console.error('Error fetching testimonials:', err);
        setError(err.message);
        // Fallback to mock data
        const mockData = await import('../data/mock');
        setTestimonials(mockData.testimonials);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return { testimonials, loading, error };
};

// API функция для регистрации студента
export const registerStudent = async (formData) => {
  try {
    const response = await axios.post(`${API}/student-registration`, formData);
    return { success: true, data: response.data };
  } catch (error) {
    if (error.response?.status === 409) {
      // Дубликат email
      return { 
        success: false, 
        error: 'Этот email уже зарегистрирован' 
      };
    } else if (error.response?.status === 400) {
      // Валидационные ошибки
      return { 
        success: false, 
        error: 'Пожалуйста, проверьте введенные данные' 
      };
    } else {
      // Другие ошибки
      return { 
        success: false, 
        error: 'Произошла ошибка. Попробуйте позже.' 
      };
    }
  }
};