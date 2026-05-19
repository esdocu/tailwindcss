import { css, js, Page, shell, Step, Tile, twig } from "./utils";
import Logo from "@/docs/img/guides/symfony.react.svg";
import LogoDark from "@/docs/img/guides/symfony-white.react.svg";

export const tile: Tile = {
  title: "Symfony",
  description: "Un framework de PHP para crear sitios web y aplicaciones web.",
  Logo,
  LogoDark,
};

export const page: Page = {
  title: "Instalar Tailwind CSS con Symfony",
  description: "Configuración de Tailwind CSS en un proyecto Symfony.",
};

export const steps: Step[] = [
  {
    title: "Crear tu proyecto",
    body: (
      <p>
        Comienza creando un nuevo proyecto Symfony si aún no tienes uno configurado. El enfoque más común es utilizar{" "}
        <a href="https://symfony.com/download">el instalador de Symfony</a>.
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
    title: "Instalar Webpack Encore",
    body: (
      <p>
        Instala Webpack Encore, que se encarga de compilar tus recursos. Consulta{" "}
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
    title: "Instalar Tailwind CSS",
    body: (
      <p>
        Usando npm, instala <code>@tailwindcss/postcss</code> y sus dependencias directas, así como{" "}
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
    title: "Habilitar el soporte para PostCSS",
    body: (
      <p>
        En tu archivo <code>webpack.config.js</code>, habilita el cargador de PostCSS. Consulta{" "}
        <a href="https://symfony.com/doc/current/frontend/encore/postcss.html">la documentación</a> para obtener más
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
    title: "Configurar los plugins de PostCSS",
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
    title: "Importar Tailwind CSS",
    body: (
      <p>
        Añade un <code>@import</code> a <code>./assets/styles/app.css</code> que importe Tailwind CSS y un{" "}
        <code>@source</code> que ignore el directorio public para evitar bucles de recompilación en el modo de observación (watch mode).
      </p>
    ),
    code: {
      name: "app.css",
      lang: "css",
      code: css`
        @import "tailwindcss";
        @source not "../../public";
      `,
    },
  },
  {
    title: "Iniciar tu proceso de compilación",
    body: (
      <p>
        Ejecuta tu proceso de compilación con <code>npm run watch</code>.
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
    title: "Comenzar a usar Tailwind en tu proyecto",
    body: (
      <p>
        Asegúrate de que tu CSS compilado esté incluido en el <code>{"<head>"}</code> y luego comienza a usar las clases
        de utilidad de Tailwind para dar estilo a tu contenido.
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
