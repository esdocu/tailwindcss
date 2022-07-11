import Link from 'next/link'
import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Crea tu proyecto',
    body: () => (
      <p>
        Comienza creando un nuevo proyecto de React con {' '}
        <a href="https://create-react-app.dev/docs/getting-started">Create React App v5.0+</a> si
        no tienes uno ya configurado.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npx create-react-app my-project\ncd my-project',
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
      code: 'npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p',
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
>     "./src/**/*.{js,jsx,ts,tsx}",
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
        Agrega las directivas <code>@tailwind</code> para cada una de las capas de Tailwind a tu archivo{' '}
        <code>./src/index.css</code>.
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
        Ejecuta tu proceso de compilación con <code>npm run start</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm run start',
    },
  },
  {
    title: 'Comienza a usar Tailwind en tu proyecto',
    body: () => <p>Comienza a usar las clases de utilidad de Tailwind para diseñar tu contenido.</p>,
    code: {
      name: 'App.js',
      lang: 'jsx',
      code: `  export default function App() {
    return (
>     <h1 className="text-3xl font-bold underline">
>       Hello world!
>     </h1>
    )
  }`,
    },
  },
]

export default function UsingCRA({ code }) {
  return (
    <FrameworkGuideLayout
      title="Instala Tailwind CSS con Create React App"
      description="Configuración de Tailwind CSS en un proyecto Create React App."
    >
      <div className="relative z-10 prose prose-slate mb-16 max-w-3xl dark:prose-dark">
        <p>
          Ten en cuenta que para los nuevos proyectos de React, recomendamos encarecidamente utilizar{' '}
          <Link href="https://vitejs.dev">
            <a>Vite</a>
          </Link>
          ,{' '}
          <Link href="https://nextjs.org">
            <a>Next.js</a>
          </Link>
          ,{' '}
          <Link href="https://remix.run">
            <a>Remix</a>
          </Link>
          , o{' '}
          <Link href="https://parceljs.org">
            <a>Parcel</a>
          </Link>{' '}
          en lugar de Create React App. Brindan una experiencia de desarrollador equivalente o mejor, 
          pero con más flexibilidad, lo que te brinda más control sobre cómo se configuran Tailwind y PostCSS.
        </p>
      </div>
      <Steps steps={steps} code={code} />
    </FrameworkGuideLayout>
  )
}

export function getStaticProps() {
  let { highlightCode } = require('../../../../remark/utils')

  return {
    props: {
      code: steps.map(({ code }) => {
        if (code.lang && code.lang !== 'terminal') {
          return highlightCode(code.code, code.lang)
        }
        return code.code
      }),
    },
  }
}

UsingCRA.layoutProps = {
  meta: {
    title: 'Instala Tailwind CSS con Create React App',
    section: 'Instalación',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
