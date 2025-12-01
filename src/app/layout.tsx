import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import BootstrapClient from './BootstrapClient';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Siopermun | Mantenimiento y Reparación de PCs y Laptops en Caracas",
  description: "Siopermun ofrece mantenimiento correctivo y preventivo, instalación de sistemas operativos, drivers, antivirus, Office y automatización de tareas en Caracas. Servicio a domicilio.",
  openGraph: {
    title: "Siopermun | Mantenimiento y Reparación de PCs y Laptops en Caracas",
    description: "Siopermun ofrece mantenimiento correctivo y preventivo, instalación de sistemas operativos, drivers, antivirus, Office y automatización de tareas en Caracas. Servicio a domicilio.",
    url: "https://www.siopermun.com",
    siteName: "Siopermun",
    images: [
      {
        url: "https://www.siopermun.com/imagen/logo.jpeg", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Siopermun Logo",
      },
    ],
    locale: "es_VE", // Assuming Venezuela locale
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siopermun | Mantenimiento y Reparación de PCs y Laptops en Caracas",
    description: "Siopermun ofrece mantenimiento correctivo y preventivo, instalación de sistemas operativos, drivers, antivirus, Office y automatización de tareas en Caracas. Servicio a domicilio.",
    images: ["https://www.siopermun.com/imagen/logo.jpeg"], // Must be an absolute URL
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FLG3VCQGB6"></script>
        <script
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
              "@type": "ComputerRepair",
              "name": "Siopermun",
              "image": "https://www.siopermun.com/imagen/logo.jpeg",
              "url": "https://www.siopermun.com",
              "telephone": "+584129584815",
              "priceRange": "$$",
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
                      "name": "Mantenimiento Correctivo"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Mantenimiento Preventivo"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Instalación de Sistemas Operativos"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Instalación y Actualización de Drivers"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Instalación de Antivirus y Office"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Instalación de Programas Personalizados"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Automatización de Tareas"
                    }
                  }
                ]
              },
              "areaServed": {
                "@type": "City",
                "name": "Caracas"
              },
              "serviceArea": {
                "@type": "Place",
                "name": "Caracas"
              },
              "slogan": "Soluciones de software y hardware a domicilio en Caracas."
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
