import { css, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/qwik.react.svg";

export let tile: Tile = {
  title: "Qwik",
  description: "Construye aplicaciones web interactivas al instante sin esfuerzo.",
  Logo,
};

export let page: Page = {
  title: "Instalar Tailwind CSS con Qwik",
  description: "Configurando Tailwind CSS en un proyecto Qwik.",
};

export let steps: Step[] = [
  {
    title: "Crea tu proyecto",
    body: (
      <p>
        Comienza creando un nuevo proyecto Qwik si aún no tienes uno configurado. El enfoque más común es usar{" "}
        <a href="https://qwik.dev/docs/getting-started/#create-an-app-using-the-cli">Create Qwik</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm create qwik@latest empty my-project
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
        Añade el plugin <code>@tailwindcss/vite</code> a tu configuración de Vite.
      </p>
    ),
    code: {
      name: "vite.config.ts",
      lang: "ts",
      code: js`
        import { defineConfig } from 'vite'
        import { qwikVite } from "@builder.io/qwik/optimizer";
        import { qwikCity } from "@builder.io/qwik-city/vite";
        // …

        // [!code highlight:2]
        import tailwindcss from '@tailwindcss/vite'

        export default defineConfig(({ command, mode }): UserConfig => {
          return {
            plugins: [
              // [!code highlight:2]
              tailwindcss(),
              qwikCity(),
              qwikVite(),
              tsconfigPaths(),
            ],

            // …
          }
        })
      `,
    },
  },
  {
    title: "Importa Tailwind CSS",
    body: (
      <p>
        Añade un <code>@import</code> a <code>./src/global.css</code> que importe Tailwind CSS.
      </p>
    ),
    code: {
      name: "app.css",
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
    body: <p>Comienza a usar las clases de utilidad de Tailwind para estilizar tu contenido.</p>,
    code: {
      name: "index.tsx",
      lang: "tsx",
      code: js`
        import { component$ } from '@builder.io/qwik'

        export default component$(() => {
          return (
            // [!code highlight:4]
            <h1 class="text-3xl font-bold underline">
              Hello World!
            </h1>
          )
        })
      `,
    },
  },
];
