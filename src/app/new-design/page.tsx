"use client";

import React, { useEffect } from 'react';

const NewLandingPage = () => {
  useEffect(() => {
    // Clock
    function updateClock() {
        const clockElement = document.getElementById('clock');
        if (clockElement) {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            clockElement.textContent = `${hours}:${minutes}:${seconds}`;
        }
    }
    const clockInterval = setInterval(updateClock, 1000);
    updateClock();

    // Scroll Animations
    const animatedElements = document.querySelectorAll('.service-card');

    const appearOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    animatedElements.forEach(element => {
        appearOnScroll.observe(element);
    });

    // Typing animation
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const texts = ["Soluciones de Software", "Desarrollo Web Profesional", "Soporte Técnico a Domicilio"];
        let textIndex = 0;
        let charIndex = 0;

        function type() {
            if (charIndex < texts[textIndex].length) {
                if(typingText) typingText.textContent += texts[textIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, 100);
            } else {
                setTimeout(erase, 2000);
            }
        }

        function erase() {
            if (charIndex > 0) {
                if(typingText) typingText.textContent = texts[textIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, 50);
            } else {
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, 500);
            }
        }
        
        setTimeout(() => {
            if(typingText) typingText.textContent = '';
            type();
        }, 1000);
    }
    
    return () => {
        clearInterval(clockInterval);
    }

  }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Roboto:wght@300;400;700&display=swap');

        :root {
            --primary-color: #00aaff;
            --secondary-color: #0a192f;
            --text-color: #ccd6f6;
            --card-bg: #112240;
            --border-color: #233554;
            --glow-color: rgba(0, 170, 255, 0.7);
        }

        body {
            font-family: 'Roboto', sans-serif;
            background-color: var(--secondary-color);
            color: var(--text-color);
            line-height: 1.6;
            overflow-x: hidden;
        }

        .container {
            width: 90%;
            max-width: 1100px;
            margin: auto;
            padding: 2rem 0;
        }

        header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 1rem 5%;
            background: rgba(10, 25, 47, 0.85);
            backdrop-filter: blur(10px);
            z-index: 1000;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid var(--border-color);
        }

        .logo {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary-color);
            text-decoration: none;
        }
        
        #clock {
            font-family: 'Orbitron', sans-serif;
            font-size: 1.2rem;
            color: var(--primary-color);
            text-shadow: 0 0 5px var(--glow-color);
        }

        nav a {
            color: var(--text-color);
            text-decoration: none;
            margin-left: 1.5rem;
            font-weight: 400;
            transition: color 0.3s ease;
        }

        nav a:hover {
            color: var(--primary-color);
        }

        #hero {
            height: 100vh;
            display: flex;
            align-items: center;
            text-align: left;
        }

        .hero-content {
            max-width: 700px;
        }

        .hero-content h1 {
            font-size: 3.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
        }

        .hero-content .typing-text {
            color: var(--primary-color);
            border-right: .15em solid var(--primary-color);
            white-space: nowrap;
            overflow: hidden;
            animation: typing 3.5s steps(30, end), blink-caret .75s step-end infinite;
        }

        @keyframes typing {
            from { width: 0 }
            to { width: 100% }
        }

        @keyframes blink-caret {
            from, to { border-color: transparent }
            50% { border-color: var(--primary-color); }
        }

        .hero-content p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
        }

        .cta-button {
            display: inline-block;
            background: transparent;
            color: var(--primary-color);
            border: 2px solid var(--primary-color);
            padding: 0.8rem 1.8rem;
            border-radius: 5px;
            text-decoration: none;
            font-weight: 700;
            transition: all 0.3s ease;
        }

        .cta-button:hover {
            background: var(--primary-color);
            color: var(--secondary-color);
        }

        section {
            padding: 6rem 0;
            border-bottom: 1px solid var(--border-color);
        }
        
        section:last-of-type {
            border-bottom: none;
        }

        h2.section-title {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            position: relative;
        }

        h2.section-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: var(--primary-color);
            border-radius: 2px;
        }

        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .service-card {
            background: var(--card-bg);
            padding: 2rem;
            border-radius: 10px;
            border: 1px solid var(--border-color);
            transition: all 0.5s ease-out;
            opacity: 0;
        }
        
        .service-card.slide-from-left {
            transform: translateX(-100px);
        }
        
        .service-card.slide-from-right {
            transform: translateX(100px);
        }

        .service-card.visible {
            opacity: 1;
            transform: translateX(0);
        }

        .service-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 0 20px var(--glow-color);
            border-color: var(--primary-color);
        }

        .service-card h3 {
            color: var(--primary-color);
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }

        footer {
            text-align: center;
            padding: 2rem 0;
            background: var(--card-bg);
        }
      `}</style>
      <header>
          <a href="#" className="logo">Siopermun</a>
          <div id="clock"></div>
          <nav>
              <a href="#services">Servicios</a>
              <a href="#about">Sobre Mí</a>
              <a href="#contact">Contacto</a>
          </nav>
      </header>

      <main>
          <section id="hero">
              <div className="container">
                  <div className="hero-content">
                      <h1>Hola, soy Renier Garcia</h1>
                      <p className="subtitle">
                          <span className="typing-text"></span>
                      </p>
                      <p>Transformo tus problemas tecnológicos en soluciones eficientes. Experto en mantenimiento, desarrollo web y seguridad informática, ofrezco un servicio profesional a tu medida.</p>
                      <a href="#contact" className="cta-button">Contáctame</a>
                  </div>
              </div>
          </section>

          <section id="services" className="container">
              <h2 className="section-title">Mis Servicios</h2>
              <div className="services-grid">
                  <div className="service-card slide-from-left">
                      <h3>Mantenimiento de PC y Laptops</h3>
                      <p>Optimización, limpieza de hardware y software, y resolución de problemas para que tus equipos funcionen como el primer día.</p>
                  </div>
                  <div className="service-card slide-from-right">
                      <h3>Desbloqueo de Dispositivos</h3>
                      <p>Acceso a computadoras con contraseñas olvidadas y eliminación de cuentas Google (FRP) en dispositivos Android.</p>
                  </div>
                  <div className="service-card slide-from-left">
                      <h3>Desarrollo Web</h3>
                      <p>Diseño y creación de landing pages y sitios web modernos y funcionales que impulsan tu negocio o marca personal.</p>
                  </div>
                  <div className="service-card slide-from-right">
                      <h3>Instalación y Configuración</h3>
                      <p>Instalación de sistemas operativos, drivers, software esencial y programas a medida para tu productividad.</p>
                  </div>
              </div>
          </section>
          
          <section id="about" className="container">
               <h2 className="section-title">Sobre Mí</h2>
               <p style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem auto'}}>Soy un apasionado por la tecnología con años de experiencia en el mundo del software y hardware. Mi misión es ofrecerte un servicio honesto, transparente y de la más alta calidad, directamente en la comodidad de tu hogar en Caracas.</p>
          </section>
          
          <section id="contact" className="container">
              <h2 className="section-title">Hablemos</h2>
              <p style={{textAlign: 'center', marginBottom: '2rem'}}>¿Tienes un proyecto en mente o necesitas ayuda con tus equipos? Envíame un mensaje.</p>
              <div style={{textAlign: 'center'}}>
                   <a href="https://wa.me/584129584815" className="cta-button">Chatear por WhatsApp</a>
              </div>
          </section>

      </main>

      <footer>
          <div className="container">
              <p>&copy; 2025 Siopermun - Renier Garcia. Todos los derechos reservados.</p>
          </div>
      </footer>
    </>
  );
};

export default NewLandingPage;
