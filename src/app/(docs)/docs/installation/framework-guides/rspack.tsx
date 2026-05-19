import { css, html, js, Page, shell, Step, Tab, Tile } from "./utils";
import Logo from "@/docs/img/guides/rspack.react.svg";

export const tile: Tile = {
  title: "Rspack",
  description: "Un empaquetador web rápido basado en Rust.",
  Logo,
};

export const page: Page = {
  title: "Instalar Tailwind CSS con Rspack",
  description: "Configuración de Tailwind CSS en un proyecto Rspack.",
};

export const tabs: Tab[] = [
  {
    slug: "react",
    title: "Usando React",
  },
  {
    slug: "vue",
    title: "Usando Vue",
  },
];

export const steps: Step[] = [
  {
    title: "Crear tu proyecto",
    body: (
      <p>
        Comienza creando un nuevo proyecto Rspack si aún no tienes uno configurado. El enfoque más común es utilizar{" "}
        <a href="https://rspack.dev/guide/start/quick-start#using-the-rspack-cli">la CLI de Rspack</a>.
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
    title: "Instalar Tailwind CSS",
    body: (
      <p>
        Instala <code>@tailwindcss/postcss</code> y sus dependencias directas.
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
    tabs: ["react"],
    title: "Importar Tailwind CSS",
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
    title: "Importar Tailwind CSS",
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
    title: "Iniciar tu proceso de compilación",
    body: (
      <p>
        Ejecuta tu proceso de compilación con <code>npm run dev</code>.
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
    title: "Comenzar a usar Tailwind en tu proyecto",
    body: <p>Comienza a usar las clases de utilidad de Tailwind para dar estilo a tu contenido.</p>,
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
    title: "Comenzar a usar Tailwind en tu proyecto",
    body: <p>Comienza a usar las clases de utilidad de Tailwind para dar estilo a tu contenido.</p>,
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
//           <p>Start using Tailwind’s utility classes to style your content.</p>
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
