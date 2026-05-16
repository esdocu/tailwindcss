import { css, html, js, Page, shell, Step, Tile, twig } from "./utils";
import Logo from "@/docs/img/guides/symfony.react.svg";
import LogoDark from "@/docs/img/guides/symfony-white.react.svg";

export let tile: Tile = {
  title: "Symfony",
  description: "Un framework PHP para crear sitios web y aplicaciones web.",
  Logo,
  LogoDark,
};

export let page: Page = {
  title: "Instalar Tailwind CSS con Symfony",
  description: "Configurando Tailwind CSS en un proyecto Symfony.",
};

export let steps: Step[] = [
  {
    title: "Crea tu proyecto",
    body: (
      <p>
        Comienza creando un nuevo proyecto Symfony si aún no tienes uno configurado. El enfoque más común es usar{" "}
        <a href="https://symfony.com/download">el Instalador de Symfony</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        symfony new --webapp my-project
        cd my-project
      `,
    },
  },
  {
    title: "Instala Webpack Encore",
    body: (
      <p>
        Instala Webpack Encore, que se encarga de construir tus assets. Consulta{" "}
        <a href="https://symfony.com/doc/current/frontend.html">la documentación</a> para obtener más información.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        composer remove symfony/ux-turbo symfony/asset-mapper symfony/stimulus-bundle
        composer require symfony/webpack-encore-bundle symfony/ux-turbo symfony/stimulus-bundle
      `,
    },
  },
  {
    title: "Instala Tailwind CSS",
    body: (
      <p>
        Usando npm, instala <code>@tailwindcss/postcss</code> y sus dependencias peer, así como{" "}
        <code>postcss-loader</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm install tailwindcss @tailwindcss/postcss postcss postcss-loader
      `,
    },
  },
  {
    title: "Habilita el soporte para PostCSS",
    body: (
      <p>
        En tu archivo <code>webpack.config.js</code>, habilita el PostCSS Loader. Consulta{" "}
        <a href="https://symfony.com/doc/current/frontend/encore/postcss.html">la documentación</a> para más
        información.
      </p>
    ),
    code: {
      name: "webpack.config.js",
      lang: "js",
      code: js`
        Encore
          .enablePostCssLoader()
        ;
      `,
    },
  },
  {
    title: "Configura los plugins de PostCSS",
    body: (
      <p>
        Crea un archivo <code>postcss.config.mjs</code> en la raíz de tu proyecto y añade el plugin{" "}
        <code>@tailwindcss/postcss</code> a tu configuración de PostCSS.
      </p>
    ),
    code: {
      name: "postcss.config.mjs",
      lang: "js",
      code: js`
        export default {
          plugins: {
            // [!code highlight:2]
            "@tailwindcss/postcss": {},
          },
        };
      `,
    },
  },
  {
    title: "Importa Tailwind CSS",
    body: (
      <p>
        Añade un <code>@import</code> a <code>./assets/styles/app.css</code> que importe Tailwind CSS.
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
    title: "Comienza a usar Tailwind en tu proyecto",
    body: (
      <p>
        Asegúrate de que tu CSS compilado esté incluido en el <code>{"<head>"}</code> y luego comienza a usar las
        clases de utilidad de Tailwind para estilizar tu contenido.
      </p>
    ),
    code: {
      name: "base.html.twig",
      lang: "twig",
      code: twig`
        <!doctype html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <!-- [!code highlight:4] -->
            {% block stylesheets %}
              {{ encore_entry_link_tags('app') }}
            {% endblock %}
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
