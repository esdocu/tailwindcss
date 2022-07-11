import NextLink from 'next/link'
import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { InstallationLayout } from '@/layouts/InstallationLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Añade el script Play CDN a tu HTML',
    body: () => (
      <p>
        Agrega el script Play CDN al <code>&lt;head&gt;</code> de tu archivo HTML y comienza a
        usar las clases de utilidad de Tailwind para diseñar tu contenido.
      </p>
    ),
    code: {
      name: 'index.html',
      lang: 'html',
      code: `  <!doctype html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
>   <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
>   <h1 class="text-3xl font-bold underline">
>     Hello world!
>   </h1>
  </body>
  </html>`,
    },
  },
  {
    title: 'Prueba personalizar tu configuración',
    body: () => (
      <p>
        Edita el objeto <code>tailwind.config</code> para{' '}
        <NextLink href="/docs/configuration">
          <a>personaliza tu configuración</a>
        </NextLink>{' '}
        con tus propios tokens de diseño.
      </p>
    ),
    code: {
      name: 'index.html',
      lang: 'html',
      code: `  <!doctype html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
>   <script>
>     tailwind.config = {
>       theme: {
>         extend: {
>           colors: {
>             clifford: '#da373d',
>           }
>         }
>       }
>     }
>   </script>
  </head>
  <body>
    <h1 class="text-3xl font-bold underline **text-clifford**">
      Hello world!
    </h1>
  </body>
  </html>`,
    },
  },
  {
    title: 'Prueba agregar algo de CSS personalizado',
    body: () => (
      <p>
        Utiliza <code>type="text/tailwindcss"</code> para agregar CSS personalizado que 
        admita todas las funciones de CSS de Tailwind.
      </p>
    ),
    code: {
      name: 'index.html',
      lang: 'html',
      code: `  <!doctype html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
>   <style type="text/tailwindcss">
>     @layer utilities {
>       .content-auto {
>         content-visibility: auto;
>       }
>     }
>   </style>
  </head>
  <body>
>   <div class="lg:content-auto">
      <!-- ... -->
    </div>
  </body>
  </html>`,
    },
  },
  {
    title: 'Prueba trabajar con un complemento del core',
    body: () => (
      <p>
        Habilita core plugins, como formularios y tipografía, mediante el 
        parámetro de consulta <code>plugins</code>.
      </p>
    ),
    code: {
      name: 'index.html',
      lang: 'html',
      code: `  <!doctype html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
>   <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>
  </head>
  <body>
>   <div class="prose">
      <!-- ... -->
    </div>
  </body>
  </html>`,
    },
  },
]

export default function PlayCdn({ code }) {
  return (
    <InstallationLayout>
      <div
        id="content-wrapper"
        className="relative z-10 prose prose-slate mb-16 max-w-3xl dark:prose-dark"
      >
        <h3 className="sr-only">Play CDN</h3>
        <p>
          Usa Play CDN para probar Tailwind directamente en el navegador sin ningún paso de
          compilación. Play CDN está diseñado solo para fines de desarrollo y no es la mejor
          opción para producción.
        </p>
      </div>
      <Steps level={4} steps={steps} code={code} />
    </InstallationLayout>
  )
}

export function getStaticProps() {
  let { highlightCode } = require('../../../../remark/utils')

  return {
    props: {
      code: steps.map(({ code }) => {
        let isArray = Array.isArray(code)
        code = isArray ? code : [code]
        code = code.map((code) => {
          if (code.lang && code.lang !== 'terminal') {
            return highlightCode(code.code, code.lang)
          }
          return code.code
        })
        return isArray ? code : code[0]
      }),
    },
  }
}

PlayCdn.layoutProps = {
  meta: {
    title: 'Instalación: Play CDN',
    section: 'Empezando',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
