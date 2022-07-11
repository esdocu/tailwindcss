import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { InstallationLayout } from '@/layouts/InstallationLayout'
// import { Cta } from '@/components/Cta'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Instalar Tailwind CSS',
    body: () => (
      <p>
        Instala <code>tailwindcss</code> vía npm, y crea tu archivo <code>tailwind.config.js</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm install -D tailwindcss\nnpx tailwindcss init',
    },
  },
  {
    title: 'Configura tus rutas de plantilla',
    body: () => (
      <p>
        Agrega las rutas a todos tus archivos de plantilla en tu archivo <code>tailwind.config.js</code>.
      </p>
    ),
    code: {
      name: 'tailwind.config.js',
      lang: 'js',
      code: `  module.exports = {
>   content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }`,
    },
  },
  {
    title: 'Agrega las directivas de Tailwind a tu CSS',
    body: () => (
      <p>
        Agrega las directivas <code>@tailwind</code> para cada una de las capas de Tailwind a tu 
        archivo CSS principal.
      </p>
    ),
    code: {
      name: 'src/input.css',
      lang: 'css',
      code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
    },
  },
  {
    title: 'Inicia el proceso de compilación de la CLI de Tailwind',
    body: () => <p>Ejecuta la herramienta CLI para escanear tus archivos de plantilla en busca de clases y crea tu CSS.</p>,
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch',
    },
  },
  {
    title: 'Comienza a usar Tailwind en tu HTML',
    body: () => (
      <p>
        Agrega tu archivo CSS compilado a <code>{'<head>'}</code> y comienza a usar las clases de 
        utilidad de Tailwind para diseñar tu contenido.
      </p>
    ),
    code: {
      name: 'src/index.html',
      lang: 'html',
      code: `  <!doctype html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
>   <link href="/dist/output.css" rel="stylesheet">
  </head>
  <body>
>   <h1 class="text-3xl font-bold underline">
>     Hello world!
>   </h1>
  </body>
  </html>`,
    },
  },
]

export default function TailwindCli({ code }) {
  return (
    <InstallationLayout>
      <div
        id="content-wrapper"
        className="relative z-10 prose prose-slate mb-16 max-w-3xl dark:prose-dark"
      >
        <h3 className="sr-only">Instalar Tailwind CLI</h3>
        <p>
          La forma más sencilla y rápida de poner en marcha Tailwind CSS desde cero es con la 
          herramienta Tailwind CLI.
        </p>
      </div>
      <Steps level={4} steps={steps} code={code} />
      {/*
        <Cta
          label="Read the documentation"
          href="/docs/tailwind-cli"
          description={
            <>
              <strong className="text-slate-900 font-semibold">
                This is only the beginning of what’s possible with the Tailwind CLI.
              </strong>{' '}
              To learn more about everything it can do, check out the Tailwind CLI documentation.
            </>
          }
        />
      */}
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

TailwindCli.layoutProps = {
  meta: {
    title: 'Instalación: Tailwind CLI',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
