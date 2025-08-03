import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqItems } from '../data/mock';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="pad-2xl" style={{ background: 'var(--bg-page)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="heading-1">Часто задаваемые вопросы</h2>
          <p className="body-large" style={{ marginTop: '1rem' }}>
            Остались вопросы? У нас есть ответы. Здесь собраны самые популярные вопросы о нашем курсе WordPress.
          </p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqItems.map((item) => (
            <div key={item.id} style={{
              background: 'var(--bg-card)',
              borderRadius: '1rem',
              marginBottom: '1rem',
              overflow: 'hidden',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)'
            }}>
              <button
                onClick={() => toggleItem(item.id)}
                style={{
                  width: '100%',
                  padding: '1.5rem',
                  background: 'transparent',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                <span className="heading-3">
                  {item.question}
                </span>
                {openItems[item.id] ? (
                  <ChevronUp size={20} style={{ color: 'var(--text-secondary)', flexShrink: 0, marginLeft: '1rem' }} />
                ) : (
                  <ChevronDown size={20} style={{ color: 'var(--text-secondary)', flexShrink: 0, marginLeft: '1rem' }} />
                )}
              </button>

              {openItems[item.id] && (
                <div style={{
                  padding: '0 1.5rem 1.5rem',
                  borderTop: '1px solid var(--border-light)'
                }}>
                  <p className="body-medium" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p className="body-medium" style={{ marginBottom: '1rem' }}>
            Остались вопросы?
          </p>
          <button 
            className="btn-secondary"
            onClick={() => alert('Форма обратной связи откроется здесь - это демонстрационная реализация')}
          >
            Связаться с нами
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;