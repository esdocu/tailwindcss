import { astro, css, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/astro.react.svg";
import LogoDark from "@/docs/img/guides/astro-white.react.svg";

export let tile: Tile = {
  title: "Astro",
  description: "El framework web todo en uno diseñado para la velocidad.",
  Logo,
  LogoDark,
};

export let page: Page = {
  title: "Instalar Tailwind CSS con Astro",
  description: "Configurando Tailwind CSS en un proyecto Astro.",
};

export let steps: Step[] = [
  {
    title: "Crea tu proyecto",
    body: (
      <p>
        Comienza creando un nuevo proyecto Astro si aún no tienes uno configurado. El enfoque más común es usar{" "}
        <a href="https://docs.astro.build/en/install-and-setup/#install-from-the-cli-wizard">create astro</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm create astro@latest my-project
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
        Añade el plugin <code>@tailwindcss/vite</code> a tus plugins de Vite en tu archivo de configuración de Astro.
      </p>
    ),
    code: {
      name: "astro.config.mjs",
      lang: "js",
      code: js`
        // @ts-check
        import { defineConfig } from "astro/config";
        // [!code highlight:2]
        import tailwindcss from "@tailwindcss/vite";

        // https://astro.build/config
        export default defineConfig({
          // [!code highlight:4]
          vite: {
            plugins: [tailwindcss()],
          },
        });
      `,
    },
  },
  {
    title: "Importa Tailwind CSS",
    body: (
      <p>
        Crea un archivo <code>./src/styles/global.css</code> y añade un <code>@import</code> para Tailwind CSS.
      </p>
    ),
    code: {
      name: "global.css",
      lang: "css",
      code: css`
        @import "tailwindcss";
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
    body: (
      <p>
        Comienza a usar las clases de utilidad de Tailwind para estilizar tu contenido asegurándote de importar el
        archivo CSS recién creado.
      </p>
    ),
    code: {
      name: "index.astro",
      lang: "astro",
      code: astro`
        ---
        // [!code highlight:2]
        import "../styles/global.css";
        ---

        <!-- [!code highlight:4] -->
        <h1 class="text-3xl font-bold underline">
          Hello world!
        </h1>
      `,
    },
  },
];
