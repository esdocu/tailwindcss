import { css, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/meteor.react.svg";

export const tile: Tile = {
  title: "Meteor",
  description: "El framework de JavaScript full-stack para desarrollar aplicaciones multiplataforma.",
  Logo,
};

export const page: Page = {
  title: "Instalar Tailwind CSS con Meteor",
  description: "Configuración de Tailwind CSS en un proyecto Meteor.",
};

export const steps: Step[] = [
  {
    title: "Crear tu proyecto",
    body: (
      <p>
        Comienza creando un nuevo proyecto Meteor si aún no tienes uno configurado. El enfoque más común es utilizar{" "}
        <a href="https://docs.meteor.com/about/install.html">la CLI de Meteor</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npx meteor create my-project
        cd my-project
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
        npm install tailwindcss @tailwindcss/postcss postcss postcss-load-config
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
        Añade un <code>@import</code> para Tailwind CSS a tu archivo <code>./client/main.css</code>.
      </p>
    ),
    code: {
      name: "main.css",
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
        Ejecuta tu proceso de compilación con <code>npm run start</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm run start
      `,
    },
  },
  {
    title: "Comenzar a usar Tailwind en tu proyecto",
    body: <p>Comienza a usar las clases de utilidad de Tailwind para dar estilo a tu contenido.</p>,
    code: {
      name: "App.jsx",
      lang: "jsx",
      code: js`
        export const App = () => (
          // [!code highlight:4]
          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>
        )
      `,
    },
  },
];
