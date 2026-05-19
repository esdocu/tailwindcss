import { Cta } from "@/components/cta";
import { type Step, Steps } from "@/components/installation-steps";
import dedent from "dedent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instalando Tailwind CSS con PostCSS",
  description:
    "Instalar Tailwind CSS como un plugin de PostCSS es la forma más fluida de integrarlo con frameworks como Next.js y Angular.",
  openGraph: {
    type: "article",
    title: "Instalando con PostCSS",
    description: "Integra Tailwind CSS con frameworks como Next.js y Angular.",
    images: "https://tailwindcss.com/api/og?path=/docs/installation/using-postcss",
    url: "https://tailwindcss.com/docs/installation/using-postcss",
  },
};

const steps: Step[] = [
  {
    title: "Instala Tailwind CSS",
    body: (
      <p>
        Instala <code>tailwindcss</code>, <code>@tailwindcss/postcss</code>, y <code>postcss</code> vía npm.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: dedent`
        npm install tailwindcss @tailwindcss/postcss postcss
      `,
    },
  },
  {
    title: "Agrega Tailwind a tu configuración de PostCSS",
    body: (
      <p>
        Agrega <code>@tailwindcss/postcss</code> a tu archivo <code>postcss.config.mjs</code>, o donde sea que
        PostCSS esté configurado en tu proyecto.
      </p>
    ),
    code: {
      name: "postcss.config.mjs",
      lang: "js",
      code: dedent`
        export default {
          plugins: {
            // [!code highlight:2]
            "@tailwindcss/postcss": {},
          }
        }
      `,
    },
  },
  {
    title: "Importa Tailwind CSS",
    body: (
      <p>
        Agrega un <code>@import</code> a tu archivo CSS que importe Tailwind CSS.
      </p>
    ),
    code: {
      name: "CSS",
      lang: "css",
      code: dedent`
        @import "tailwindcss";
      `,
    },
  },
  {
    title: "Inicia tu proceso de compilación",
    body: (
      <p>
        Ejecuta tu proceso de compilación con <code>npm run dev</code> o cualquier comando que esté configurado en tu
        archivo <code>package.json</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: dedent`
        npm run dev
      `,
    },
  },
  {
    title: "Empieza a usar Tailwind en tu HTML",
    body: (
      <p>
        Asegúrate de que tu CSS compilado esté incluido en el <code>{"<head>"}</code>{" "}
        <em>(tu framework podría manejar esto por ti)</em>, luego comienza a usar las clases de utilidad de Tailwind
        para estilizar tu contenido.
      </p>
    ),
    code: {
      name: "HTML",
      lang: "html",
      code: dedent`
        <!doctype html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <!-- [!code highlight:2] -->
          <link href="/dist/styles.css" rel="stylesheet">
        </head>
        <body>
          <!-- [!code highlight:4] -->
          <h1 class="text-3xl font-bold underline">
            Hello world!
          </h1>
        </body>
        </html>
      `,
    },
  },
];

export default function Page() {
  return (
    <>
      <div id="content-wrapper" className="prose relative z-10 mb-10 max-w-3xl" data-content="true">
        <h3 data-title="true" className="sr-only">
          Instalando Tailwind CSS como un plugin de PostCSS
        </h3>
        <p>
          Instalar Tailwind CSS como un plugin de PostCSS es la forma más fluida de integrarlo con frameworks como
          Next.js y Angular.
        </p>
      </div>
      <Steps steps={steps} />
      <div className="my-4 md:my-16">
        <Cta label="Explora nuestras guías de frameworks" href="/docs/installation/framework-guides">
          <strong className="font-semibold text-gray-950 dark:text-white">¿Estás atascado?</strong> Configurar
          Tailwind con PostCSS puede ser un poco diferente entre distintas herramientas de compilación. Revisa nuestras
          guías de frameworks para ver si tenemos instrucciones más específicas para tu configuración particular.
        </Cta>
      </div>
    </>
  );
}
