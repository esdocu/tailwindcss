import { css, js, shell, Page, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/nextjs.react.svg";
import LogoDark from "@/docs/img/guides/nextjs-white.react.svg";

export let tile: Tile = {
  title: "Next.js",
  description: "Framework React con todas las funciones y gran experiencia de desarrollo.",
  Logo,
  LogoDark,
};

export let page: Page = {
  title: "Instalar Tailwind CSS con Next.js",
  description: "Configurando Tailwind CSS en un proyecto Next.js.",
};

export let steps: Step[] = [
  {
    title: "Crea tu proyecto",
    body: (
      <p>
        Comienza creando un nuevo proyecto Next.js si aún no tienes uno configurado. El enfoque más común es usar{" "}
        <a href="https://nextjs.org/docs/api-reference/create-next-app">Create Next App</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npx create-next-app@latest my-project --typescript --eslint --app
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
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm install tailwindcss @tailwindcss/postcss postcss
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
        const config = {
          plugins: {
            // [!code highlight:2]
            "@tailwindcss/postcss": {},
          },
        };

        export default config;
      `,
    },
  },
  {
    title: "Importa Tailwind CSS",
    body: (
      <p>
        Añade un <code>@import</code> a <code>./src/app/globals.css</code> que importe Tailwind CSS.
      </p>
    ),
    code: {
      name: "globals.css",
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
      name: "page.tsx",
      lang: "jsx",
      code: js`
        export default function Home() {
          return (
            // [!code highlight:4]
            <h1 className="text-3xl font-bold underline">
              Hello world!
            </h1>
          )
        }
      `,
    },
  },
];
