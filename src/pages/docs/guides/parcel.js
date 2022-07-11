import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Crea tu proyecto',
    body: () => (
      <p>
        Comienza por crear un nuevo proyecto Parcel si aún no tienes uno configurado. El enfoque más
        común es agregar Parcel como una dependencia de desarrollo a tu proyecto como se describe en tu{' '}
        <a href="https://parceljs.org/getting-started/webapp/">guía de inicio</ a>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'mkdir my-project\ncd my-project\nnpm init -y\nnpm install -D parcel\nmkdir src\ntouch src/index.html',
    },
  },
  {
    title: 'Instala Tailwind CSS',
    body: () => (
      <p>
        Instala <code>tailwindcss</code> y sus dependencias de pares a través de npm, y luego ejecuta
        el comando init para generar tanto <code>tailwind.config.js</code> como <code>postcss.config.js</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm install -D tailwindcss postcss\nnpx tailwindcss init',
    },
  },
  {
    title: 'Configura PostCSS',
    body: () => (
      <p>
        Crea un archivo <code>.postcssrc</code> en la raíz de tu proyecto y habilita el complemento <code>tailwindcss</code>.
      </p>
    ),
    code: {
      name: '.postcssrc',
      lang: 'json',
      code: `{
  "plugins": {
    "tailwindcss": {}
  }
}`
    }
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
>   content: [
>     "./src/**/*.{html,js,ts,jsx,tsx}",
>   ],
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
        Crea un archivo <code>./src/index.css</code> y agrega las directivas <code>@tailwind</code> para 
        cada una de las capas de Tailwind.
      </p>
    ),
    code: {
      name: 'index.css',
      lang: 'css',
      code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
    },
  },
  {
    title: 'Comienza tu proceso de compilación',
    body: () => (
      <p>
        Ejecuta tu proceso de compilación con <code>npx parcel src/index.html</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npx parcel src/index.html',
    },
  },
  {
    title: 'Comienza a usar Tailwind en tu proyecto',
    body: () => (<p>
      Agrega tu archivo CSS a <code>{'<head>'}</code> y comienza a usar las clases de 
      utilidad de Tailwind para diseñar tu contenido.
    </p>),
    code: {
      name: 'index.html',
      lang: 'html',
      code: `  <!doctype html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
>   <link href="./index.css" rel="stylesheet">
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

export default function UsingParcel({ code }) {
  return (
    <FrameworkGuideLayout
      title="Instala Tailwind CSS con Parcel"
      description="Configuración de Tailwind CSS en un proyecto Parcel."
    >
      <Steps steps={steps} code={code} />
    </FrameworkGuideLayout>
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

UsingParcel.layoutProps = {
  meta: {
    title: 'Instala Tailwind CSS con Parcel',
    section: 'Instalación',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
