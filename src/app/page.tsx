"use client";

import React, { useState } from 'react';

const LandingPage = () => {
  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    setFeedbackMessage('');

    const form = event.currentTarget;
    const data = new FormData(form);
    const formEndpoint = form.action;

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        setFeedbackMessage('¡Gracias por tu mensaje! Te contactaremos pronto.');
        form.reset(); // Clear the form
      } else {
        const result = await response.json();
        // Fallback for Formspree errors with `text/html` response
        if (response.headers.get('content-type')?.includes('text/html')) {
          setStatus('error');
          setFeedbackMessage('Hubo un problema al enviar tu mensaje. Por favor, asegúrate de que todos los campos son correctos.');
        } else {
          setStatus('error');
          setFeedbackMessage(result.errors ? result.errors.map((error: any) => error.message).join(', ') : 'Hubo un problema al enviar tu mensaje.');
        }
      }
    } catch (error) {
      setStatus('error');
      setFeedbackMessage('No se pudo conectar con el servidor. Por favor, inténtalo de nuevo más tarde.');
    }
  };
  return (
    <div style={{ backgroundColor: '#f8f9fa' }}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <i className="bi bi-tools me-2" style={{ fontSize: '2rem', color: 'var(--primary-color)' }}></i>
            <span className="fw-bold fs-4 text-white">Siopermun</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" role="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#services">Servicios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">Sobre Nosotros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonials">Testimonios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-5" style={{ backgroundColor: 'var(--dark-background)', color: 'var(--light-background)' }}>
        <div className="container">
          <h1 className="display-4">¿Problemas con tu PC?</h1>
          <p className="lead">Soluciones de software y hardware a domicilio en Caracas.</p>
          <a href="#contact" className="btn mt-3" style={{ backgroundColor: '#FFD700', borderColor: '#FFD700', color: '#000', padding: '1rem 2.5rem', fontSize: '1.5rem' }}>Solicitar Presupuesto</a>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-5">
        <div className="container">
          <h2 className="text-center mb-2">Nuestros Servicios Profesionales</h2>
          <p className="lead text-center mb-5">Todos nuestros servicios son realizados directamente en tu domicilio en Caracas.</p>
          <div className="row">
            <div className="col-md-4 text-center mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <i className="bi bi-tools service-icon" style={{ fontSize: '3rem', color: 'var(--primary-color)' }} aria-hidden="true"></i>
                  <h3 className="card-title mt-3">Mantenimiento Integral</h3>
                  <p className="card-text">Realizamos mantenimiento correctivo y preventivo para asegurar el óptimo funcionamiento de tus computadoras y laptops.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <i className="bi bi-gear-fill service-icon" style={{ fontSize: '3rem', color: 'var(--primary-color)' }} aria-hidden="true"></i>
                  <h3 className="card-title mt-3">Instalación de Sistemas Operativos</h3>
                  <p className="card-text">Instalamos y configuramos el sistema operativo de tu preferencia, garantizando un inicio limpio y eficiente.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <i className="bi bi-motherboard service-icon" style={{ fontSize: '3rem', color: 'var(--primary-color)' }} aria-hidden="true"></i>
                  <h3 className="card-title mt-3">Instalación y Actualización de Drivers</h3>
                  <p className="card-text">Nos encargamos de instalar y actualizar todos los drivers necesarios para el correcto funcionamiento de tu hardware.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <i className="bi bi-shield-fill-check service-icon" style={{ fontSize: '3rem', color: 'var(--primary-color)' }} aria-hidden="true"></i>
                  <h3 className="card-title mt-3">Software Esencial</h3>
                  <p className="card-text">Instalamos antivirus, paquetes de oficina (Office) y otros programas fundamentales para tu productividad y seguridad.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <i className="bi bi-box-seam service-icon" style={{ fontSize: '3rem', color: 'var(--primary-color)' }} aria-hidden="true"></i>
                  <h3 className="card-title mt-3">Instalación de Programas Personalizados</h3>
                  <p className="card-text">Cualquier otro software que necesites, lo instalamos y configuramos para que esté listo para usar.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <i className="bi bi-robot service-icon" style={{ fontSize: '3rem', color: 'var(--primary-color)' }} aria-hidden="true"></i>
                  <h3 className="card-title mt-3">Automatización de Tareas</h3>
                  <p className="card-text">Desarrollo programas personalizados para automatizar tus tareas repetitivas, optimizando tu tiempo y recursos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-5" style={{ backgroundColor: 'var(--light-background)' }}>
        <div className="container">
          <h2 className="text-center mb-5">Conoce a Siopermun</h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="lead">
                Soy <strong>Renier Garcia</strong>, el profesional detrás de <strong>Siopermun</strong>. Con años de experiencia en el mantenimiento y reparación de equipos informáticos, me dedico a ofrecer soluciones técnicas de alta calidad en Caracas.
              </p>
              <p>
                Mi compromiso es brindarte un servicio personalizado y eficiente, directamente en tu domicilio. Entiendo la importancia de tus equipos, por eso me esfuerzo en diagnósticos precisos y reparaciones duraderas.
              </p>
              <p className="text-muted fst-italic mt-4">
                "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres;" <br /> <small>— Colosenses 3:23 (Reina Valera 1960)</small>
              </p>
            </div>
            <div className="col-md-6 text-center">
              <img src="/imagen/img_renier.jpg" alt="Renier Garcia - Fundador de Siopermun" className="img-fluid rounded-circle shadow-lg" style={{ maxWidth: '250px', height: 'auto' }} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section after About Us */}
      <section className="py-5 text-center" style={{ backgroundColor: 'var(--primary-color)', color: 'var(--light-background)' }}>
        <div className="container">
          <h2 className="mb-4">¿Listo para optimizar tus equipos?</h2>
          <p className="lead mb-4">Contáctanos hoy mismo para un servicio rápido y confiable.</p>
          <a href="https://wa.me/584129584815" target="_blank" rel="noopener noreferrer" className="btn btn-light btn-lg">
            <i className="bi bi-whatsapp me-2"></i> Chatear por WhatsApp
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="text-center mb-5">Lo que dicen nuestros clientes</h2>
          <div className="row justify-content-center">
            {/* Testimonial 1 */}
            <div className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <p className="fst-italic">"El servicio de Siopermun es excepcional. Mi laptop estaba muy lenta y ahora funciona como nueva. ¡Totalmente recomendado!"</p>
                  <footer className="blockquote-footer mt-3">
                    Juan Pérez
                  </footer>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <p className="fst-italic">"Necesitaba instalar un software específico y Renier lo hizo de forma rápida y eficiente. Gran profesionalismo."</p>
                  <footer className="blockquote-footer mt-3">
                    María García
                  </footer>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <p className="fst-italic">"El servicio fue excelente, mi PC ahora vuela."</p>
                  <footer className="blockquote-footer mt-3">
                    Ramon Peres
                  </footer>
                </div>
              </div>
            </div>
            {/* Testimonial 4 */}
            <div className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <p className="fst-italic">"Muy profesional y rápido, solucionó mi problema de software."</p>
                  <footer className="blockquote-footer mt-3">
                    Jose Brito
                  </footer>
                </div>
              </div>
            </div>
            {/* Testimonial 5 */}
            <div className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <p className="fst-italic">"Mi laptop estaba muy lenta y ahora funciona como nueva. ¡Totalmente recomendado!"</p>
                  <footer className="blockquote-footer mt-3">
                    Carla Rivas
                  </footer>
                </div>
              </div>
            </div>
            {/* Testimonial 6 */}
            <div className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <p className="fst-italic">"Necesitaba instalar un software específico y Renier lo hizo de forma rápida y eficiente. Gran profesionalismo."</p>
                  <footer className="blockquote-footer mt-3">
                    Maricarmen Martinez
                  </footer>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <h3 className="mb-3">¿Has tenido una buena experiencia con Siopermun?</h3>
            <a href="#contact" className="btn btn-primary btn-lg">
              <i className="bi bi-chat-left-text me-2"></i> ¡Comparte tu experiencia!
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5" style={{ backgroundColor: '#f0f2f5' }}>
        <div className="container">
          <h2 className="text-center mb-5">Contacta con Nosotros</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="card shadow-lg p-4 rounded-3">
                <div className="card-body">
                  <h3 className="card-title text-center mb-4">Envíanos tu Consulta</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Nombre Completo</label>
                      <input type="text" className="form-control form-control-lg" id="name" name="name" placeholder="Nombre Completo" aria-label="Nombre Completo" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Correo Electrónico</label>
                      <input type="email" className="form-control form-control-lg" id="email" name="email" placeholder="tu@email.com" aria-label="Correo Electrónico" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Describe tu problema o consulta</label>
                      <textarea className="form-control form-control-lg" id="message" name="message" rows={5} placeholder="Ej: Mi PC está muy lenta desde la última actualización..." aria-label="Descripción del problema o consulta" required></textarea>
                    </div>
                    <div className="d-grid gap-2">
                      <button type="submit" className="btn btn-primary btn-lg mt-3" disabled={status === 'submitting'}>
                        {status === 'submitting' ? 'Enviando...' : <><i className="bi bi-send-fill me-2"></i> Enviar Solicitud</>}
                      </button>
                      <a href="https://wa.me/584129584815" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg mt-3">
                        <i className="bi bi-whatsapp me-2"></i> Contactar por WhatsApp
                      </a>
                    </div>

                    {/* Feedback Message */}
                    {feedbackMessage && (
                      <div className={`alert mt-3 ${status === 'success' ? 'alert-success' : 'alert-danger'}`} role="alert">
                        {feedbackMessage}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 text-white text-center" style={{ backgroundColor: 'var(--dark-background)' }}>
        <div className="container">
          <p className="mb-0">"Confía en el Señor de todo corazón, y no en tu propia inteligencia. Reconócelo en todos tus caminos, y él allanará tus sendas." <br /> <small>— Proverbios 3:5-6 (Reina Valera 1960)</small></p>
          <p className="mb-0 mt-2">
            Copyright &copy; Siopermun 2025 | 
            <a href="/politica-de-privacidad" className="text-white text-decoration-none">Política de Privacidad</a> | 
            <a href="/terminos-de-servicio" className="text-white text-decoration-none">Términos de Servicio</a> | 
            <a href="https://wa.me/584129584815" target="_blank" rel="noopener noreferrer" className="text-white"><i className="bi bi-whatsapp" aria-hidden="true"></i></a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;