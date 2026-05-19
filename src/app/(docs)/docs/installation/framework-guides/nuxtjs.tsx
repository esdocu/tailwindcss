import { css, html, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/nuxtjs.react.svg";

export const tile: Tile = {
  title: "Nuxt",
  description: "Framework intuitivo de Vue para crear aplicaciones universales.",
  Logo,
};

export const page: Page = {
  title: "Instalar Tailwind CSS con Nuxt",
  description: "Configuración de Tailwind CSS en un proyecto Nuxt.",
};

export const steps: Step[] = [
  {
    title: "Crear tu proyecto",
    body: (
      <p>
        Comienza creando un nuevo proyecto Nuxt si aún no tienes uno configurado. El enfoque más común es utilizar{" "}
        <a href="https://nuxt.com/docs/4.x/getting-started/installation#new-project">Create Nuxt</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm create nuxt my-project
        cd my-project
      `,
    },
  },
  {
    title: "Instalar Tailwind CSS",
    body: (
      <p>
        Instala <code>@tailwindcss/vite</code> y sus dependencias directas a través de npm.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm install tailwindcss @tailwindcss/vite
      `,
    },
  },
  {
    title: "Configurar el plugin de Vite",
    body: (
      <p>
        Añade el plugin <code>@tailwindcss/vite</code> a tu configuración de Nuxt como plugin de Vite.
      </p>
    ),
    code: {
      name: "nuxt.config.ts",
      lang: "ts",
      code: js`
        // [!code highlight:2]
        import tailwindcss from "@tailwindcss/vite";

        export default defineNuxtConfig({
          compatibilityDate: "2025-07-15",
          devtools: { enabled: true },
          vite: {
            plugins: [
              // [!code highlight:2]
              tailwindcss(),
            ],
          },
        });
      `,
    },
  },
  {
    title: "Importar Tailwind CSS",
    body: (
      <p>
        Crea un archivo <code>./app/assets/css/main.css</code> y añade un <code>@import</code> que importe Tailwind CSS.
      </p>
    ),
    code: {
      name: "main.css",
      lang: "css",
      code: css`
        @import "tailwindcss";
      `,
    },
  },
  {
    title: "Añadir el archivo CSS globalmente",
    body: (
      <p>
        Añade tu archivo <code>./app/assets/css/main.css</code> recién creado al array <code>css</code> en tu archivo{" "}
        <code>nuxt.config.ts</code>.
      </p>
    ),
    code: {
      name: "nuxt.config.ts",
      lang: "ts",
      code: js`
        import tailwindcss from "@tailwindcss/vite";

        export default defineNuxtConfig({
          compatibilityDate: "2025-07-15",
          devtools: { enabled: true },
          // [!code highlight:2]
          css: ['./app/assets/css/main.css'],
          vite: {
            plugins: [
              tailwindcss(),
            ],
          },
        });
      `,
    },
  },
  {
    title: "Iniciar tu proceso de compilación",
    body: (
      <p>
        Ejecuta tu proceso de compilación con <code>npm run dev</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm run dev
      `,
    },
  },
  {
    title: "Comenzar a usar Tailwind en tu proyecto",
    body: <p>Comienza a usar las clases de utilidad de Tailwind para dar estilo a tu contenido.</p>,
    code: {
      name: "app.vue",
      lang: "vue",
      code: html`
        <template>
          <!-- [!code highlight:4] -->
          <h1 class="text-3xl font-bold underline">
            <!-- prettier-ignore -->
            Hello world!
          </h1>
        </template>
      `,
    },
  },
];
