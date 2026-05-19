import { css, html, js, Page, shell, Step, Tab, Tile } from "./utils";
import Logo from "@/docs/img/guides/laravel.react.svg";

export let tile: Tile = {
  title: "Laravel",
  description: "Framework de aplicaciones web PHP con sintaxis expresiva y elegante.",
  Logo,
};

export let page: Page = {
  title: "Instalar Tailwind CSS con Laravel",
  description: "Configurando Tailwind CSS en un proyecto Laravel.",
};

export let tabs: Tab[] = [
  {
    slug: "vite",
    title: "Usando Vite",
  },
  {
    slug: "mix",
    title: "Usando Laravel Mix",
  },
];

export let steps: Step[] = [
  {
    tabs: ["vite"],
    title: "Crea tu proyecto",
    body: (
      <p>
        Comienza creando un nuevo proyecto Laravel si aún no tienes uno configurado. El enfoque más común es usar{" "}
        <a href="https://laravel.com/docs#creating-an-application">el instalador de Laravel</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        laravel new my-project
        cd my-project
      `,
    },
  },

  {
    tabs: ["vite"],
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
    tabs: ["mix"],
    title: "Instala Tailwind CSS",
    body: (
      <p>
        Instala <code>@tailwindcss/postcss</code> y sus dependencias peer a través de npm.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm install tailwindcss @tailwindcss/postcss postcss
      `,
    },
  },

  {
    tabs: ["vite"],
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
        // [!code highlight:2]
        import tailwindcss from '@tailwindcss/vite'

        export default defineConfig({
          plugins: [
            // [!code highlight:2]
            tailwindcss(),
            // …
          ],
        })
      `,
    },
  },

  {
    tabs: ["mix"],
    title: "Añade Tailwind a tu configuración de Laravel Mix",
    body: (
      <p>
        En tu archivo <code>webpack.mix.js</code>, añade <code>tailwindcss</code> como un plugin de PostCSS.
      </p>
    ),
    code: {
      name: "webpack.mix.js",
      lang: "js",
      code: js`
        mix
          .js("resources/js/app.js", "public/js")
          .postCss("resources/css/app.css", "public/css", [
            // [!code highlight:2]
            require("@tailwindcss/postcss"),
          ]);
      `,
    },
  },

  {
    title: "Importa Tailwind CSS",
    body: (
      <p>
        Añade un <code>@import</code> a <code>./resources/css/app.css</code> que importe Tailwind CSS. Adicionalmente,
        dile a Tailwind CSS que escanee tu directorio <code>resources/views</code> en busca de utilidades.
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
    tabs: ["vite"],
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
    tabs: ["mix"],
    title: "Inicia tu proceso de build",
    body: (
      <p>
        Ejecuta tu proceso de build con <code>npm run watch</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm run watch
      `,
    },
  },

  {
    tabs: ["vite"],
    title: "Comienza a usar Tailwind en tu proyecto",
    body: (
      <p>
        Asegúrate de que tu CSS compilado esté incluido en el <code>{"<head>"}</code> y luego comienza a usar las
        clases de utilidad de Tailwind para estilizar tu contenido.
      </p>
    ),
    code: {
      name: "app.blade.php",
      lang: "blade",
      code: html`
        <!doctype html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <!-- [!code highlight:2] -->
            @vite('resources/css/app.css')
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
  {
    tabs: ["mix"],
    title: "Comienza a usar Tailwind en tu proyecto",
    body: (
      <p>
        Asegúrate de que tu CSS compilado esté incluido en el <code>{"<head>"}</code> y luego comienza a usar las
        clases de utilidad de Tailwind para estilizar tu contenido.
      </p>
    ),
    code: {
      name: "app.blade.php",
      lang: "blade",
      code: html`
        <!doctype html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <!-- [!code highlight:2] -->
            <link href="{{ asset('css/app.css') }}" rel="stylesheet" />
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
