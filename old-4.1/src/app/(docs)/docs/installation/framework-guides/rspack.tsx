import { css, html, js, Page, shell, Step, Tab, Tile } from "./utils";
import Logo from "@/docs/img/guides/rspack.react.svg";

export let tile: Tile = {
  title: "Rspack",
  description: "Un bundler web rápido basado en Rust.",
  Logo,
};

export let page: Page = {
  title: "Instalar Tailwind CSS con Rspack",
  description: "Configurando Tailwind CSS en un proyecto Rspack.",
};

export let tabs: Tab[] = [
  {
    slug: "react",
    title: "Usando React",
  },
  {
    slug: "vue",
    title: "Usando Vue",
  },
];

export let steps: Step[] = [
  {
    title: "Crea tu proyecto",
    body: (
      <p>
        Comienza creando un nuevo proyecto Rspack si aún no tienes uno configurado. El enfoque más común es usar{" "}
        <a href="https://rspack.dev/guide/start/quick-start#using-the-rspack-cli">Rspack CLI</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm create rspack@latest
      `,
    },
  },

  {
    title: "Instala Tailwind CSS",
    body: (
      <p>
        Instala <code>@tailwindcss/postcss</code> y sus dependencias peer.
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
        En tu archivo <code>rspack.config.js</code>, habilita el cargador de PostCSS. Consulta{" "}
        <a href="https://rspack.dev/guide/tech/css#tailwind-css">la documentación</a> para obtener más información.
      </p>
    ),
    code: {
      name: "rspack.config.ts",
      lang: "ts",
      code: js`
        export default defineConfig({
          // ...
          module: {
            rules: [
              // [!code highlight:6]
              {
                test: /\.css$/,
                use: ["postcss-loader"],
                type: "css",
              },
              // ...
            ],
          },
        }
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
    tabs: ["react"],
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
    tabs: ["vue"],
    title: "Importa Tailwind CSS",
    body: (
      <p>
        Añade un <code>@import</code> a <code>./src/style.css</code> que importe Tailwind CSS.
      </p>
    ),
    code: {
      name: "style.css",
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
    tabs: ["react"],
    title: "Comienza a usar Tailwind en tu proyecto",
    body: <p>Comienza a usar las clases de utilidad de Tailwind para estilizar tu contenido.</p>,
    code: {
      name: "App.jsx",
      lang: "jsx",
      code: js`
        export default function App() {
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
  {
    tabs: ["vue"],
    title: "Comienza a usar Tailwind en tu proyecto",
    body: <p>Comienza a usar las clases de utilidad de Tailwind para estilizar tu contenido.</p>,
    code: {
      name: "App.vue",
      lang: "vue",
      code: html`
        <template>
          <!-- [!code highlight:4] -->
          <h1 class="text-3xl font-bold underline">
            <!-- prettier-ignore -->
            Hello world!
          </h1>
        </template>
      `,
    },
  },
];

// let tabs = [
//       {
//   {
//     name: "Using Vue",
//     href: "#vue",
//     steps: [
//       {
//         title: "Start your build process",
//         body: (
//           <p>
//             Run your build process with <code>npm run dev</code>.
//           </p>
//         ),
//         code: {
//           name: "Terminal",
//           lang: "shell",
//           code: "npm run dev",
//         },
//       },
//       {
//         title: "Start using Tailwind in your project",
//         body: (
//           <p>Start using Tailwind's utility classes to style your content.</p>
//         ),
//         code: {
//           name: "App.vue",
//           lang: "html",
//           code: `  <template>
// >   <h1 class="text-3xl font-bold underline">
// >     Hello world!
// >   </h1>
//   </template>`,
//         },
//       },
//     ],
//   },
// ];
