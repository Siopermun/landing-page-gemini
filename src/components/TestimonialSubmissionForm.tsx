"use client";

import React, { useState } from 'react';

const TestimonialSubmissionForm: React.FC = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0); // 0-5 stars
  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    setFeedbackMessage('');

    const newTestimonial = {
      name,
      comment,
      rating,
      timestamp: new Date().toISOString(), // Add a timestamp
    };

    // Save to Local Storage
    try {
      const existingTestimonials = JSON.parse(localStorage.getItem('userTestimonials') || '[]');
      existingTestimonials.push(newTestimonial);
      localStorage.setItem('userTestimonials', JSON.stringify(existingTestimonials));

      setStatus('success');
      setFeedbackMessage('¡Gracias por tu testimonio! Se ha añadido a la lista.');
      setName('');
      setComment('');
      setRating(0);

      // Dispatch a custom event to notify other components (e.g., TestimonialsSection)
      window.dispatchEvent(new CustomEvent('newTestimonialSubmitted'));

    } catch (error) {
      console.error("Error saving testimonial to Local Storage:", error);
      setStatus('error');
      setFeedbackMessage('Hubo un problema al guardar tu testimonio localmente.');
    } finally {
      // Re-enable button after a short delay for UX
      setTimeout(() => setStatus('idle'), 1500); 
    }
  };

  return (
    <section id="submit-testimonial" className="py-5" style={{ backgroundColor: '#f0f2f5' }}>
      <div className="container">
        <h2 className="text-center mb-5">Deja tu Opinión y Califica nuestro Servicio</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="card shadow-lg p-4 rounded-3">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Tu Nombre</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="name"
                      name="name"
                      placeholder="Ej: Juan Pérez"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="comment" className="form-label">Tu Comentario</label>
                    <textarea
                      className="form-control form-control-lg"
                      id="comment"
                      name="comment"
                      rows={4}
                      placeholder="¿Qué te pareció nuestro servicio?"
                      required
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Tu Calificación</label>
                    <div>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <i
                          key={star}
                          className={`bi ${star <= rating ? 'bi-star-fill' : 'bi-star'}`}
                          style={{ color: '#ffc107', cursor: 'pointer', fontSize: '1.5rem', marginRight: '5px' }}
                          onClick={() => handleRatingChange(star)}
                        ></i>
                      ))}
                    </div>
                    {rating === 0 && <small className="text-danger">Por favor, selecciona una calificación.</small>}
                  </div>
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary btn-lg mt-3" disabled={status === 'submitting' || rating === 0}>
                      {status === 'submitting' ? 'Enviando...' : 'Enviar Testimonio'}
                    </button>
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

export default TestimonialSubmissionForm;
