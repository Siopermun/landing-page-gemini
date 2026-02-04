import React from 'react';

const ProcessStep = ({ iconClass, title, description }: { iconClass: string; title: string; description: string }) => (
  <div className="col-md-4 text-center">
    <div className="p-4">
      <i className={`${iconClass} mb-3`} style={{ fontSize: '3rem', color: 'var(--primary-color)' }}></i>
      <h3>{title}</h3>
      <p className="text-muted">{description}</p>
    </div>
  </div>
);

const ProcessSection = () => {
  return (
    <section id="process" className="py-5" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <h2 className="text-center mb-5">Mi Proceso de Trabajo</h2>
        <div className="row">
          <ProcessStep
            iconClass="bi bi-headset"
            title="1. Contacto y Diagnóstico"
            description="Contáctame a través del formulario o WhatsApp y cuéntame tu problema. Realizaré un diagnóstico preliminar."
          />
          <ProcessStep
            iconClass="bi bi-geo-alt-fill"
            title="2. Visita a Domicilio"
            description="Agendamos una visita en tu hogar u oficina en Caracas para una revisión técnica detallada del equipo."
          />
          <ProcessStep
            iconClass="bi bi-tools"
            title="3. Solución Eficiente"
            description="Aplico la solución necesaria para que tu equipo vuelva a funcionar de manera óptima, con garantía y profesionalismo."
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
