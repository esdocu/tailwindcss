import { css, elixir, html, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/phoenix.react.svg";

export let tile: Tile = {
  title: "Phoenix",
  description: "Un framework para construir aplicaciones ricas e interactivas con Elixir.",
  Logo,
};

export let page: Page = {
  title: "Instalar Tailwind CSS con Phoenix",
  description: "Configurando Tailwind CSS en un proyecto Phoenix.",
};

export let steps: Step[] = [
  {
    title: "Crea tu proyecto",
    body: (
      <p>
        Comienza creando un nuevo proyecto Phoenix si aún no tienes uno configurado. Puedes seguir su{" "}
        <a href="https://hexdocs.pm/phoenix/installation.html">guía de instalación</a> para empezar.
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
    title: "Instala el plugin de Tailwind",
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
    title: "Configura el plugin de Tailwind",
    body: (
      <p>
        En tu archivo <code>config/config.exs</code> puedes establecer qué versión de Tailwind CSS quieres usar y
        personalizar tus rutas de assets.
      </p>
    ),
    code: {
      name: "config.exs",
      lang: "elixir",
      code: elixir`
        config :tailwind,
          # [!code highlight:2]
          version: "4.0.0",
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
    title: "Actualiza tu script de despliegue",
    body: (
      <p>
        Configura tu alias <code>assets.deploy</code> para construir tu CSS en el despliegue.
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
    title: "Habilita el watcher en desarrollo",
    body: (
      <p>
        Añade Tailwind a tu lista de watchers en tu archivo <code>./config/dev.exs</code>.
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
    title: "Instala Tailwind CSS",
    body: <p>Ejecuta el comando de instalación para descargar el CLI independiente de Tailwind.</p>,
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        mix tailwind.install
      `,
    },
  },
  {
    title: "Importa Tailwind CSS",
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
    title: "Elimina la importación de CSS por defecto",
    body: (
      <p>
        Elimina la importación de CSS de <code>./assets/js/app.js</code>, ya que Tailwind ahora se encarga de esto por
        ti.
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
    title: "Inicia tu proceso de build",
    body: (
      <p>
        Ejecuta tu proceso de build con <code>mix phx.server</code>.
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
    title: "Comienza a usar Tailwind en tu proyecto",
    body: <p>Comienza a usar las clases de utilidad de Tailwind para estilizar tu contenido.</p>,
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
