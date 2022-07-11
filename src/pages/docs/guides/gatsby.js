import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
// import { Cta } from '@/components/Cta'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Crea tu proyecto',
    body: () => (
      <p>
        Comienza creando un nuevo proyecto de Gatsby si aún no tienes uno configurado. El enfoque
        más común es usar{' '}
        <a href="https://www.gatsbyjs.com/docs/reference/gatsby-cli/#how-to-use-gatsby-cli">
          CLI de Gatsby
        </a>
        .
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'gatsby new my-project\ncd my-project',
    },
  },
  {
    title: 'Instala Tailwind CSS',
    body: () => (
      <p>
        Usando npm, instala <code>tailwindcss</code> y sus dependencias de pares, así como {' '}
        <code>gatsby-plugin-postcss</code>, y luego ejecuta el comando init para generar ambos{' '}
        <code>tailwind.config.js</code> y <code>postcss.config.js</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm install -D tailwindcss postcss autoprefixer gatsby-plugin-postcss\nnpx tailwindcss init -p',
    },
  },
  {
    title: 'Habilita el complemento PostCSS de Gatsby',
    body: () => (
      <p>
        En tu archivo <code>gatsby-config.js</code>, habilita <code>gatsby-plugin-postcss</code>.
        Ver{' '}
        <a href="https://www.gatsbyjs.com/plugins/gatsby-plugin-postcss/">
          la documentación del complemento
        </a>{' '}
        para más información.
      </p>
    ),
    code: {
      name: 'gatsby-config.js',
      lang: 'js',
      code: `  module.exports = {
    plugins: [
>     'gatsby-plugin-postcss',
      // ...
    ],
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
        Crea un archivo <code>./src/styles/global.css</code> y agrega las directivas <code>@tailwind</code>{' '}
        para cada una de las capas de Tailwind.
      </p>
    ),
    code: {
      name: 'global.css',
      lang: 'css',
      code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
    },
  },
  {
    title: 'Importa el archivo CSS',
    body: () => (
      <p>
        Crea un archivo <code>gatsby-browser.js</code> en la raíz de tu proyecto si aún no existe, 
        e importa tu archivo recién creado <code>./src/styles/global.css</code>.
      </p>
    ),
    code: {
      name: 'gatsby-browser.js',
      lang: 'css',
      code: `> import './src/styles/global.css'`,
    },
  },
  {
    title: 'Comienza tu proceso de compilación',
    body: () => (
      <p>
        Ejecuta tu proceso de compilación con <code>gatsby develop</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'gatsby develop',
    },
  },
  {
    title: 'Comienza a usar Tailwind en tu proyecto',
    body: () => <p>Comienza a usar las clases de utilidad de Tailwind para diseñar tu contenido.</p>,
    code: {
      name: 'index.js',
      lang: 'jsx',
      code: `  export default function IndexPage() {
    return (
      <Layout>
>       <h1 className="text-3xl font-bold underline">
>         Hello world!
>       </h1>
      </Layout>
    )
  }`,
    },
  },
]

export default function UsingGatsby({ code }) {
  return (
    <FrameworkGuideLayout
      title="Instala Tailwind CSS con Gatsby"
      description="Configuración de Tailwind CSS en un proyecto Gatsby."
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

UsingGatsby.layoutProps = {
  meta: {
    title: 'Instala Tailwind CSS con Gatsby',
    section: 'Instalación',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
