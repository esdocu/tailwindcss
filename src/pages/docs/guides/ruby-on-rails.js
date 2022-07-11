import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Crea tu proyecto',
    body: () => (
      <p>
        Comienza creando un nuevo proyecto de Rails si aún no tienes uno configurado. El enfoque más común es usar la {' '}
        <a href="https://guides.rubyonrails.org/command_line.html">Línea de comandos de Rails</a>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'rails new my-app\ncd my-app',
    },
  },
  {
    title: 'Instala Tailwind CSS',
    body: () => (
      <p>
        Instala la gema <code>tailwindcss-rails</code> y luego ejecuta el comando de instalación para generar un archivo {' '}
        <code>tailwind.config.js</code> en el directorio <code>./config</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: './bin/bundle add tailwindcss-rails\n./bin/rails tailwindcss:install',
    },
  },
  {
    title: 'Configura tus rutas de plantilla',
    body: () => (
      <p>
        Agrega las rutas a todos tus archivos de plantilla a tu archivo{' '}
        <code>./config/tailwind.config.js</code>.
      </p>
    ),
    code: {
      name: 'tailwind.config.js',
      lang: 'js',
      code: `  module.exports = {
>   content: [
>     './app/helpers/**/*.rb',
>     './app/javascript/**/*.js',
>     './app/views/**/*',
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
        Agrega las directivas <code>@tailwind</code> para cada una de las capas de Tailwind a tu archivo {' '}
        <code>application.tailwind.css</code> ubicado en el directorio {' '}
        <code>./app/assets/stylesheets</code>.
      </p>
    ),
    code: {
      name: 'application.tailwind.css',
      lang: 'css',
      code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
    },
  },
  {
    title: 'Comienza tu proceso de compilación',
    body: () => (
      <p>
        Ejecuta tu proceso de compilación con <code>./bin/dev</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: './bin/dev',
    },
  },
  {
    title: 'Comienza a usar Tailwind en tu proyecto',
    body: () => <p>Comienza a usar las clases de utilidad de Tailwind para diseñar tu contenido.</p>,
    code: {
      name: 'index.html.erb',
      lang: 'html',
      code: `<h1 class="text-3xl font-bold underline">
    Hello world!
</h1>`,
    },
  },
]

export default function UsingRails({ code }) {
  return (
    <FrameworkGuideLayout
      title="Instala Tailwind CSS con Ruby on Rails"
      description="Configuración de Tailwind CSS en un proyecto Rails v7+."
    >
      <div className="relative z-10 prose prose-slate mb-16 max-w-3xl dark:prose-dark">
        <p>
          La forma más rápida de comenzar a usar Tailwind CSS en tu proyecto de Rails es usar {' '}
          <a href="https://github.com/rails/tailwindcss-rails">CSS Tailwind para Rails</a> ejecutando{' '}
          <code>rails new my-app --css tailwind</code>. Esto configurará automáticamente tu configuración
          de Tailwind según el ejemplo oficial de Rails. Si deseas configurar Tailwind manualmente,
          continúa con el resto de esta guía.
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

UsingRails.layoutProps = {
  meta: {
    title: 'Instala Tailwind CSS con Ruby on Rails',
    section: 'Instalación',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
