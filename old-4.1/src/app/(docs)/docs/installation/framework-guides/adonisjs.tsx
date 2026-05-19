import { css, js, shell, html, type Page, type Step, type Tile } from "./utils";
import Logo from "@/docs/img/guides/adonis.react.svg";
import LogoDark from "@/docs/img/guides/adonis-white.react.svg";

export let tile: Tile = {
  title: "AdonisJS",
  description: "Un framework web completo para Node.js.",

  Logo,
  LogoDark,
};

export let page: Page = {
  title: "Instalar Tailwind CSS con AdonisJS",
  description: "Configurando Tailwind CSS en un proyecto AdonisJS.",
};

export let steps: Step[] = [
  {
    title: "Crea tu proyecto",
    body: (
      <p>
        Comienza creando un nuevo proyecto AdonisJS si aún no tienes uno configurado. El enfoque más común es usar{" "}
        <a href="https://docs.adonisjs.com/guides/getting-started/installation">Create AdonisJS</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm init adonisjs@latest my-project -- --kit=web
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
        import adonisjs from '@adonisjs/vite/client'
        // [!code highlight:2]
        import tailwindcss from '@tailwindcss/vite'

        export default defineConfig({
          plugins: [
            // [!code highlight:2]
            tailwindcss(),
            adonisjs({
              // …
            }),
          ],
        })
      `,
    },
  },
  {
    title: "Importa Tailwind CSS",
    body: (
      <p>
        Añade un <code>@import</code> a <code>./resources/css/app.css</code> que importe los estilos de Tailwind CSS.
        Además, dile a Tailwind CSS que escanee tu directorio <code>resources/views</code> en busca de utilidades.
      </p>
    ),
    code: {
      name: "app.css",
      lang: "css",
      code: css`
        @import "tailwindcss";
        @source "../views";
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
      code: "npm run dev",
    },
  },
  {
    title: "Comienza a usar Tailwind en tu proyecto",
    body: (
      <p>
        Asegúrate de que tu CSS compilado esté incluido en el <code>{"<head>"}</code> y luego comienza a usar las
        clases de utilidad de Tailwind para estilizar tu contenido.
      </p>
    ),
    code: {
      name: "home.edge",
      lang: "edge",
      code: html`
        <!doctype html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <!-- [!code highlight:2] -->
            @vite(['resources/css/app.css', 'resources/js/app.js'])
          </head>
          <body>
            <!-- [!code highlight:4] -->
            <h1 class="text-3xl font-bold underline">
              <!-- prettier-ignore -->
              Hello world!
            </h1>
          </body>
        </html>
      `,
    },
  },
];
