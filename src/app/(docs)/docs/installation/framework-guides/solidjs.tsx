import { js, css, shell, type Page, type Step, type Tile } from "./utils";
import Logo from "@/docs/img/guides/solidjs.react.svg";

export let tile: Tile = {
  title: "SolidJS",
  description: "Una herramienta para construir interfaces de usuario simples, de alto rendimiento y reactivas.",
  Logo,
};

export let page: Page = {
  title: "Instalar Tailwind CSS con SolidJS",
  description: "Configurando Tailwind CSS en un proyecto SolidJS.",
};

export let steps: Step[] = [
  {
    title: "Crea tu proyecto",
    body: (
      <p>
        Comienza creando un nuevo proyecto SolidJS si aún no tienes uno configurado. El enfoque más común es usar{" "}
        <a href="https://www.solidjs.com/guides/getting-started">la plantilla Vite de SolidJS</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npx degit solidjs/templates/js my-project
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
        import { defineConfig } from 'vite';
        import solidPlugin from 'vite-plugin-solid';
        // [!code highlight:2]
        import tailwindcss from '@tailwindcss/vite';

        export default defineConfig({
          plugins: [
            // [!code highlight:2]
            tailwindcss(),
            solidPlugin(),
          ],
          server: {
            port: 3000,
          },
          build: {
            target: 'esnext',
          },
        });
      `,
    },
  },
  {
    title: "Importa Tailwind CSS",
    body: (
      <p>
        Añade un <code>@import</code> a <code>./src/index.css</code> que importe Tailwind CSS.
      </p>
    ),
    code: {
      name: "index.css",
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
      name: "App.jsx",
      lang: "jsx",
      code: js`
        export default function App() {
          return (
            // [!code highlight:4]
            <h1 class="text-3xl font-bold underline">
              Hello world!
            </h1>
          )
        }
      `,
    },
  },
];
