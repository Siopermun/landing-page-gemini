import React from 'react';

interface CtaSectionProps {
  title: string;
  leadText: string;
  buttonText: string;
  buttonLink: string;
  buttonIconClass?: string;
}

const CtaSection: React.FC<CtaSectionProps> = ({ title, leadText, buttonText, buttonLink, buttonIconClass }) => {
  return (
    <section className="py-5 text-center" style={{ backgroundColor: 'var(--primary-color)', color: 'var(--light-background)' }}>
      <div className="container">
        <h2 className="mb-4">{title}</h2>
        <p className="lead mb-4">{leadText}</p>
        <a href={buttonLink} target="_blank" rel="noopener noreferrer" className="btn btn-light btn-lg">
          {buttonIconClass && <i className={`${buttonIconClass} me-2`}></i>}
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
