import clsx from 'clsx'
import Link from 'next/link'
import { useRouteHash } from '@/hooks/useRouteHash'
import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let tabs = [
  {
    name: 'Usando Vite',
    href: '#vite',
    steps: [
      {
        title: 'Crea tu proyecto',
        body: () => (
          <p>
            Comienza creando un nuevo proyecto de Laravel si aún no tiene uno configurado. El enfoque 
            más común es usar el{' '}
            <a href="https://laravel.com/docs/9.x#your-first-laravel-project">
              comando Composer <code>create-project</code>
            </a>
            .
          </p>
        ),
        code: {
          name: 'Terminal',
          lang: 'terminal',
          code: 'composer create-project laravel/laravel my-project\ncd my-project',
        },
      },
      {
        title: 'Instala Tailwind CSS',
        body: () => (
          <p>
            Instala <code>tailwindcss</code> y sus dependencias de pares a través de npm, y luego ejecuta el 
            comando init para generar tanto <code>tailwind.config.js</code> como <code>postcss.config.js</code>.
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
>     "./resources/**/*.blade.php",
>     "./resources/**/*.js",
>     "./resources/**/*.vue",
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
            Agrega las directivas <code>@tailwind</code> para cada una de las capas de Tailwind a 
            tu archivo <code>./resources/css/app.css</code>.
          </p>
        ),
        code: {
          name: 'app.css',
          lang: 'css',
          code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
        },
      },
      {
        title: 'Comienza tu proceso build',
        body: () => (
          <p>
            Ejecuta tu proceso de compilación con <code>npm run watch</code>.
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
        body: () => (
          <p>
            Asegúrate de que tu CSS compilado esté incluido en el <code>{'<head>'}</code> y luego comienza
            a usar las clases de utilidad de Tailwind para diseñar tu contenido.
          </p>
        ),
        code: {
          name: 'app.blade.php',
          lang: 'html',
          code: `  <!doctype html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @vite('resources/css/app.css')
  </head>
  <body>
>   <h1 class="text-3xl font-bold underline">
>     Hello world!
>   </h1>
  </body>
  </html>`,
        },
      },
    ],
  },
  {
    name: 'Usando Laravel Mix',
    href: '#mix',
    steps: [
      {
        title: 'Instala Tailwind CSS',
        body: () => (
          <p>
            Instala <code>tailwindcss</code> y sus dependencias de pares a través de npm y crea tu 
            archivo <code>tailwind.config.js</code>.
          </p>
        ),
        code: {
          name: 'Terminal',
          lang: 'terminal',
          code: 'npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init',
        },
      },
      {
        title: 'Agrega Tailwind a tu configuración de Laravel Mix',
        body: () => (
          <p>
            En tu archivo <code>webpack.mix.js</code>, agrega <code>tailwindcss</code> como 
            complemento de PostCSS.
          </p>
        ),
        code: {
          name: 'webpack.mix.js',
          lang: 'js',
          code: `  mix.js("resources/js/app.js", "public/js")
    .postCss("resources/css/app.css", "public/css", [
>     require("tailwindcss"),
    ]);`,
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
>     "./resources/**/*.blade.php",
>     "./resources/**/*.js",
>     "./resources/**/*.vue",
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
            Agrega las directivas <code>@tailwind</code> para cada una de las capas de Tailwind 
            a tu archivo <code>./resources/css/app.css</code>.
          </p>
        ),
        code: {
          name: 'app.css',
          lang: 'css',
          code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
        },
      },
      {
        title: 'Comienza tu proceso build',
        body: () => (
          <p>
            Ejecuta tu proceso de compilación con <code>npm run watch</code>.
          </p>
        ),
        code: {
          name: 'Terminal',
          lang: 'terminal',
          code: 'npm run watch',
        },
      },
      {
        title: 'Comienza a usar Tailwind en tu proyecto',
        body: () => (
          <p>
            Asegúrate de que tu CSS compilado esté incluido en el <code>{'<head>'}</code> y luego comienza 
            a usar las clases de utilidad de Tailwind para diseñar tu contenido.
          </p>
        ),
        code: {
          name: 'app.blade.php',
          lang: 'html',
          code: `  <!doctype html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
  </head>
  <body>
>   <h1 class="text-3xl font-bold underline">
>     Hello world!
>   </h1>
  </body>
  </html>`,
        },
      },
    ],
  },
]

export default function UsingLaravel({ code }) {
  let hash = useRouteHash()

  let selectedTabIndex = tabs.findIndex((tab) => tab.href === hash)

  if (selectedTabIndex === -1) {
    selectedTabIndex = 0
  }

  return (
    <FrameworkGuideLayout
      title="Instala Tailwind CSS con Laravel"
      description="Configura Tailwind CSS en un proyecto de Laravel."
    >
      <div className="flex overflow-auto mb-6 -mx-4 sm:-mx-6">
        <div className="flex-none min-w-full px-4 sm:px-6">
          <ul className="border-b border-slate-200 space-x-6 flex whitespace-nowrap dark:border-slate-200/5">
            {tabs.map((tab, tabIndex) => (
              <li key={tab.name}>
                <h2>
                  <Link href={tab.href} scroll={false}>
                    <a
                      className={clsx(
                        'flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px',
                        tabIndex === selectedTabIndex
                          ? 'text-sky-500 border-current'
                          : 'text-slate-900 border-transparent hover:border-slate-300 dark:text-slate-200 dark:hover:border-slate-700'
                      )}
                    >
                      {tab.name}
                    </a>
                  </Link>
                </h2>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Steps steps={tabs[selectedTabIndex].steps} code={code[selectedTabIndex]} />
    </FrameworkGuideLayout>
  )
}

export function getStaticProps() {
  let { highlightCode } = require('../../../../remark/utils')

  return {
    props: {
      code: tabs.map((tab) =>
        tab.steps.map(({ code }) => {
          if (code.lang && code.lang !== 'terminal') {
            return highlightCode(code.code, code.lang)
          }
          return code.code
        })
      ),
    },
  }
}

UsingLaravel.layoutProps = {
  meta: {
    title: 'Instala Tailwind CSS con Laravel',
    section: 'Instalación',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
