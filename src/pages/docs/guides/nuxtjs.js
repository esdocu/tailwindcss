import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Crea tu proyecto',
    body: () => (
      <p>
        Comienza creando un nuevo proyecto Nuxt.js si aún no tienes uno configurado.
        El enfoque más común es usar{' '}
        <a href="https://nuxtjs.org/guides/get-started/installation">Create Nuxt App</a>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npx create-nuxt-app my-project\ncd my-project',
    },
  },
  {
    title: 'Instala Tailwind CSS',
    body: () => (
      <>
        <p>
          Usando npm, instala <code>tailwindcss</code> y sus dependencias de pares, así como {' '}
          <code>@nuxt/postcss8</code>, y luego ejecuta el comando init para generar el archivo {' '}
          <code>tailwind.config.js</code>.
        </p>
        <p className="mt-3 text-xs italic">
          Se requiere el uso de <code>@latest</code> porque Nuxt instala PostCSS v7 y Autoprefixer v9 de forma predeterminada.
        </p>
      </>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm install -D tailwindcss postcss@latest autoprefixer@latest @nuxt/postcss8\nnpx tailwindcss init',
    },
  },
  {
    title: 'Habilita el complemento PostCSS de Nuxt.js',
    body: () => (
      <p>
        En tu archivo <code>nuxt.config.js</code>, habilita el complemento <code>@nuxt/postcss8</code>.
      </p>
    ),
    code: {
      name: 'nuxt.config.js',
      lang: 'js',
      code: `  export default {
    buildModules: [
>     '@nuxt/postcss8',
      // ...
    ],
  }`,
    },
  },
  {
    title: 'Agrega Tailwind a tu configuración de PostCSS',
    body: () => (
      <p>
        Agrega <code>tailwindcss</code> y <code>autoprefixer</code> al objeto {' '}
        <code>build.postcss.plugins</code> de tu archivo <code>nuxt.config.js</code>.
      </p>
    ),
    code: {
      name: 'nuxt.config.js',
      lang: 'js',
      code: `  export default {
    build: {
>     postcss: {
>       plugins: {
>         tailwindcss: {},
>         autoprefixer: {},
>       },
>     },
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
>   content: [
>     "./components/**/*.{js,vue,ts}",
>     "./layouts/**/*.vue",
>     "./pages/**/*.vue",
>     "./plugins/**/*.{js,ts}",
>     "./nuxt.config.{js,ts}",
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
        Crea un archivo <code>./assets/css/main.css</code> y agrega las directivas <code>@tailwind</code>{' '}
        para cada una de las capas de Tailwind.
      </p>
    ),
    code: {
      name: 'main.css',
      lang: 'css',
      code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
    },
  },
  {
    title: 'Importa el archivo CSS',
    body: () => (
      <p>
        Agrega el archivo <code>./assets/css/main.css</code> recién creado al 
        array <code>css</code> en el archivo <code>nuxt.config.js</code>.
      </p>
    ),
    code: {
      name: 'nuxt.config.js',
      lang: 'js',
      code: `  export default {
    css: [
>     '@/assets/css/main.css',
    ],
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

export default function UsingNextJS({ code }) {
  return (
    <FrameworkGuideLayout
      title="Instala Tailwind CSS con Nuxt.js"
      description="Configuración de Tailwind CSS en un proyecto Nuxt.js."
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
        if (code.lang && code.lang !== 'terminal') {
          return highlightCode(code.code, code.lang)
        }
        return code.code
      }),
    },
  }
}

UsingNextJS.layoutProps = {
  meta: {
    title: 'Instala Tailwind CSS con Nuxt.js',
    section: 'Instalación',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
