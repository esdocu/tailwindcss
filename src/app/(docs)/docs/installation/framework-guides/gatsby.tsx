import { css, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/gatsby.react.svg";

export const tile: Tile = {
  title: "Gatsby",
  description: "Framework para crear sitios estáticos con React y GraphQL.",
  Logo,
};

export const page: Page = {
  title: "Instalar Tailwind CSS con Gatsby",
  description: "Configuración de Tailwind CSS en un proyecto Gatsby.",
};

export const steps: Step[] = [
  {
    title: "Crear tu proyecto",
    body: (
      <p>
        Comienza creando un nuevo proyecto Gatsby si aún no tienes uno configurado. El enfoque más común es utilizar{" "}
        <a href="https://www.gatsbyjs.com/docs/reference/gatsby-cli/#how-to-use-gatsby-cli">Gatsby CLI</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        gatsby new my-project
        cd my-project
      `,
    },
  },
  {
    title: "Instalar Tailwind CSS",
    body: (
      <p>
        Usando npm, instala <code>@tailwindcss/postcss</code>, sus dependencias directas y{" "}
        <code>gatsby-plugin-postcss</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm install @tailwindcss/postcss tailwindcss postcss gatsby-plugin-postcss
      `,
    },
  },
  {
    title: "Habilitar el plugin PostCSS de Gatsby",
    body: (
      <p>
        En tu archivo <code>gatsby-config.js</code>, habilita <code>gatsby-plugin-postcss</code>. Consulta{" "}
        <a href="https://www.gatsbyjs.com/plugins/gatsby-plugin-postcss/">la documentación del plugin</a> para obtener
        más información.
      </p>
    ),
    code: {
      name: "gatsby-config.js",
      lang: "js",
      code: js`
        module.exports = {
          plugins: [
            // [!code highlight:2]
            'gatsby-plugin-postcss',
            // ...
          ],
        }
      `,
    },
  },
  {
    title: "Configurar los plugins de PostCSS",
    body: (
      <p>
        Crea un archivo <code>postcss.config.js</code> en la raíz de tu proyecto y añade el plugin{" "}
        <code>@tailwindcss/postcss</code> a tu configuración de PostCSS.
      </p>
    ),
    code: {
      name: "postcss.config.js",
      lang: "js",
      code: js`
        module.exports = {
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
        Crea un archivo <code>./src/styles/global.css</code> y añade un <code>@import</code> que importe Tailwind CSS.
      </p>
    ),
    code: {
      name: "global.css",
      lang: "css",
      code: css`
        @import "tailwindcss";
      `,
    },
  },
  {
    title: "Importar el archivo CSS",
    body: (
      <p>
        Crea un archivo <code>gatsby-browser.js</code> en la raíz de tu proyecto si aún no existe, e importa
        tu archivo <code>./src/styles/global.css</code> recién creado.
      </p>
    ),
    code: {
      name: "gatsby-browser.js",
      lang: "js",
      code: js`
        import './src/styles/global.css';
      `,
    },
  },
  {
    title: "Iniciar tu proceso de compilación",
    body: (
      <p>
        Ejecuta tu proceso de compilación con <code>gatsby develop</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        gatsby develop
      `,
    },
  },
  {
    title: "Comenzar a usar Tailwind en tu proyecto",
    body: <p>Comienza a usar las clases de utilidad de Tailwind para dar estilo a tu contenido.</p>,
    code: {
      name: "index.js",
      lang: "js",
      code: js`
        export default function IndexPage() {
          return (
            <Layout>
              /* [!code highlight:4] */
              <h1 className="text-3xl font-bold underline">
                Hello world!
              </h1>
            </Layout>
          )
        }
      `,
    },
  },
];
