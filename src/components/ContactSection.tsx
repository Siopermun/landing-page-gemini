"use client";

import React, { useState } from 'react';

interface FormError {
  message: string;
}

const ContactSection: React.FC = () => {
  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    setFeedbackMessage('');

    const form = event.currentTarget;
    const formEndpoint = form.action;

    const data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('message', message);
    data.append('Siopermun', ''); // Add the honeypot field

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
        setName('');
        setEmail('');
        setMessage('');
      } else {
        const result = await response.json();
        // Fallback for Formspree errors with `text/html` response
        if (response.headers.get('content-type')?.includes('text/html')) {
          setStatus('error');
          setFeedbackMessage('Hubo un problema al enviar tu mensaje. Por favor, asegúrate de que todos los campos son correctos.');
        } else {
          setStatus('error');
          setFeedbackMessage(result.errors ? result.errors.map((error: FormError) => error.message).join(', ') : 'Hubo un problema al enviar tu mensaje.');
        }
      }
    } catch {
      setStatus('error');
      setFeedbackMessage('No se pudo conectar con el servidor. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  return (
    <section id="contact" className="py-5" style={{ backgroundColor: '#f0f2f5' }}>
      <div className="container">
        <h2 className="text-center mb-5">Contacta con Nosotros</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="card shadow-lg p-4 rounded-3">
              <div className="card-body">
                <h3 className="card-title text-center mb-4">Envíanos tu Consulta</h3>
                <form action="https://formspree.io/f/mpwvawea" method="POST" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre Completo</label>
                    <input type="text" className="form-control form-control-lg" id="name" name="name" placeholder="Nombre" aria-label="Nombre Completo" required value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                    <input type="email" className="form-control form-control-lg" id="email" name="email" placeholder="Ingrese su Correo." aria-label="Correo Electrónico" required value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Describe tu problema o consulta</label>
                    <textarea className="form-control form-control-lg" id="message" name="message" rows={5} placeholder="Ej: Mi PC está muy lenta desde la última actualización..." aria-label="Descripción del problema o consulta" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                  </div>
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary btn-lg mt-3" disabled={status === 'submitting'}>
                      {status === 'submitting' ? 'Enviando...' : <><i className="bi bi-send-fill me-2"></i> Enviar Solicitud</>}
                    </button>
                    <a href="https://wa.me/584129584815" target="_blank" rel="noopener noreferrer" className="btn btn-outline-success btn-lg mt-3">
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
  );
};

export default ContactSection;
