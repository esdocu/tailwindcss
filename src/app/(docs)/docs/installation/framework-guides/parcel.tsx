import { css, html, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/parcel.react.svg";

export const tile: Tile = {
  title: "Parcel",
  description: "La herramienta de construcción sin configuración para la web.",
  Logo,
};

export const page: Page = {
  title: "Instalar Tailwind CSS con Parcel",
  description: "Configuración de Tailwind CSS en un proyecto Parcel.",
};

export const steps: Step[] = [
  {
    title: "Crear tu proyecto",
    body: (
      <p>
        Comienza creando un nuevo proyecto Parcel si aún no tienes uno configurado. El enfoque más común es agregar
        Parcel como una dependencia de desarrollo a tu proyecto como se describe en su{" "}
        <a href="https://parceljs.org/getting-started/webapp/">guía de inicio</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        mkdir my-project
        cd my-project
        npm init -y
        npm install parcel
        mkdir src
        touch src/index.html
      `,
    },
  },
  {
    title: "Instalar Tailwind CSS",
    body: (
      <p>
        Instala <code>@tailwindcss/postcss</code> y sus dependencias directas a través de npm.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm install tailwindcss @tailwindcss/postcss
      `,
    },
  },
  {
    title: "Configurar PostCSS",
    body: (
      <p>
        Crea un archivo <code>.postcssrc</code> en la raíz de tu proyecto y habilita el plugin <code>@tailwindcss/postcss</code>.
      </p>
    ),
    code: {
      name: ".postcssrc",
      lang: "json",
      code: js`
        {
          "plugins": {
            "@tailwindcss/postcss": {}
          }
        }
      `,
    },
  },
  {
    title: "Importar Tailwind CSS",
    body: (
      <p>
        Crea un archivo <code>./src/index.css</code> y añade un <code>@import</code> que importe Tailwind CSS.
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
    title: "Iniciar tu proceso de compilación",
    body: (
      <p>
        Ejecuta tu proceso de compilación con <code>npx parcel src/index.html</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npx parcel src/index.html
      `,
    },
  },
  {
    title: "Comenzar a usar Tailwind en tu proyecto",
    body: (
      <p>
        Añade tu archivo CSS al <code>{"<head>"}</code> y comienza a usar las clases de utilidad de Tailwind para dar estilo a tu
        contenido.
      </p>
    ),
    code: {
      name: "index.html",
      lang: "html",
      code: html`
        <!doctype html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <!-- [!code highlight:2] -->
            <link href="./index.css" type="text/css" rel="stylesheet" />
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
