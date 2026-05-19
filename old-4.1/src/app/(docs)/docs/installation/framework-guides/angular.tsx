import { css, html, js, shell, Page, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/angular.react.svg";
import LogoDark from "@/docs/img/guides/angular-white.react.svg";

export let tile: Tile = {
  title: "Angular",
  description: "Plataforma para construir aplicaciones web móviles y de escritorio.",
  Logo,
  LogoDark,
};

export let page: Page = {
  title: "Instalar Tailwind CSS con Angular",
  description: "Configurando Tailwind CSS en un proyecto Angular.",
};

export let steps: Step[] = [
  {
    title: "Crea tu proyecto",
    body: (
      <p>
        Comienza creando un nuevo proyecto Angular si aún no tienes uno configurado. El enfoque más común es usar{" "}
        <a href="https://angular.dev/tools/cli/setup-local">Angular CLI</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        ng new my-project --style css
        cd my-project
      `,
    },
  },
  {
    title: "Instala Tailwind CSS",
    body: (
      <p>
        Instala <code>@tailwindcss/postcss</code> y sus dependencias peer a través de npm.
      </p>
    ),

    // NOTA: La bandera `--force` se usa para asegurar que la instalación sea exitosa. Angular tiene una dependencia peer en `tailwindcss` v3 que causa errores al instalar `tailwindcss` v4.
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm install tailwindcss @tailwindcss/postcss postcss --force
      `,
    },
  },
  {
    title: "Configura los plugins de PostCSS",
    body: (
      <p>
        Crea un archivo <code>.postcssrc.json</code> en la raíz de tu proyecto y añade el plugin{" "}
        <code>@tailwindcss/postcss</code> a tu configuración de PostCSS.
      </p>
    ),
    code: {
      name: ".postcssrc.json",
      lang: "js",
      code: js`
        {
          "plugins": {
            // [!code highlight:2]
            "@tailwindcss/postcss": {}
          }
        }
      `,
    },
  },
  {
    title: "Importa Tailwind CSS",
    body: (
      <p>
        Añade un <code>@import</code> a <code>./src/styles.css</code> que importe Tailwind CSS.
      </p>
    ),
    code: {
      name: "styles.css",
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
        Ejecuta tu proceso de build con <code>ng serve</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        ng serve
      `,
    },
  },
  {
    title: "Comienza a usar Tailwind en tu proyecto",
    body: <p>Comienza a usar las clases de utilidad de Tailwind para estilizar tu contenido.</p>,
    code: {
      name: "app.component.html",
      lang: "html",
      code: html`
        <!-- [!code highlight:4] -->
        <h1 class="text-3xl font-bold underline">
          <!-- prettier-ignore -->
          Hello world!
        </h1>
      `,
    },
  },
];
