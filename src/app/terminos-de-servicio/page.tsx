import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos y Condiciones | Siopermun',
  description: 'Términos y Condiciones de uso de los servicios de &quot;Siopermun&quot;.',
  robots: {
    index: false,
    follow: true,
  },
};

const TermsOfServicePage = () => {
  return (
    <div className="container my-5">
      <div className="alert alert-danger" role="alert">
        <strong>Descargo de Responsabilidad:</strong> Este documento es un modelo y no constituye asesoramiento legal. Se recomienda encarecidamente que un abogado cualificado revise estos términos para asegurar su total conformidad con la legislación venezolana.
      </div>

      <h1 className="text-center mb-4">Términos y Condiciones del Servicio</h1>
      <p className="text-center text-muted">Última actualización: 21 de diciembre de 2025</p>

      <h2 className="mt-5 mb-3">1. Aceptación de los Términos</h2>
      <p>
        Estos Términos y Condiciones del Servicio (&quot;Términos&quot;) rigen el uso de los servicios de soporte técnico y consultoría (los &quot;Servicios&quot;) proporcionados por <strong>Siopermun</strong> (&quot;nosotros&quot;, &quot;la empresa&quot;). Al solicitar o utilizar nuestros Servicios, usted (&quot;el Cliente&quot;) confirma que ha leído, entendido y aceptado estar sujeto a estos Términos, así como a nuestra Política de Privacidad y Política de Cookies. Si no está de acuerdo, no podrá acceder a nuestros Servicios.
      </p>

      <h2 className="mt-5 mb-3">2. Descripción de los Servicios</h2>
      <p>
        Siopermun ofrece servicios de mantenimiento, reparación, instalación de software y hardware, y asesoría tecnológica para computadoras y laptops, principalmente a domicilio en la ciudad de Caracas, Venezuela. El alcance específico y el costo de cada servicio serán acordados con el Cliente antes de su ejecución.
      </p>

      <h2 className="mt-5 mb-3">3. Obligaciones del Cliente</h2>
      <p>
        El Cliente se compromete a:
      </p>
      <ul>
        <li>Proporcionar información veraz, precisa y completa sobre su identidad, su equipo y el problema que presenta.</li>
        <li>Realizar un respaldo completo de todos sus datos (documentos, fotos, etc.) antes de la prestación de cualquier servicio. Siopermun no se hace responsable por la pérdida de datos.</li>
        <li>Asegurar un entorno de trabajo seguro, accesible y adecuado para que nuestro técnico pueda realizar el servicio a domicilio.</li>
        <li>Realizar el pago puntual por los servicios prestados, según las tarifas y métodos de pago acordados.</li>
        <li>Garantizar que todo el software instalado o solicitado para instalar en su equipo cuenta con las licencias de uso correspondientes.</li>
      </ul>

      <h2 className="mt-5 mb-3">4. Pagos y Tarifas</h2>
      <p>
        Las tarifas de los servicios serán comunicadas al Cliente y deberán ser aceptadas antes de iniciar el trabajo. Los pagos se realizarán a través de los medios convenidos. En caso de aplicar, los impuestos correspondientes serán añadidos al monto final.
      </p>
      
      <h2 className="mt-5 mb-3">5. Garantía y Limitación de Responsabilidad</h2>
      <p>
        Nuestros servicios de reparación tienen una garantía limitada sobre la falla específica atendida, cuyos términos y duración se especificarán en el reporte de servicio. Esta garantía no cubre fallas nuevas o problemas derivados de un mal uso por parte del Cliente.
      </p>
      <p>
        La responsabilidad de Siopermun se limita estrictamente al servicio prestado. No seremos responsables por:
      </p>
      <ul>
        <li>Pérdida total o parcial de información, datos o software no respaldados previamente por el Cliente.</li>
        <li>Daños preexistentes, ocultos o no informados por el Cliente.</li>
        <li>Fallas causadas por fluctuaciones eléctricas, virus informáticos o el uso de software sin licencia.</li>
        <li>Daños indirectos, incidentales o consecuentes.</li>
      </ul>

      <h2 className="mt-5 mb-3">6. Propiedad Intelectual</h2>
      <p>
        Todo el contenido presente en este sitio web, incluyendo textos, gráficos, logos, íconos y software, es propiedad de Siopermun o de sus proveedores de contenido y está protegido por las leyes de propiedad intelectual. No está permitida su reproducción o uso sin nuestro consentimiento explícito por escrito.
      </p>

      <h2 className="mt-5 mb-3">7. Ley Aplicable y Jurisdicción</h2>
      <p>
        Estos Términos se rigen e interpretan de acuerdo con las leyes de la República Bolivariana de Venezuela. Para cualquier disputa o reclamación, las partes se someten a la jurisdicción de los tribunales competentes de la ciudad de Caracas, y a los procedimientos administrativos que pudieran corresponder ante la Superintendencia Nacional para la Defensa de los Derechos Socioeconómicos (SUNDDE), cuando sea aplicable.
      </p>

      <h2 className="mt-5 mb-3">8. Modificaciones de los Términos</h2>
      <p>
        Nos reservamos el derecho de modificar estos Términos en cualquier momento. La versión actualizada será publicada en esta página y se indicará la fecha de la última revisión. El uso continuado de los Servicios después de dichas modificaciones constituye su aceptación de los nuevos Términos.
      </p>

      <h2 className="mt-5 mb-3">9. Contacto</h2>
      <p>
        Si tiene alguna pregunta sobre estos Términos y Condiciones, por favor, contáctenos a través de nuestro formulario o número de WhatsApp disponible en el sitio web.
      </p>
    </div>
  );
};

export default TermsOfServicePage;
