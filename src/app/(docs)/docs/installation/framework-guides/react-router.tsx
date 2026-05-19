import { css, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/react-router.react.svg";
import LogoDark from "@/docs/img/guides/react-router-white.react.svg";

export const tile: Tile = {
  title: "React Router",
  description: "Un enrutador centrado en los estándares que puedes desplegar en cualquier lugar.",
  Logo,
  LogoDark,
};

export const page: Page = {
  title: "Instalar Tailwind CSS con React Router",
  description: "Configuración de Tailwind CSS en un proyecto React Router.",
};

export const steps: Step[] = [
  {
    title: "Crear tu proyecto",
    body: (
      <p>
        Comienza creando un nuevo proyecto React Router si aún no tienes uno configurado. El enfoque más común es
        utilizar <a href="https://reactrouter.com/start/framework/installation">Create React Router</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npx create-react-router@latest my-project
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
        import { reactRouter } from "@react-router/dev/vite";
        import { defineConfig } from "vite";
        import tsconfigPaths from "vite-tsconfig-paths";
        // [!code highlight:2]
        import tailwindcss from "@tailwindcss/vite";

        export default defineConfig({
          plugins: [
            // [!code highlight:2]
            tailwindcss(),
            reactRouter(),
            tsconfigPaths(),
          ],
        });
      `,
    },
  },
  {
    title: "Importar Tailwind CSS",
    body: (
      <p>
        Añade un <code>@import</code> a <code>./app/app.css</code> que importe Tailwind CSS.
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
    title: "Comenzar a usar Tailwind en tu proyecto",
    body: <p>Comienza a usar las clases de utilidad de Tailwind para dar estilo a tu contenido.</p>,
    code: {
      name: "home.tsx",
      lang: "tsx",
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
