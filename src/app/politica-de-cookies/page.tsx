import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies | Siopermun',
  description: 'Información sobre el uso de &quot;cookies&quot; en el sitio web de &quot;Siopermun&quot;, conforme a la legislación venezolana.',
  robots: {
    index: false,
    follow: true,
  },
};

const CookiePolicyPage = () => {
  return (
    <div className="container py-5">
      <div className="alert alert-danger" role="alert">
        <strong>Descargo de Responsabilidad:</strong> Este documento es un modelo y no constituye asesoramiento legal. Se recomienda encarecidamente consultar a un abogado para asegurar el cumplimiento de todas las normativas aplicables en Venezuela.
      </div>

      <h1 className="text-center mb-4">Política de Cookies</h1>
      <p className="text-center text-muted">Última actualización: 21 de diciembre de 2025</p>

      <h2 className="mt-5">1. ¿Qué son las Cookies?</h2>
      <p>
        Una &quot;cookie&quot; es un pequeño fichero de texto que un sitio web almacena en el navegador del usuario. Las cookies facilitan el uso y la navegación por una página web y son esenciales para el funcionamiento de internet, aportando innumerables ventajas en la prestación de servicios interactivos. Al aceptar el uso de cookies en nuestro sitio, usted consiente la recopilación de información según se describe en esta política.
      </p>

      <h2 className="mt-5">2. Tipos de Cookies que Utilizamos</h2>
      <p>
        Este sitio web, operado por Siopermun, utiliza los siguientes tipos de cookies:
      </p>
      <ul>
        <li>
          <strong>Cookies de Análisis (Terceros):</strong> Utilizamos Google Analytics, un servicio de analítica web de Google, Inc. Estas cookies nos permiten recopilar información estadística y anónima sobre cómo los visitantes utilizan nuestro sitio web (por ejemplo, páginas visitadas, duración de la visita, etc.). Esta información se utiliza exclusivamente para medir la actividad del sitio y mejorar su funcionalidad. Usted puede obtener más información sobre cómo Google trata estos datos en su <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">política de privacidad</a>.
        </li>
        <li>
          <strong>Cookies Funcionales (Potenciales):</strong> En el futuro, podríamos implementar cookies funcionales para recordar sus preferencias (como el idioma) o para habilitar otras funcionalidades, con el fin de personalizar y mejorar su experiencia.
        </li>
      </ul>
      <p>
        No utilizamos cookies para recopilar información personal sensible ni con fines publicitarios sin su consentimiento explícito.
      </p>

      <h2 className="mt-5">3. Consentimiento y Gestión de Cookies</h2>
      <p>
        Al ingresar a nuestro sitio, se le solicitará su consentimiento para el uso de cookies no esenciales. Usted tiene el derecho de aceptar, rechazar o gestionar las cookies.
      </p>
      <p>
        Puede bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones de su navegador. A continuación, proporcionamos enlaces a las guías de los navegadores más comunes:
      </p>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
        <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
        <li><a href="https://support.microsoft.com/es-es/windows/microsoft-edge-datos-de-exploraci%C3%B3n-y-privacidad-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
        <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari (macOS)</a></li>
      </ul>
      <p>
        Tenga en cuenta que si deshabilita las cookies, es posible que algunas funcionalidades de nuestro sitio web no operen correctamente o que su experiencia de navegación se vea limitada.
      </p>

      <h2 className="mt-5">4. Cambios en la Política de Cookies</h2>
      <p>
        Nos reservamos el derecho de modificar esta política para adaptarla a futuras novedades legislativas o tecnológicas. Cualquier cambio será publicado en esta página con una nueva fecha de actualización.
      </p>

      <h2 className="mt-5">5. Contacto</h2>
      <p>
        Si tiene alguna pregunta sobre nuestra política de cookies, no dude en contactarnos a través de los medios proporcionados en nuestro sitio web.
      </p>
    </div>
  );
};

export default CookiePolicyPage;
