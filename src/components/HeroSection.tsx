import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, ctaText, ctaLink }) => {
  return (
    <section className="animated-hero-background text-center py-5">
      <div className="container">
        <h1 className="display-4">{title}</h1>
        <p className="lead">{subtitle}</p>
        <a href={ctaLink} className="btn mt-3" style={{ backgroundColor: '#FFD700', borderColor: '#FFD700', color: '#000', padding: '1rem 2.5rem', fontSize: '1.5rem' }}>{ctaText}</a>
      </div>
    </section>
  );
};

export default HeroSection;
