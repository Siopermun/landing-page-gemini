import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import BootstrapClient from './BootstrapClient';
import CookieBanner from '../components/CookieBanner';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.siopermun.com"),
  title: "Servicio Técnico de PC y Laptops a Domicilio en Caracas | Siopermun",
  description: "Soporte técnico de computadoras a domicilio en Caracas. Reparación de PC y laptops, mantenimiento, instalación de software y más. ¡Servicio garantizado!",
  keywords: ["reparación de pc caracas", "servicio técnico computadoras caracas", "mantenimiento de laptop a domicilio", "instalación de software caracas", "soporte técnico pc", "siopermun"],
  generator: "Next.js",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Servicio Técnico de PC y Laptops a Domicilio en Caracas | Siopermun",
    description: "¡Soluciones expertas para tu PC o laptop! Ofrecemos mantenimiento, reparación, instalación de software y más, directamente en tu domicilio en Caracas.",
    url: "https://www.siopermun.com",
    siteName: "Siopermun",
    images: [
      {
        url: "/imagen/logo.jpeg", // Relative to metadataBase
        width: 800,
        height: 600,
        alt: "Logo de Siopermun - Servicio técnico de computadoras en Caracas",
      },
    ],
    locale: "es_VE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicio Técnico de PC y Laptops a Domicilio en Caracas | Siopermun",
    description: "¡Soluciones expertas para tu PC o laptop! Ofrecemos mantenimiento, reparación, instalación de software y más, directamente en tu domicilio en Caracas.",
    images: ["/imagen/logo.jpeg"], // Relative to metadataBase
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-FLG3VCQGB6" strategy="afterInteractive" />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FLG3VCQGB6');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "additionalType": "http://schema.org/ComputerRepair",
              "name": "Siopermun",
              "image": "https://www.siopermun.com/imagen/logo.jpeg",
              "url": "https://www.siopermun.com",
              "telephone": "+584129584815",
              "priceRange": "$$",
              "description": "Siopermun es tu solución confiable para servicio técnico de computadoras a domicilio en Caracas. Me especializo en mantenimiento, reparación e instalación de software para PCs y laptops.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Detras del Poliedro de Caracas",
                "addressLocality": "Caracas",
                "addressRegion": "Parroquia Coche, Sector Cristo Rey",
                "postalCode": "1090",
                "addressCountry": "VE"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "09:00",
                  "closes": "17:00"
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Servicios de Reparación de Computadoras",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Mantenimiento Integral",
                      "description": "Realizamos mantenimiento correctivo y preventivo para asegurar el óptimo funcionamiento de tus computadoras y laptops."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Instalación de Sistemas Operativos",
                      "description": "Instalamos y configuramos el sistema operativo de tu preferencia, garantizando un inicio limpio y eficiente."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Instalación y Actualización de Drivers",
                      "description": "Nos encargamos de instalar y actualizar todos los drivers necesarios para el correcto funcionamiento de tu hardware."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Software Esencial",
                      "description": "Instalamos antivirus, paquetes de oficina (Office) y otros programas fundamentales para tu productividad y seguridad."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Instalación de Programas Personalizados",
                      "description": "Cualquier otro software que necesites, lo instalamos y configuramos para que esté listo para usar."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Automatización de Tareas",
                      "description": "Desarrollo programas personalizados para automatizar tus tareas repetitivas, optimizando tu tiempo y recursos."
                    }
                  }
                ]
              },
              "areaServed": {
                "@type": "City",
                "name": "Caracas"
              },
              "potentialAction": {
                "@type": "ReserveAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://wa.me/584129584815",
                  "inLanguage": "es-VE",
                  "actionPlatform": [
                    "http://schema.org/DesktopWebPlatform",
                    "http://schema.org/IOSPlatform",
                    "http://schema.org/AndroidPlatform"
                  ]
                },
                "result": {
                  "@type": "Reservation",
                  "name": "Solicitar Presupuesto"
                }
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <BootstrapClient />
        <CookieBanner />
      </body>
    </html>
  );
}
