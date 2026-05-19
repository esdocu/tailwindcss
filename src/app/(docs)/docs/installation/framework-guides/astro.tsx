import { astro, css, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/astro.react.svg";
import LogoDark from "@/docs/img/guides/astro-white.react.svg";

export const tile: Tile = {
  title: "Astro",
  description: "El framework web todo en uno diseñado para la velocidad.",
  Logo,
  LogoDark,
};

export const page: Page = {
  title: "Instalar Tailwind CSS con Astro",
  description: "Configuración de Tailwind CSS en un proyecto Astro.",
};

export const steps: Step[] = [
  {
    title: "Crear tu proyecto",
    body: (
      <p>
        Comienza creando un nuevo proyecto Astro si aún no tienes uno configurado. El enfoque más común es utilizar{" "}
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
    title: "Importar Tailwind CSS",
    body: (
      <p>
        Crea un archivo <code>./src/styles/global.css</code> y añade un <code>@import</code> que importe Tailwind CSS.
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
    body: (
      <p>
        Comienza a usar las clases de utilidad de Tailwind para dar estilo a tu contenido, asegurándote de importar el
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
