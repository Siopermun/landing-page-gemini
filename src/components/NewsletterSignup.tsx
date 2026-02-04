"use client";

import React, { useState } from 'react';

// Define a type for the Formspree error object for better type safety
interface FormspreeError {
  message: string;
}

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    setFeedbackMessage('');

    const formEndpoint = "https://formspree.io/f/mpwvawea"; // Reusing the same Formspree endpoint for simplicity

    const data = new FormData();
    data.append('email', email);
    data.append('_subject', 'Nueva Suscripción a Newsletter'); // Custom subject
    data.append('Formulario', 'Newsletter'); // Identify form source

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
        setFeedbackMessage('¡Gracias por suscribirte! Te mantendremos informado.');
        setEmail('');
      } else {
        const result = await response.json();
        if (response.headers.get('content-type')?.includes('text/html')) {
          setStatus('error');
          setFeedbackMessage('Hubo un problema con tu suscripción. Por favor, asegúrate de que tu email es correcto.');
        } else {
          setStatus('error');
          setFeedbackMessage(result.errors ? result.errors.map((error: FormspreeError) => error.message).join(', ') : 'Hubo un problema con tu suscripción.');
        }
      }
    } catch {
      setStatus('error');
      setFeedbackMessage('No se pudo conectar con el servidor. Por favor, inténtalo de nuevo más tarde.');
    } finally {
      setTimeout(() => setStatus('idle'), 3000); // Re-enable button after a short delay for UX
    }
  };

  return (
    <section id="newsletter-signup" className="py-5" style={{ backgroundColor: '#f0f2f5' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="mb-3">Mantente Informado</h2>
            <p className="lead text-muted mb-4">
              Suscríbete a nuestro boletín para recibir consejos de tecnología, ofertas exclusivas y novedades.
            </p>
            <form onSubmit={handleSubmit} className="d-flex flex-column flex-sm-row justify-content-center align-items-center">
              <input
                type="email"
                className="form-control form-control-lg mb-3 mb-sm-0 me-sm-2 newsletter-input"
                id="newsletterEmail"
                name="email"
                placeholder="Tu correo electrónico"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="btn btn-primary btn-lg newsletter-button"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Suscribiendo...' : 'Suscribirme'}
              </button>
            </form>

            {/* Feedback Message */}
            {feedbackMessage && (
              <div className={`alert mt-3 ${status === 'success' ? 'alert-success' : 'alert-danger'} newsletter-feedback`} role="alert">
                {feedbackMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
