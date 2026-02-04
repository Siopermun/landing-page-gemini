"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavLink {
  href: string;
  text: string;
}

interface NavbarProps {
  brandName: string;
  navLinks: NavLink[];
}

const Navbar: React.FC<NavbarProps> = ({ brandName, navLinks }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <Image src="/favicon.ico" alt="Siopermun Logo" width={50} height={50} className="rounded-circle me-2" />
          <span className="fw-bold fs-4 text-white">{brandName}</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" role="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav mx-auto">
            <span className="nav-item nav-link fs-5 text-white">{time}</span>
          </div>
          <ul className="navbar-nav ms-auto">
            {navLinks.map((link, index) => (
              <li key={index} className="nav-item">
                <Link href={link.href} className="nav-link">{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
