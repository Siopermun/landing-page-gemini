"use client";
import React from 'react';
import Image from 'next/image';

interface TechnologyProps {
  name: string;
  logoSrc: string; // Path to the logo image
}

const TechnologyCard: React.FC<TechnologyProps> = ({ name, logoSrc }) => {
  return (
    <div className="col-4 col-md-2 mb-4 text-center">
      <div className="tech-logo-container p-3 rounded shadow-sm d-flex align-items-center justify-content-center">
        <Image src={logoSrc} alt={`${name} Logo`} width={90} height={90} objectFit="contain" />
      </div>
      <p className="mt-2 text-muted" style={{ fontSize: '0.9rem' }}>{name}</p>
    </div>
  );
};

const TechnologiesSection: React.FC = () => {
  const technologies: TechnologyProps[] = [
    { name: "Windows", logoSrc: "/img/tech/windows.png" }, // Placeholder path
    { name: "Android", logoSrc: "/img/tech/android.png" }, // Placeholder path
    { name: "Ubuntu", logoSrc: "/img/tech/ubuntu.png" },   // Placeholder path
    { name: "Microsoft Office", logoSrc: "/img/tech/office.png" }, // Placeholder path
    { name: "Antivirus", logoSrc: "/img/tech/antivirus.png" }, // Placeholder path
    { name: "React", logoSrc: "/img/tech/react.svg" }, // Placeholder path
    { name: "Next.js", logoSrc: "/img/tech/nextjs.png" }, // Placeholder path
  ];

  return (
    <section id="technologies" className="py-5" style={{ backgroundColor: '#f0f2f5' }}>
      <div className="container">
        <h2 className="text-center mb-5">Tecnologías y Herramientas con las que Trabajo</h2>
        <div className="row justify-content-center">
          {technologies.map((tech, index) => (
            <TechnologyCard key={index} {...tech} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .tech-logo-container {
          height: 120px; /* Increased height */
          background-color: white;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid #e9ecef;
        }
        .tech-logo-container:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 8px 20px rgba(0, 170, 255, 0.3);
          border-color: var(--primary-color);
        }
        .tech-logo-container img {
            filter: grayscale(100%); /* Start grayscale */
            opacity: 0.7;
            transition: filter 0.3s ease, opacity 0.3s ease;
        }
        .tech-logo-container:hover img {
            filter: grayscale(0%); /* Full color on hover */
            opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default TechnologiesSection;
