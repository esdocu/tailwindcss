import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { InstallationLayout } from '@/layouts/InstallationLayout'
import { Cta } from '@/components/Cta'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Instala Tailwind CSS',
    body: () => (
      <p>
        Instala <code>tailwindcss</code> y sus dependencias de pares a través de npm y crea 
        tu archivo <code>tailwind.config.js</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init',
    },
  },
  {
    title: 'Agrega Tailwind a tu configuración de PostCSS',
    body: () => (
      <p>
        Agrega <code>tailwindcss</code> y <code>autoprefixer</code> a tu archivo 
        <code>postcss.config.js</code>, o donde esté configurado PostCSS en tu proyecto.
      </p>
    ),
    code: {
      name: 'postcss.config.js',
      lang: 'js',
      code: `  module.exports = {
    plugins: {
>     tailwindcss: {},
>     autoprefixer: {},
    }
  }`,
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
    title: 'Agrega las directivas Tailwind a tu CSS',
    body: () => (
      <p>
       Agrega las directivas <code>@tailwind</code> para cada una de las capas de Tailwind a tu 
       archivo CSS principal.
      </p>
    ),
    code: {
      name: 'main.css',
      lang: 'css',
      code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
    },
  },
  {
    title: 'Inicia tu proceso build',
    body: () => (
      <p>
        Ejecuta tu proceso de compilación con <code>npm run dev</code> o cualquier comando que esté 
        configurado en tu archivo <code>package.json</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm run dev',
    },
  },
  {
    title: 'Comienza a usar Tailwind en tu HTML',
    body: () => (
      <p>
        Asegúrate de que tu CSS compilado esté incluido en el <code>{'<head>'}</code> 
        <em>(tu framework podría manejar esto por tí)</em>, luego comienza a usar las clases de 
        utilidad de Tailwind para diseñar tu contenido .
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
    <link href="/dist/main.css" rel="stylesheet">
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

export default function UsingPostCss({ code }) {
  return (
    <InstallationLayout>
      <div
        id="content-wrapper"
        className="relative z-10 prose prose-slate mb-16 max-w-3xl dark:prose-dark"
      >
        <h3 className="sr-only">Instalación de Tailwind CSS como complemento de PostCSS</h3>
        <p>
          Instalar Tailwind CSS como complemento de PostCSS es la forma más sencilla de integrarlo 
          con herramientas de compilación como webpack, Rollup, Vite y Parcel.
        </p>
      </div>
      <Steps level={4} steps={steps} code={code} />
      <Cta
        label="Explora nuestras Guías para Frameworks"
        href="/docs/installation/framework-guides"
        description={
          <>
            <strong className="text-slate-900 font-semibold dark:text-slate-200">
              ¿Estás estancado?
            </strong>{' '}
            Configurar Tailwind con PostCSS puede ser un poco diferente en diferentes herramientas de compilación.
            Consulta nuestras guías de framework para ver si tenemos instrucciones más específicas para tu 
            configuración particular.
          </>
        }
      />
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

UsingPostCss.layoutProps = {
  meta: {
    title: 'Instalación: Usando PostCSS',
    section: 'Empezando',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
