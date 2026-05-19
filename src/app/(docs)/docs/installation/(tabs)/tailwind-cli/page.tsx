import dedent from "dedent";
import Link from "next/link";
import { Metadata } from "next";
import { type Step, Steps } from "@/components/installation-steps";

export const metadata: Metadata = {
  title: "Tailwind CLI",
  description:
    "La forma más sencilla y rápida de empezar a utilizar Tailwind CSS desde cero es con la herramienta Tailwind CLI.",
  openGraph: {
    type: "article",
    title: "Tailwind CLI",
    description: "La forma más sencilla y rápida de empezar a utilizar Tailwind CSS desde cero.",
    images: "https://tailwindcss.com/api/og?path=/docs/installation/tailwind-cli",
    url: "https://tailwindcss.com/docs/installation/tailwind-cli",
  },
};

const steps: Step[] = [
  {
    title: "Instalar Tailwind CSS",
    body: (
      <p>
        Instala <code>tailwindcss</code> y <code>@tailwindcss/cli</code> a través de npm.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: "npm install tailwindcss @tailwindcss/cli",
    },
  },
  {
    title: "Importar Tailwind en tu CSS",
    body: (
      <p>
        Añade la importación <code>@import "tailwindcss";</code> a tu archivo CSS principal.
      </p>
    ),
    code: {
      name: "src/input.css",
      lang: "css",
      code: '@import "tailwindcss";',
    },
  },
  {
    title: "Iniciar el proceso de compilación de Tailwind CLI",
    body: <p>Ejecuta la herramienta CLI para escanear tus archivos de origen en busca de clases y compilar tu CSS.</p>,
    code: {
      name: "Terminal",
      lang: "shell",
      code: "npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch",
    },
  },
  {
    title: "Comenzar a usar Tailwind en tu HTML",
    body: (
      <p>
        Añade tu archivo CSS compilado al <code>{"<head>"}</code> y comienza a usar las clases de utilidad de Tailwind
        para dar estilo a tu contenido.
      </p>
    ),
    code: {
      name: "src/index.html",
      lang: "html",
      code: dedent`
        <!doctype html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <!-- [!code highlight:2] -->
          <link href="./output.css" rel="stylesheet">
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
        <h3 className="sr-only" data-title="true">
          Instalación de Tailwind CLI
        </h3>
        <p>
          La forma más sencilla y rápida de empezar a utilizar Tailwind CSS desde cero es con la herramienta Tailwind
          CLI. La CLI también está disponible como un{" "}
          <Link href="https://github.com/tailwindlabs/tailwindcss/releases/latest">ejecutable independiente</Link> si
          deseas utilizarla sin instalar Node.js.
        </p>
      </div>
      <Steps steps={steps} />
    </>
  );
}
