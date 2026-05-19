import { css, html, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/rails.react.svg";
import LogoDark from "@/docs/img/guides/rails-white.react.svg";

export let tile: Tile = {
  title: "Ruby on Rails",
  description: "Framework full-stack con todas las herramientas necesarias para construir increíbles aplicaciones web.",
  Logo,
  LogoDark,
};

export let page: Page = {
  title: "Instalar Tailwind CSS con Ruby on Rails",
  description: "Configurando Tailwind CSS en un proyecto Ruby on Rails v7+.",

  // NOTA: Esta introducción no se usa actualmente pero está aquí como referencia ya que querremos traerla de vuelta una vez que la gema de rails se actualice para una versión estable v4.
  intro: (
    <div className="prose prose-slate dark:prose-dark relative z-10 mb-16 max-w-3xl">
      <p>
        La forma más rápida de comenzar a usar Tailwind CSS en tu proyecto Rails es usar{" "}
        <a href="https://github.com/rails/tailwindcss-rails">Tailwind CSS para Rails</a> ejecutando{" "}
        <code>rails new my-project --css tailwind</code>. Esto configurará automáticamente tu instalación de Tailwind
        basándose en el ejemplo oficial de Rails. Si prefieres configurar Tailwind manualmente, continúa con el resto de
        esta guía.
      </p>
    </div>
  ),
};

export let steps: Step[] = [
  {
    title: "Crea tu proyecto",
    body: (
      <p>
        Comienza creando un nuevo proyecto Rails si aún no tienes uno configurado. El enfoque más común es usar la{" "}
        <a href="https://guides.rubyonrails.org/command_line.html">Línea de comandos de Rails</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        rails new my-project
        cd my-project
      `,
    },
  },
  {
    title: "Instala Tailwind CSS",
    body: (
      <p>
        Instala las gemas <code>tailwindcss-ruby</code> y <code>tailwindcss-rails</code>, y luego ejecuta el comando de
        instalación para configurar Tailwind CSS en tu proyecto.
      </p>
    ),

    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        ./bin/bundle add tailwindcss-ruby
        ./bin/bundle add tailwindcss-rails
        ./bin/rails tailwindcss:install
      `,
    },
  },
  {
    title: "Inicia tu proceso de build",
    body: (
      <p>
        Ejecuta tu proceso de build con <code>./bin/dev</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        ./bin/dev
      `,
    },
  },
  {
    title: "Comienza a usar Tailwind en tu proyecto",
    body: <p>Comienza a usar las clases de utilidad de Tailwind para estilizar tu contenido.</p>,
    code: {
      name: "index.html.erb",
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
