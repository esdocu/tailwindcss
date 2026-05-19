import Link from "next/link";
import { Metadata } from "next";
import { Steps, type Step } from "@/components/installation-steps";
import dedent from "dedent";

export const metadata: Metadata = {
  title: "Play CDN",
  description: "Usa el Play CDN para probar Tailwind directamente en el navegador sin ningún paso de compilación.",
  openGraph: {
    type: "article",
    title: "Play CDN",
    description: "Prueba Tailwind CSS directamente en el navegador sin ningún paso de compilación.",
    images: "https://tailwindcss.com/api/og?path=/docs/installation/play-cdn",
    url: "https://tailwindcss.com/docs/installation/play-cdn",
  },
};

const steps: Step[] = [
  {
    title: "Agrega el script del Play CDN a tu HTML",
    body: (
      <p>
        Agrega la etiqueta del script del Play CDN al <code>&lt;head&gt;</code> de tu archivo HTML y comienza a usar
        las clases de utilidad de Tailwind para estilizar tu contenido.
      </p>
    ),
    code: {
      name: "index.html",
      lang: "html",
      code: dedent`
        <!doctype html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <!-- [!code highlight:2] -->
            <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
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
  {
    title: "Intenta agregar algo de CSS personalizado",
    body: (
      <p>
        Usa <code>type="text/tailwindcss"</code> para agregar CSS personalizado que soporte todas las características
        CSS de Tailwind.
      </p>
    ),
    code: {
      name: "index.html",
      lang: "html",
      code: dedent`
        <!doctype html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
            <!-- [!code highlight:6] -->
            <style type="text/tailwindcss">
              @theme {
                --color-clifford: #da373d;
              }
            </style>
          </head>
          <body>
            <!-- [!code word:text-clifford] -->
            <h1 class="text-3xl font-bold underline text-clifford">
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
          Usando Play CDN
        </h3>
        <p>
          Usa el Play CDN para probar Tailwind directamente en el navegador sin ningún paso de compilación. El Play CDN
          está diseñado solo para fines de desarrollo y no está pensado para producción.
        </p>
      </div>
      <Steps steps={steps} />
    </>
  );
}
