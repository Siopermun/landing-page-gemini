"use client";
import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
  end: number;
  label: string;
  duration: number; // in milliseconds
  suffix?: string;
}

const AnimatedCounter: React.FC<CounterProps> = ({ end, label, duration, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5, // Trigger when 50% of the component is visible
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCount(0); // Reset count when not visible
      return;
    }

    let startTimestamp: DOMHighResTimeStamp | null = null;
    const step = (timestamp: DOMHighResTimeStamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return (
    <div className="col-md-4 text-center py-4 counter-item" ref={ref}>
      <h3 className="display-4 fw-bold" style={{ color: 'var(--primary-color)' }}>
        {count}{suffix}
      </h3>
      <p className="lead text-muted">{label}</p>
    </div>
  );
};

const CounterSection: React.FC = () => {
  return (
    <section id="counters" className="py-5" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <h2 className="text-center mb-5">Nuestros Números Hablan</h2>
        <div className="row justify-content-center">
          <AnimatedCounter end={10} label="Años de Experiencia" duration={2000} suffix="+" />
          <AnimatedCounter end={300} label="Clientes Satisfechos" duration={2500} suffix="+" />
          <AnimatedCounter end={500} label="Proyectos Completados" duration={3000} suffix="+" />
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
