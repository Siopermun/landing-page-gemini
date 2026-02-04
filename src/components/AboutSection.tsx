"use client";
import React from 'react';
import Image from 'next/image';

interface AboutSectionProps {
  title: string;
  leadParagraph: string;
  mainParagraph: string;
  quote: string;
  quoteSource: string;
  imageUrl: string;
  imageAlt: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  leadParagraph,
  mainParagraph,
  quote,
  quoteSource,
  imageUrl,
  imageAlt,
}) => {
  return (
    <section id="about" className="py-5 about-section-background">
      <div className="container">
        <h2 className="text-center mb-5">{title}</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="lead">{leadParagraph}</p>
            <p>{mainParagraph}</p>
            <p className="text-muted fst-italic mt-4">
              &quot;{quote}&quot; <br /> <small>— {quoteSource}</small>
            </p>
          </div>
          <div className="col-md-6 text-center">
            <div className="about-image-container">
              <Image src={imageUrl} alt={imageAlt} className="img-fluid rounded-circle shadow-lg" width={250} height={250} />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .about-section-background {
          background-color: var(--light-background);
          background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 0h1v1H0zm1 1h1v1H1zm2 2h1v1H2zm3 3h1v1H5zM2 0h1v1H2zm3 1h1v1H5zM0 2h1v1H0zm1 3h1v1H1zm2 0h1v1H2zm3 2h1v1H5zM0 4h1v1H0zm-1 1h1v1H-1z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
        }
        .about-image-container {
            position: relative;
            display: inline-block;
            padding: 10px; /* Space for the border effect */
            background: linear-gradient(45deg, var(--primary-color), #0088cc); /* Gradient border effect */
            border-radius: 50%; /* Circular container */
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .about-image-container:hover {
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
        }
        .about-image-container img {
            border-radius: 50%; /* Keep image circular */
            border: 5px solid white; /* White border inside gradient */
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
