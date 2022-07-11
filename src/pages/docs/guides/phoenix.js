import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'
import pkg from 'tailwindcss/package.json?fields=version'

let steps = [
  {
    title: 'Crea tu proyecto',
    body: () => (
      <p>
        Comienza por crear un nuevo proyecto de Phoenix si aún no tienes uno configurado. Puedes seguir 
        su <a href="https://hexdocs.pm/phoenix/installation.html">guía de instalación</a> para ponerte en marcha.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'mix phx.new myproject\ncd myproject',
    },
  },
  {
    title: 'Instala el complemento de Tailwind',
    body: () => (
      <p>
        Agrega el complemento de Tailwind a tus dependencias y ejecuta <code>mix deps.get</code> para instalarlo.
      </p>
    ),
    code: {
      name: 'mix.exs',
      lang: 'elixir',
      code: `  defp deps do
    [
>     {:tailwind, "~> 0.1", runtime: Mix.env() == :dev}
    ]
  end`,
    },
  },
  {
    title: 'Configura el complemento de Tailwind',
    body: () => (
      <p>
        En tu archivo <code>config.exs</code> puedes establecer qué versión de Tailwind CSS deseas usar, 
        la ruta a tu configuración de Tailwind y personalizar tus rutas de activos.
      </p>
    ),
    code: {
      name: 'config.exs',
      lang: 'elixir',
      code: `config :tailwind, version: "${pkg.version}", default: [
  args: ~w(
    --config=tailwind.config.js
    --input=css/app.css
    --output=../priv/static/assets/app.css
  ),
  cd: Path.expand("../assets", __DIR__)
]`,
    },
  },
  {
    title: 'Actualiza tu script de despliegue',
    body: () => (
      <p>
        Configura un alias para construir tu CSS en despliegue.
      </p>
    ),
    code: {
      name: 'mix.exs',
      lang: 'elixir',
      code: `  defp aliases do
    [
>     "assets.deploy": ["tailwind default --minify", "esbuild default --minify", "phx.digest"]
    ]
  ]`,
    },
  },
  {
    title: 'Habilita watcher en desarrollo',
    body: () => (
      <p>
        Agrega Tailwind a tu lista de watchers en tu archivo <code>./config/dev.exs</code>.
      </p>
    ),
    code: {
      name: 'dev.exs',
      lang: 'elixir',
      code: `  watchers: [
>   tailwind: {Tailwind, :install_and_run, [:default, ~w(--watch)]}
  ]`,
    },
  },
  {
    title: 'Instala Tailwind CSS',
    body: () => (
      <p>
        Ejecuta el comando de instalación para descargar la CLI de Tailwind independiente y generar un archivo <code>tailwind.config.js</code> en el directorio <code>./assets</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: `mix tailwind.install`,
    },
  },
  {
    title: 'Configura tus rutas de plantilla',
    body: () => (
      <p>
        Agrega las rutas a todos tus archivos de plantilla en tu archivo <code>./assets/tailwind.config.js</code>.
      </p>
    ),
    code: {
      name: 'tailwind.config.js',
      lang: 'js',
      code: `  module.exports = {
>   content: [
>     './js/**/*.js',
>     '../lib/*_web.ex',
>     '../lib/*_web/**/*.*ex',
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
        Agrega las directivas <code>@tailwind</code>{' '}
        para cada una de las capas de Tailwind a <code>./assets/css/app.css</code>
      </p>
    ),
    code: {
      name: 'app.css',
      lang: 'css',
      code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
    },
  },
  {
    title: 'Eliminar la importación de CSS predeterminada',
    body: () => (
      <p>
        Elimina la importación de CSS de <code>./assets/js/app.js</code>, ya que Tailwind ahora se encarga de esto por ti.
      </p>
    ),
    code: {
      name: 'app.js',
      lang: 'diff-js',
      code: `- // Remove this line if you add your own CSS build pipeline (e.g postcss).
- import "../css/app.css"`,
    },
  },
  {
    title: 'Comienza tu proceso de compilación',
    body: () => (
      <p>
        Ejecuta tu proceso de compilación con <code>mix phx.server</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'mix phx.server',
    },
  },
  {
    title: 'Comienza a usar Tailwind en tu proyecto',
    body: () => <p>Comienza a usar las clases de utilidad de Tailwind para diseñar tu contenido.</p>,
    code: {
      name: 'index.html.heex',
      lang: 'html',
      code: `<h1 class="text-3xl font-bold underline">
  Hello world!
</h1>`,
    },
  },
]

export default function UsingPhoenix({ code }) {
  return (
    <FrameworkGuideLayout
      title="Instala Tailwind CSS con Phoenix"
      description="Configuración de Tailwind CSS en un proyecto Phoenix."
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

UsingPhoenix.layoutProps = {
  meta: {
    title: 'Instala Tailwind CSS con Phoenix',
    section: 'Instalación',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
