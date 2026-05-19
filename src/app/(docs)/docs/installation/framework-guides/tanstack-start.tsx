import { css, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/tanstack.react.svg";
import LogoDark from "@/docs/img/guides/tanstack-white.react.svg";

export const tile: Tile = {
  title: "TanStack Start",
  description: "Framework full-stack impulsado por TanStack Router para React y Solid.",
  Logo,
  LogoDark,
};

export const page: Page = {
  title: "Instalar Tailwind CSS con TanStack Start",
  description: "Configuración de Tailwind CSS en un proyecto TanStack Start.",
};

export const steps: Step[] = [
  {
    title: "Crear tu proyecto",
    body: (
      <p>
        Comienza creando un nuevo proyecto TanStack Start si aún no tienes uno configurado. El enfoque más común es
        utilizar <a href="https://tanstack.com/start/latest/docs/framework/react/overview">Create Start App</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npx create-start-app@latest my-project
        cd my-project
      `,
    },
  },
  {
    title: "Instalar Tailwind CSS",
    body: (
      <p>
        Instala <code>@tailwindcss/vite</code> y sus dependencias directas a través de npm.
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
    title: "Configurar el plugin de Vite",
    body: (
      <p>
        Añade el plugin <code>@tailwindcss/vite</code> a tu configuración de Vite.
      </p>
    ),
    code: {
      name: "vite.config.ts",
      lang: "ts",
      code: js`
        import { tanstackStart } from '@tanstack/react-start/plugin/vite';
        import { defineConfig } from 'vite';
        import tsConfigPaths from 'vite-tsconfig-paths';
        // [!code highlight:2]
        import tailwindcss from '@tailwindcss/vite'

        export default defineConfig({
          plugins: [
            // [!code highlight:2]
            tailwindcss()
            tanstackStart(),
            tsConfigPaths(),
          ]
        });
      `,
    },
  },
  {
    title: "Importar Tailwind CSS",
    body: (
      <p>
        Añade un <code>@import</code> a <code>./src/styles.css</code> que importe Tailwind CSS.
      </p>
    ),
    code: {
      name: "src/styles.css",
      lang: "css",
      code: css`
        @import "tailwindcss";
      `,
    },
  },
  {
    title: "Importar el archivo CSS en tu ruta raíz",
    body: (
      <p>
        Importa el archivo CSS en tu archivo <code>__root.tsx</code> con la consulta <code>?url</code>.
      </p>
    ),
    code: {
      name: "src/routes/__root.tsx",
      lang: "tsx",
      code: js`
        // other imports...

        // [!code highlight:2]
        import appCss from '../styles.css?url'

        export const Route = createRootRoute({
          head: () => ({
            meta: [
              // your meta tags and site config
            ],
            // [!code highlight:2]
            links: [{ rel: 'stylesheet', href: appCss }],
            // other head config
          }),
          component: RootComponent,
        })
      `,
    },
  },
  {
    title: "Comenzar a usar Tailwind en tu proyecto",
    body: <p>Comienza a usar las clases de utilidad de Tailwind para dar estilo a tu contenido.</p>,
    code: {
      name: "src/routes/index.tsx",
      lang: "tsx",
      code: js`
        import { createFileRoute } from '@tanstack/react-router'

        export const Route = createFileRoute('/')({
          component: App,
        })

        function App() {
          return (
            // [!code highlight:4]
            <h1 class="text-3xl font-bold underline">
              Hello World!
            </h1>
          )
        }
      `,
    },
  },
];
