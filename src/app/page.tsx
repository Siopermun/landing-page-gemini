"use client";

import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import Navbar from '../components/Navbar';
import CtaSection from '../components/CtaSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ProcessSection from '../components/ProcessSection';
import FAQSection from '../components/FAQSection';
import TechnologiesSection from '../components/TechnologiesSection';
import CounterSection from '../components/CounterSection';
import TestimonialSubmissionForm from '../components/TestimonialSubmissionForm';
import NewsletterSignup from '../components/NewsletterSignup';

const LandingPage = () => {
  return (
    <div style={{ backgroundColor: '#f8f9fa' }}>
      {/* Navbar */}
      <Navbar
        brandName="Siopermun"
        navLinks={[
          { href: "#services", text: "Servicios" },
          { href: "#about", text: "Sobre Nosotros" },
          { href: "#testimonials", text: "Testimonios" },
          { href: "/blog", text: "Blog" },
          { href: "#contact", text: "Contacto" },
        ]}
      />

      {/* Hero Section */}
      <HeroSection 
        title="Tu Experto Tecnológico a Domicilio"
        subtitle="Reparación y Mantenimiento Expertos: La Tecnología va a tu Casa en Caracas."
        ctaText="Solicitar Presupuesto"
        ctaLink="#contact"
      />

      {/* Services Section */}
      <ServicesSection
        title="Nuestros Servicios Profesionales"
        leadText="Todos nuestros servicios son realizados directamente en tu domicilio en Caracas."
        services={[
          {
            iconClass: "bi bi-tools",
            title: "Mantenimiento Integral de Equipos",
            description: "Realizamos mantenimiento correctivo y preventivo para asegurar la optimización, el rendimiento y el óptimo funcionamiento de tus computadoras y laptops.",
          },
          {
            iconClass: "bi bi-gear-fill",
            title: "Instalación de Sistemas Operativos",
            description: "Instalamos y configuramos sistemas operativos como Windows, macOS y Linux, garantizando un inicio limpio y eficiente de tu equipo.",
          },
          {
            iconClass: "bi bi-motherboard",
            title: "Instalación y Actualización de Drivers",
            description: "Nos encargamos de instalar y actualizar todos los drivers necesarios para el correcto funcionamiento de tu hardware, solucionando problemas de compatibilidad.",
          },
          {
            iconClass: "bi bi-shield-fill-check",
            title: "Software Esencial y Seguridad",
            description: "Instalamos antivirus, suites de oficina como Microsoft Office, y otros programas fundamentales para tu productividad y seguridad digital.",
          },
          {
            iconClass: "bi bi-box-seam",
            title: "Instalación de Programas Personalizados",
            description: "Instalamos y configuramos cualquier software específico o especializado que necesites, dejándolo listo para usar en tu computadora.",
          },
          {
            iconClass: "bi bi-robot",
            title: "Automatización de Tareas y Procesos",
            description: "Desarrollo de scripts y programas a medida para automatizar tus tareas repetitivas, optimizando tu tiempo y recursos en el día a día.",
          },
          {
            iconClass: "bi bi-unlock-fill",
            title: "Desbloqueo de Computadoras y Recuperación de Acceso",
            description: "Si olvidaste la contraseña de tu computadora, te ayudo a recuperar el acceso sin perder tus archivos ni el sistema operativo.",
          },
          {
            iconClass: "bi bi-android2",
            title: "Software y Desbloqueo de Android",
            description: "Realizo instalación de software, flasheo de ROMs, hard reset y eliminación de cuentas Google (FRP) en teléfonos Android.",
          },
          {
            iconClass: "bi bi-globe",
            title: "Diseño y Desarrollo Web Profesional",
            description: "Creación de landing pages de alta conversión y sitios web empresariales atractivos y funcionales con diseño responsivo para tu negocio.",
          },
        ]}
      />

      {/* About Us Section */}
      <AboutSection
        title="Conoce a Siopermun"
        leadParagraph="Soy Renier Garcia, el profesional detrás de Siopermun. Con años de experiencia en el mantenimiento y reparación de equipos informáticos, me dedico a ofrecer soluciones técnicas de alta calidad en Caracas."
        mainParagraph="Mi compromiso es brindarte un servicio personalizado y eficiente, directamente en tu domicilio. Entiendo la importancia de tus equipos, por eso me esfuerzo en diagnósticos precisos y reparaciones duraderas."
        quote="Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres;"
        quoteSource="Colosenses 3:23 (Reina Valera 1960)"
        imageUrl="/imagen/img_renier.jpg"
        imageAlt="Renier Garcia - Fundador de Siopermun"
      />

      {/* Technologies Section */}
      <TechnologiesSection />

      {/* Counter Section */}
      <CounterSection />

      {/* CTA Section after About Us */}
      <CtaSection
        title="¿Listo para optimizar tus equipos?"
        leadText="Contáctanos hoy mismo para un servicio rápido y confiable."
        buttonText="Chatear por WhatsApp"
        buttonLink="https://wa.me/584129584815"
        buttonIconClass="bi bi-whatsapp"
      />

      {/* Testimonials Section */}
      <TestimonialsSection
        title="Lo que dicen nuestros clientes"
        testimonials={[
          { text: "El servicio de Siopermun es excepcional. Mi laptop estaba muy lenta y ahora funciona como nueva. ¡Totalmente recomendado!", author: "Juan Pérez" },
          { text: "Necesitaba instalar un software específico y Renier lo hizo de forma rápida y eficiente. Gran profesionalismo.", author: "María García" },
          { text: "El servicio fue excelente, mi PC ahora vuela.", author: "Ramon Peres" },
          { text: "Muy profesional y rápido, solucionó mi problema de software.", author: "Jose Brito" },
          { text: "Mi laptop estaba muy lenta y ahora funciona como nueva. ¡Totalmente recomendado!", author: "Carla Rivas" },
          { text: "Necesitaba instalar un software específico y Renier lo hizo de forma rápida y eficiente. Gran profesionalismo.", author: "Maricarmen Martinez" },
        ]}
        ctaTitle="¿Has tenido una buena experiencia con Siopermun?"
        ctaButtonText="¡Comparte tu experiencia!"
        ctaButtonLink="#contact"
        ctaButtonIconClass="bi bi-chat-left-text"
      />

      {/* Testimonial Submission Form */}
      <TestimonialSubmissionForm />

      {/* Process Section */}
      <ProcessSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* Footer */}
      <Footer
        quote="Confía en el Señor de todo corazón, y no en tu propia inteligencia. Reconócelo en todos tus caminos, y él allanará tus sendas."
        quoteSource="Proverbios 3:5-6 (Reina Valera 1960)"
        copyrightText="Copyright &copy; Siopermun 2025"
        links={[
          { href: "/politica-de-privacidad", text: "Política de Privacidad" },
          { href: "/terminos-de-servicio", text: "Términos de Servicio" },
          { href: "/politica-de-cookies", text: "Política de Cookies" },
          { href: "https://wa.me/584129584815", isExternal: true, iconClass: "bi bi-whatsapp", text: "" },
          { href: "https://facebook.com/siopermun", isExternal: true, iconClass: "bi bi-facebook", text: "" },
          { href: "https://instagram.com/siopermun", isExternal: true, iconClass: "bi bi-instagram", text: "" },
          { href: "https://linkedin.com/in/reniergarcia", isExternal: true, iconClass: "bi bi-linkedin", text: "" },
        ]}
      />
      <a href="https://wa.me/584129584815" target="_blank" rel="noopener noreferrer" className="floating-whatsapp-button" aria-label="Contactar por WhatsApp">
        <i className="bi bi-whatsapp"></i>
      </a>
    </div>
  );
};

export default LandingPage;