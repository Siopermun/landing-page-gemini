import React from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  id: string;
  parentId: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, id, parentId }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading${id}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${id}`}
          aria-expanded="false"
          aria-controls={`collapse${id}`}
        >
          {question}
        </button>
      </h2>
      <div
        id={`collapse${id}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading${id}`}
        data-bs-parent={`#${parentId}`}
      >
        <div className="accordion-body">
          {answer}
        </div>
      </div>
    </div>
  );
};

interface FAQSectionProps {
  title?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({ title = "Preguntas Frecuentes" }) => {
  const faqData = [
    {
      question: "¿Cuáles son las formas de pago aceptadas?",
      answer: "Aceptamos transferencias bancarias, pago móvil y efectivo. También podemos coordinar pagos en divisas.",
    },
    {
      question: "¿Ofrecen garantía por sus servicios?",
      answer: "Sí, todos nuestros servicios tienen garantía. La duración específica dependerá del tipo de servicio realizado.",
    },
    {
      question: "¿Se puede realizar el servicio fuera de Caracas?",
      answer: "Actualmente, nuestros servicios a domicilio están enfocados en Caracas. Para otras localidades, por favor contáctanos para evaluar la posibilidad.",
    },
    {
        question: "¿Cómo puedo solicitar un presupuesto?",
        answer: "Puedes solicitar un presupuesto a través de nuestro formulario de contacto o directamente por WhatsApp, describiendo tu problema o necesidad.",
    },
    {
        question: "¿Qué tipo de equipos reparan?",
        answer: "Trabajamos con una amplia variedad de equipos, incluyendo computadoras de escritorio, laptops, netbooks, y dispositivos móviles Android.",
    }
  ];

  const accordionId = "faqAccordion";

  return (
    <section id="faq" className="py-5" style={{ backgroundColor: '#e9ecef' }}>
      <div className="container">
        <h2 className="text-center mb-5">{title}</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="accordion" id={accordionId}>
              {faqData.map((item, index) => (
                <FAQItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  id={`Item${index}`}
                  parentId={accordionId}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
