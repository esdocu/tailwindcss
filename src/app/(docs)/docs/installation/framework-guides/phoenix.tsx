import { css, elixir, html, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/phoenix.react.svg";

export const tile: Tile = {
  title: "Phoenix",
  description: "Un framework para crear aplicaciones enriquecidas e interactivas con Elixir.",
  Logo,
};

export const page: Page = {
  title: "Instalar Tailwind CSS con Phoenix",
  description: "Configuración de Tailwind CSS en un proyecto Phoenix.",
};

export const steps: Step[] = [
  {
    title: "Crear tu proyecto",
    body: (
      <p>
        Comienza creando un nuevo proyecto Phoenix si aún no tienes uno configurado. Puedes seguir su{" "}
        <a href="https://hexdocs.pm/phoenix/installation.html">guía de instalación</a> para ponerte en marcha.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        mix phx.new myproject
        cd myproject
      `,
    },
  },
  {
    title: "Instalar el plugin de Tailwind",
    body: (
      <p>
        Añade el plugin de Tailwind a tus dependencias y ejecuta <code>mix deps.get</code> para instalarlo.
      </p>
    ),
    code: {
      name: "mix.exs",
      lang: "elixir",
      code: elixir`
        defp deps do
          [
            # …
            # [!code highlight:2]
            {:tailwind, "~> 0.3", runtime: Mix.env() == :dev},
          ]
        end
      `,
    },
  },
  {
    title: "Configurar el plugin de Tailwind",
    body: (
      <p>
        En tu archivo <code>config/config.exs</code> puedes establecer qué versión de Tailwind CSS deseas utilizar y
        personalizar tus rutas de recursos.
      </p>
    ),
    code: {
      name: "config.exs",
      lang: "elixir",
      code: elixir`
        config :tailwind,
          # [!code highlight:2]
          version: "4.1.10",
          myproject: [
            args: ~w(
              # [!code highlight:3]
              --input=assets/css/app.css
              --output=priv/static/assets/app.css
            ),
            # [!code highlight:2]
            cd: Path.expand("..", __DIR__)
          ]
      `,
    },
  },
  {
    title: "Actualizar tu script de implementación",
    body: (
      <p>
        Configura tu alias <code>assets.deploy</code> para compilar tu CSS al implementar.
      </p>
    ),
    code: {
      name: "mix.exs",
      lang: "elixir",
      code: elixir`
        defp aliases do
          [
            # …
            "assets.deploy": [
              # [!code highlight:2]
              "tailwind myproject --minify",
              "esbuild myproject --minify",
              "phx.digest"
            ]
          ]
        end
      `,
    },
  },
  {
    title: "Habilitar el observador en desarrollo",
    body: (
      <p>
        Añade Tailwind a tu lista de observadores (watchers) en tu archivo <code>./config/dev.exs</code>.
      </p>
    ),
    code: {
      name: "dev.exs",
      lang: "elixir",
      code: elixir`
        watchers: [
          # Start the esbuild watcher by calling Esbuild.install_and_run(:default, args)
          esbuild: {Esbuild, :install_and_run, [:myproject, ~w(--sourcemap=inline --watch)]},
          # [!code highlight:2]
          tailwind: {Tailwind, :install_and_run, [:myproject, ~w(--watch)]}
        ]
      `,
    },
  },
  {
    title: "Instalar Tailwind CSS",
    body: <p>Ejecuta el comando de instalación para descargar la CLI de Tailwind independiente.</p>,
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        mix tailwind.install
      `,
    },
  },
  {
    title: "Importar Tailwind CSS",
    body: (
      <p>
        Añade un <code>@import</code> a <code>./assets/css/app.css</code> que importe Tailwind CSS.
      </p>
    ),
    code: {
      name: "app.css",
      lang: "css",
      code: css`
        @import "tailwindcss";
      `,
    },
  },
  {
    title: "Eliminar la importación de CSS por defecto",
    body: (
      <p>
        Elimina la importación de CSS de <code>./assets/js/app.js</code>, ya que Tailwind ahora se encarga de esto por ti.
      </p>
    ),
    code: {
      name: "app.js",
      lang: "js",
      code: js`
        // [!code --:3]
        // Remove this line if you add your own CSS build pipeline (e.g postcss).
        import "../css/app.css"
      `,
    },
  },
  {
    title: "Iniciar tu proceso de compilación",
    body: (
      <p>
        Ejecuta tu proceso de compilación con <code>mix phx.server</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        mix phx.server
      `,
    },
  },
  {
    title: "Comenzar a usar Tailwind en tu proyecto",
    body: <p>Comienza a usar las clases de utilidad de Tailwind para dar estilo a tu contenido.</p>,
    code: {
      name: "index.html.heex",
      lang: "html",
      code: html`
        <!-- [!code highlight:4] -->
        <h1 class="text-3xl font-bold underline">
          <!-- prettier-ignore -->
          Hello world!
        </h1>
      `,
    },
  },
];
