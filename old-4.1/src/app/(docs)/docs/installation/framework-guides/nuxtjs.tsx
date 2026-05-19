import { css, html, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/nuxtjs.react.svg";

export let tile: Tile = {
  title: "Nuxt",
  description: "Framework Vue intuitivo para construir aplicaciones universales.",
  Logo,
};

export let page: Page = {
  title: "Instalar Tailwind CSS con Nuxt",
  description: "Configurando Tailwind CSS en un proyecto Nuxt.",
};

export let steps: Step[] = [
  {
    title: "Crea tu proyecto",
    body: (
      <p>
        Comienza creando un nuevo proyecto Nuxt si aún no tienes uno configurado. El enfoque más común es usar la{" "}
        <a href="https://nuxt.com/docs/getting-started/installation">Interfaz de línea de comandos de Nuxt</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npx nuxi init my-project
        cd my-project
      `,
    },
  },
  {
    title: "Instala Tailwind CSS",
    body: (
      <p>
        Instala <code>@tailwindcss/vite</code> y sus dependencias peer a través de npm.
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
    title: "Configura el plugin de Vite",
    body: (
      <p>
        Añade el plugin <code>@tailwindcss/vite</code> a tu configuración de Nuxt como un plugin de Vite.
      </p>
    ),
    code: {
      name: "nuxt.config.ts",
      lang: "ts",
      code: js`
        // [!code highlight:2]
        import tailwindcss from "@tailwindcss/vite";

        export default defineNuxtConfig({
          compatibilityDate: "2024-11-01",
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
    title: "Importa Tailwind CSS",
    body: (
      <p>
        Crea un archivo <code>./assets/css/main.css</code> y añade un <code>@import</code> que importe Tailwind CSS.
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
    title: "Añade el archivo CSS globalmente",
    body: (
      <p>
        Añade tu archivo <code>./assets/css/main.css</code> recién creado al array <code>css</code> en tu archivo{" "}
        <code>nuxt.config.ts</code>.
      </p>
    ),
    code: {
      name: "nuxt.config.ts",
      lang: "ts",
      code: js`
        import tailwindcss from "@tailwindcss/vite";

        export default defineNuxtConfig({
          compatibilityDate: "2024-11-01",
          devtools: { enabled: true },
          // [!code highlight:2]
          css: ['~/assets/css/main.css'],
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
    title: "Inicia tu proceso de build",
    body: (
      <p>
        Ejecuta tu proceso de build con <code>npm run dev</code>.
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
    title: "Comienza a usar Tailwind en tu proyecto",
    body: <p>Comienza a usar las clases de utilidad de Tailwind para estilizar tu contenido.</p>,
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