"use client";
import React, { useEffect } from 'react';

interface ServiceCardProps {
  iconClass: string;
  title: string;
  description: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ iconClass, title, description, index }) => {
  return (
    <div className={`col-md-4 text-center mb-4 animated-card ${index % 2 === 0 ? 'slide-from-left' : 'slide-from-right'}`}>
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <i className={`${iconClass} service-icon`} style={{ fontSize: '3rem', color: 'var(--primary-color)' }} aria-hidden="true"></i>
          <h3 className="card-title mt-3">{title}</h3>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

interface ServicesSectionProps {
  title: string;
  leadText: string;
  services: {
    iconClass: string;
    title: string;
    description: string;
  }[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ title, leadText, services }) => {
  useEffect(() => {
    const animatedCards = document.querySelectorAll('.animated-card');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
    });

    animatedCards.forEach(card => {
      observer.observe(card);
    });

    return () => {
      animatedCards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="services" className="py-5">
      <div className="container">
        <h2 className="text-center mb-2">{title}</h2>
        <p className="lead text-center mb-5">{leadText}</p>
        <div className="row">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
