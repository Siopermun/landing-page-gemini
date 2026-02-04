# Instrucciones de Despliegue para Landing Page Next.js Estática

Este documento te guiará a través del proceso para generar una versión estática de tu proyecto Next.js (una "landing page") y subirla a tu proveedor de hosting. Este método es ideal para sitios que no requieren un servidor backend para renderizado dinámico en tiempo real.

---

## 1. Prerrequisitos

Antes de comenzar, asegúrate de tener lo siguiente:

*   **Node.js y npm/yarn** instalados en tu máquina local.
*   **Acceso a tu servidor de hosting** (vía FTP/SFTP, cPanel o panel de control similar).
*   **Conocimiento básico** de cómo usar la línea de comandos (terminal).

---

## 2. Generar la Versión Estática (Build)

Sigue estos pasos en tu máquina local:

1.  **Navega a la carpeta de tu proyecto**:
    ```bash
    cd /home/renier/Proyectos_terminados/landing-page
    ```

2.  **Instala las dependencias (si no lo has hecho ya)**:
    ```bash
    npm install
    # o si usas yarn
    # yarn install
    ```

3.  **Asegúrate de que `next.config.ts` esté configurado para exportación estática**:
    Tu archivo `next.config.ts` ya tiene la configuración correcta:
    ```typescript
    import type { NextConfig } from "next";

    const nextConfig: NextConfig = {
      output: "export", // ¡Esto es clave para la exportación estática!
      images: {
        unoptimized: true, // Esto es importante para imágenes en exportaciones estáticas
      },
    };

    export default nextConfig;
    ```
    No necesitas hacer cambios en este archivo, ya está listo.

4.  **Genera la versión estática del proyecto**:
    Este comando creará una carpeta `out` en la raíz de tu proyecto, que contendrá todos los archivos HTML, CSS, JavaScript e imágenes necesarios para tu sitio web estático.
    ```bash
    npm run build
    ```
    Después de ejecutar este comando, encontrarás la carpeta `out` con los archivos listos para subir.

---

## 3. Subir los Archivos al Hosting

Ahora que tienes la versión estática de tu landing page, el siguiente paso es subir los contenidos de la carpeta `out` a tu servidor de hosting.

1.  **Conéctate a tu servidor de hosting**:
    Utiliza un cliente FTP/SFTP (como FileZilla, Cyberduck) o la interfaz de administrador de archivos de tu cPanel/panel de control.

2.  **Localiza el directorio raíz de tu sitio web**:
    Esto suele ser `public_html`, `www`, `htdocs` o un nombre similar, dependiendo de tu proveedor de hosting. Asegúrate de que estás en el directorio correcto donde se deben servir los archivos de tu sitio web principal.

3.  **Sube el CONTENIDO de la carpeta `out`**:
    **Importante**: No subas la carpeta `out` en sí misma. Debes subir *todos los archivos y carpetas que están dentro* de la carpeta `out` directamente al directorio raíz de tu sitio web en el hosting (por ejemplo, `public_html`).

    Por ejemplo, si tu carpeta `out` contiene `index.html`, `_next/`, `imagen/`, etc., debes subir `index.html`, `_next/`, `imagen/` directamente a `public_html`.

---

## 4. Verificación

Una vez que los archivos hayan sido subidos:

1.  **Abre tu navegador web** y navega a la URL de tu sitio web (por ejemplo, `https://www.tusitioweb.com`).
2.  **Verifica** que la landing page se carga correctamente y que todas las imágenes y enlaces funcionan como se espera.

---

## 5. Posibles Problemas y Soluciones

*   **Página en blanco o errores 404**:
    *   Asegúrate de haber subido el *contenido* de la carpeta `out`, no la carpeta `out` misma.
    *   Verifica que `index.html` está directamente en el directorio raíz de tu sitio web (`public_html`).
    *   Revisa la consola del navegador (F12) para ver si hay errores de carga de recursos.

*   **Imágenes no cargan**:
    *   Asegúrate de que la carpeta `imagen` (y cualquier otra carpeta de assets) se subió correctamente.
    *   Confirma que la configuración `images: { unoptimized: true }` está presente en `next.config.ts`.

Si tienes alguna duda o encuentras problemas, contacta a tu proveedor de hosting para asistencia específica del servidor.

¡Éxito con tu despliegue!
