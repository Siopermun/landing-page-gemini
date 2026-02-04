import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Siopermun',
  description: 'Política de Privacidad de &quot;Siopermun&quot;, actualizada conforme a la legislación venezolana.',
};

const PrivacyPolicyPage = () => {
  return (
    <div className="container my-5">
      <div className="alert alert-danger" role="alert">
        <strong>Descargo de Responsabilidad:</strong> Este documento es un modelo generado por IA con fines informativos, basado en la legislación venezolana vigente a la fecha de su redacción. No constituye asesoramiento legal. Le recomendamos encarecidamente consultar a un abogado cualificado para asegurar su total conformidad con la ley.
      </div>

      <h1 className="text-center mb-4">Política de Privacidad de Siopermun</h1>
      <p className="text-center text-muted">Última actualización: 21 de diciembre de 2025</p>

      <p>
        En Siopermun (&quot;nosotros&quot;, &quot;nuestro&quot;), valoramos su privacidad y nos comprometemos a proteger sus datos personales. Esta política describe cómo recopilamos, usamos, almacenamos y protegemos su información, en cumplimiento con la Constitución de la República Bolivariana de Venezuela y la Ley de Protección de Datos Personales de 2025.
      </p>

      <h2 className="mt-5 mb-3">1. Base Legal y Principios</h2>
      <p>
        El tratamiento de sus datos se fundamenta en el derecho a la protección de datos personales y al habeas data, consagrado en el Artículo 28 de la Constitución, y se rige por los principios de legalidad, finalidad, necesidad, y consentimiento previo, libre e informado, conforme a la Ley de Protección de Datos Personales.
      </p>

      <h2 className="mt-5 mb-3">2. Información que Recopilamos (Datos Personales)</h2>
      <p>
        Recopilamos los datos personales que usted nos proporciona de manera voluntaria y directa al utilizar nuestros servicios, tales como:
      </p>
      <ul>
        <li><strong>Datos de Identificación:</strong> Nombre y apellido.</li>
        <li><strong>Datos de Contacto:</strong> Dirección de correo electrónico, número de teléfono (incluyendo WhatsApp).</li>
        <li><strong>Datos del Servicio:</strong> Información y detalles sobre el problema técnico o la solicitud que nos presenta.</li>
      </ul>
      <p>
        No recopilamos datos sensibles sin su consentimiento explícito.
      </p>

      <h2 className="mt-5 mb-3">3. Finalidad del Tratamiento de Datos</h2>
      <p>
        Sus datos personales son utilizados exclusivamente para las siguientes finalidades:
      </p>
      <ul>
        <li>Proveer y gestionar los servicios de soporte técnico solicitados.</li>
        <li>Responder a sus consultas, solicitudes y comunicarnos eficazmente con usted.</li>
        <li>Realizar diagnósticos y seguimientos post-servicio.</li>
        <li>Mejorar la calidad de nuestros servicios.</li>
        <li>Cumplir con obligaciones legales y fiscales.</li>
      </ul>

      <h2 className="mt-5 mb-3">4. Consentimiento</h2>
      <p>
        Al proporcionarnos sus datos personales a través de nuestro formulario de contacto, WhatsApp o cualquier otro medio, usted otorga su consentimiento libre, informado y explícito para que tratemos su información conforme a los términos de esta política. Puede retirar su consentimiento en cualquier momento, lo cual podría implicar la imposibilidad de continuar prestando el servicio.
      </p>

      <h2 className="mt-5 mb-3">5. Derechos del Titular de los Datos (Derechos ARCO)</h2>
      <p>
        Conforme a la legislación venezolana, usted tiene derecho a:
      </p>
      <ul>
        <li><strong>Acceso:</strong> Conocer qué datos personales tenemos sobre usted y cómo los estamos tratando.</li>
        <li><strong>Rectificación:</strong> Solicitar la corrección de su información si es inexacta o está incompleta.</li>
        <li><strong>Cancelación (Supresión):</strong> Pedir la eliminación de sus datos de nuestros registros cuando ya no sean necesarios para la finalidad con que fueron recopilados, o si considera que no están siendo tratados conforme a la ley.</li>
        <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos para fines específicos (por ejemplo, marketing directo, si aplicara).</li>
      </ul>
      <p>
        Para ejercer estos derechos, por favor, contáctenos a través de los medios indicados en la sección &quot;Contacto&quot;. Su solicitud será procesada en los lapsos establecidos por la ley.
      </p>

      <h2 className="mt-5 mb-3">6. Seguridad y Confidencialidad</h2>
      <p>
        Implementamos medidas de seguridad técnicas, físicas y administrativas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción. Sus datos son tratados con estricta confidencialidad.
      </p>

       <h2 className="mt-5 mb-3">7. Transferencia de Datos a Terceros</h2>
      <p>
        No vendemos, cedemos ni transferimos su información personal a terceros, salvo que sea estrictamente necesario para la prestación del servicio (por ejemplo, con proveedores de herramientas de comunicación que actúan como nuestros encargados) o en cumplimiento de una obligación legal emanada de una autoridad competente.
      </p>

      <h2 className="mt-5 mb-3">8. Autoridad de Supervisión</h2>
      <p>
        Le informamos que la entidad encargada de supervisar el cumplimiento de la ley de protección de datos en Venezuela es la Superintendencia Nacional de Protección de Datos.
      </p>

      <h2 className="mt-5 mb-3">9. Cambios a esta Política</h2>
      <p>
        Nos reservamos el derecho de modificar esta Política de Privacidad para adaptarla a novedades legislativas o jurisprudenciales. Cualquier cambio será notificado publicando la nueva versión en esta misma página con una nueva fecha de actualización.
      </p>

      <h2 className="mt-5 mb-3">10. Contacto</h2>
      <p>
        Si tiene alguna pregunta sobre esta Política de Privacidad o desea ejercer sus derechos, puede contactarnos a través de nuestro formulario de contacto o número de WhatsApp disponible en el sitio web.
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
