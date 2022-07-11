import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Crea tu proyecto',
    body: () => (
      <p>
        Comienza creando un nuevo proyecto de Vite si aún no tienes uno configurado.
        El enfoque más común es usar{' '}
        <a href="https://github.com/vitejs/vite/tree/main/packages/create-vite#readme">
          Create Vite
        </a>
        .
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm init vite my-project\ncd my-project',
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
>     "./index.html",
>     "./src/**/*.{vue,js,ts,jsx,tsx}",
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
        Crea un archivo <code>./src/index.css</code> y agrega las directivas <code>@tailwind</code> 
        para cada una de las capas de Tailwind.
      </p>
    ),
    code: {
      name: 'index.css',
      lang: 'css',
      code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
    },
  },
  {
    title: 'Importa el archivo CSS',
    body: () => (
      <p>
        Importa el archivo <code>./src/index.css</code> recién creado en tu archivo {' '}
        <code>./src/main.js</code>.
      </p>
    ),
    code: {
      name: 'main.js',
      lang: 'js',
      code: `  import { createApp } from 'vue'
  import App from './App.vue'
> import './index.css'

  createApp(App).mount('#app')`,
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
      name: 'App.vue',
      lang: 'html',
      code: `  <template>
>   <h1 class="text-3xl font-bold underline">
>     Hello world!
>   </h1>
  </template>`,
    },
  },
]

export default function UsingVite({ code }) {
  return (
    <FrameworkGuideLayout
      title="Instala Tailwind CSS con Vue 3 y Vite"
      description="Configuración de Tailwind CSS en un proyecto Vue 3 y Vite."
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

UsingVite.layoutProps = {
  meta: {
    title: 'Instala Tailwind CSS con Vue 3 y Vite',
    section: 'Instalación',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
