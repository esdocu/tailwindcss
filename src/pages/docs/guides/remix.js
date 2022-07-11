import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Crea tu proyecto',
    body: () => (
      <p>
        Comienza creando un nuevo proyecto Remix si aún no tienes uno configurado. El enfoque más común es 
        usar <a href="https://remix.run/docs/en/v1">Crear Remix</a>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npx create-remix@latest my-project\ncd my-project',
    },
  },
  {
    title: 'Instala Tailwind CSS',
    body: () => (
      <p>
        Instala <code>tailwindcss</code>, sus dependencias de pares y <code>concurrently</code> a través de npm, y luego 
        ejecuta el comando init para generar el archivo <code>tailwind.config.js</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm install -D tailwindcss postcss autoprefixer concurrently\nnpx tailwindcss init',
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
>   content: [
>     "./app/**/*.{js,ts,jsx,tsx}",
>   ],
    theme: {
      extend: {},
    },
    plugins: [],
  }`,
    },
  },
  {
    title: 'Actualiza tus scripts package.json',
    body: () => (
      <p>
        Actualiza los scripts en tu archivo <code>package.json</code> para crear tu CSS de desarrollo y producción.
      </p>
    ),
    code: {
      name: 'package.json',
      lang: 'json5',
      code: `  {
    "scripts": {
>     "build": "npm run build:css && remix build",
>     "build:css": "tailwindcss -m -i ./styles/app.css -o app/styles/app.css",
>     "dev": "concurrently \\\"npm run dev:css\\\" \\\"remix dev\\\"",
>     "dev:css": "tailwindcss -w -i ./styles/app.css -o app/styles/app.css",
    }
  }`,
    },
  },
  {
    title: 'Agrega las directivas Tailwind a tu CSS',
    body: () => (
      <p>
        Crea un archivo <code>./styles/app.css</code> y agrega las directivas <code>@tailwind</code> para 
        cada una de las capas de Tailwind.
      </p>
    ),
    code: {
      name: 'app.css',
      lang: 'css',
      code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
    },
  },
  {
    title: 'Importa el archivo CSS',
    body: () => (
      <p>
        Importa el archivo <code>./app/styles/app.css</code> compilado en tu archivo <code>./app/root.jsx</code>.
      </p>
    ),
    code: {
      name: 'root.jsx',
      lang: 'js',
      code: `import styles from "./styles/app.css"

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}`,
    },
  },
  {
    title: 'Comienza tu proceso de compilación',
    body: () => (
      <p>
        Ejecuta tu proceso de compilación con <code>npm run dev</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm run dev',
    },
  },
  {
    title: 'Comienza a usar Tailwind en tu proyecto',
    body: () => <p>Comienza a usar las clases de utilidad de Tailwind para diseñar tu contenido.</p>,
    code: {
      name: 'index.jsx',
      lang: 'jsx',
      code: `  export default function Index() {
    return (
>     <h1 className="text-3xl font-bold underline">
>       Hello world!
>     </h1>
    )
  }`,
    },
  },
]

export default function UsingRemix({ code }) {
  return (
    <FrameworkGuideLayout
      title="Instala Tailwind CSS con Remix"
      description="Configuración de Tailwind CSS en un proyecto Remix."
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

UsingRemix.layoutProps = {
  meta: {
    title: 'Instala Tailwind CSS con Remix',
    section: 'Instalación',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
