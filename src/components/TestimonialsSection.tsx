"use client";
import React, { useState, useEffect, useCallback } from 'react';

interface TestimonialProps {
  text: string;
  author: string;
  rating?: number; // Add rating to testimonial props
}

// Function to get stars for rating
const getStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <i
        key={i}
        className={`bi ${i <= rating ? 'bi-star-fill' : 'bi-star'}`}
        style={{ color: '#ffc107', fontSize: '1rem', marginRight: '2px' }}
      ></i>
    );
  }
  return stars;
};

const TestimonialCard: React.FC<TestimonialProps> = ({ text, author, rating }) => {
  return (
    <div className="col-md-6 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body text-center">
          <p className="fst-italic">&quot;{text}&quot;</p>
          {rating && <div className="mb-2">{getStars(rating)}</div>}
          <footer className="blockquote-footer mt-3">
            <i className="bi bi-person-circle me-2" style={{ fontSize: '1.2rem' }}></i>
            {author}
          </footer>
        </div>
      </div>
    </div>
  );
};

interface TestimonialsSectionProps {
  title: string;
  testimonials: TestimonialProps[]; // Initial hardcoded testimonials
  ctaTitle: string;
  ctaButtonText: string;
  ctaButtonLink: string;
  ctaButtonIconClass: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ title, testimonials: initialTestimonials, ctaTitle, ctaButtonText, ctaButtonLink, ctaButtonIconClass }) => {
  const [displayedTestimonials, setDisplayedTestimonials] = useState<TestimonialProps[]>([]);

  // Function to load testimonials from Local Storage
  const loadDynamicTestimonials = useCallback(() => {
    try {
      const userTestimonials = JSON.parse(localStorage.getItem('userTestimonials') || '[]') as TestimonialProps[];
      // Combine hardcoded and user-submitted testimonials
      setDisplayedTestimonials([...initialTestimonials, ...userTestimonials]);
    } catch (error) {
      console.error("Error loading testimonials from Local Storage:", error);
      setDisplayedTestimonials(initialTestimonials); // Fallback to hardcoded
    }
  }, [initialTestimonials]);

  // Load testimonials on mount
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadDynamicTestimonials();

    // Listen for custom event when a new testimonial is submitted
    window.addEventListener('newTestimonialSubmitted', loadDynamicTestimonials);

    return () => {
      window.removeEventListener('newTestimonialSubmitted', loadDynamicTestimonials);
    };
  }, [loadDynamicTestimonials]); // Re-run if the function changes

  return (
    <section id="testimonials" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <h2 className="text-center mb-5">{title}</h2>
        <div className="row justify-content-center">
          {displayedTestimonials.length > 0 ? (
            displayedTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))
          ) : (
            <p className="text-center text-muted">Aún no hay testimonios para mostrar.</p>
          )}
        </div>
        <div className="text-center mt-5">
          <h3 className="mb-3">{ctaTitle}</h3>
          <a href={ctaButtonLink} className="btn btn-primary btn-lg">
            <i className={`${ctaButtonIconClass} me-2`}></i> {ctaButtonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;