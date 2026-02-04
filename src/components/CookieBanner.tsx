"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(() => typeof window !== 'undefined' && !localStorage.getItem('cookie_consent'));

  const handleAccept = () => {
    // Store consent in localStorage
    localStorage.setItem('cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div 
      className="fixed-bottom p-3" 
      style={{ 
        backgroundColor: 'rgba(33, 37, 41, 0.95)', // var(--dark-background) with transparency
        color: 'var(--light-background)',
        zIndex: 1050 
      }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <p className="mb-0 me-3">
          Este sitio web utiliza cookies para mejorar la experiencia del usuario. Al continuar navegando, aceptas nuestro uso de cookies. Para más información, consulta nuestra{' '}
          <Link href="/politica-de-cookies" className="text-white text-decoration-underline">
            Política de Cookies
          </Link>.
        </p>
        <button className="btn btn-primary btn-sm" onClick={handleAccept}>
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
