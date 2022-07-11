import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Crea tu proyecto',
    body: () => (
      <p>
        Comienza creando un nuevo proyecto SvelteKit si aún no tienes uno configurado. El enfoque más común se describe en los{' '}
        <a href="https://kit.svelte.dev/docs#introduction-getting-started">
          Primeros pasos con SvelteKit
        </a>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm init svelte@next my-app\ncd my-app',
    },
  },
  {
    title: 'Instala Tailwind CSS',
    body: () => (
      <p>
        Instala <code>tailwindcss</code> y sus dependencias de pares a través de npm, como también {' '}
        <code>svelte-preprocess</code> y luego 
        ejecuta los siguientes comandos para generar tanto <code>tailwind.config.cjs</code> como {' '}
        <code>postcss.config.cjs</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm install -D tailwindcss postcss autoprefixer svelte-preprocess\nnpx tailwindcss init tailwind.config.cjs -p',
    },
  },
  {
    title: 'Habilitar el uso de PostCSS en bloques <style>',
    body: () => (
      <p>
        En tu archivo <code>svelte.config.js</code>, importa <code>svelte-preprocess</code> y configúralo para 
        procesar bloques <code>&lt;style&gt;</code> como PostCSS.
      </p>
    ),
    code: {
      name: 'svelte.config.js',
      lang: 'js',
      code: `> import preprocess from "svelte-preprocess";

  const config = {
>   preprocess: [
>     preprocess({
>       postcss: true,
>     }),
>   ],
  }`,
    },
  },
  {
    title: 'Configura tus rutas de plantilla',
    body: () => (
      <p>
        Agrega las rutas a todos tus archivos de plantilla en tu archivo <code>tailwind.config.cjs</code>.
      </p>
    ),
    code: {
      name: 'tailwind.config.cjs',
      lang: 'javascript',
      code: `  module.exports = {
>   content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
      extend: {}
    },
    plugins: []
  };`,
    },
  },
  {
    title: 'Agrega las directivas Tailwind a tu CSS',
    body: () => (
      <p>
        Crea un archivo <code>./src/app.css</code> y agrega las directivas <code>@tailwind</code> para 
        cada una de las capas de Tailwind.
      </p>
    ),
    code: {
      name: 'app.css',
      lang: 'css',
      code: `@tailwind base;
@tailwind components;
@tailwind utilities;`,
    },
  },
  {
    title: 'Importa el archivo CSS',
    body: () => (
      <p>
        Crea un archivo <code>./src/routes/__layout.svelte</code> e importa el archivo {' '}
        <code>app.css</code> recién creado.
      </p>
    ),
    code: {
      name: '__layout.svelte',
      lang: 'html',
      code: `<script>
  import "../app.css";
</script>

<slot />`,
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
      name: 'index.svelte',
      lang: 'html',
      code: `<h1 class="text-3xl font-bold underline">
  Hello world!
</h1>`,
    },
  },
]

export default function UsingSvelteKit({ code }) {
  return (
    <FrameworkGuideLayout
      title="Instala Tailwind CSS con SvelteKit"
      description="Configuración de Tailwind CSS en un proyecto SvelteKit."
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

UsingSvelteKit.layoutProps = {
  meta: {
    title: 'Instala Tailwind CSS con SvelteKit',
    section: 'Instalación',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
