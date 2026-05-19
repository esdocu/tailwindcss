import { css, js, html, shell, Page, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/svelte.react.svg";

export let tile: Tile = {
  title: "SvelteKit",
  description: "La forma más rápida de construir aplicaciones de todos los tamaños con Svelte.js.",
  Logo,
};

export let page: Page = {
  title: "Instalar Tailwind CSS con SvelteKit",
  description: "Configurando Tailwind CSS en un proyecto SvelteKit.",
};

export let steps: Step[] = [
  {
    title: "Crea tu proyecto",
    body: (
      <p>
        Comienza creando un nuevo proyecto SvelteKit si aún no tienes uno configurado. El enfoque más común se describe
        en la documentación de <a href="https://svelte.dev/docs/kit/creating-a-project">SvelteKit</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npx sv create my-project
        cd my-project
      `,
    },
  },
  {
    title: "Instala Tailwind CSS",
    body: (
      <p>
        Instala <code>@tailwindcss/vite</code> y sus dependencias peer a través de npm.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm install tailwindcss @tailwindcss/vite
      `,
    },
  },
  {
    title: "Configura el plugin de Vite",
    body: (
      <p>
        Añade el plugin <code>@tailwindcss/vite</code> a tu configuración de Vite.
      </p>
    ),
    code: {
      name: "vite.config.ts",
      lang: "ts",
      code: js`
        import { sveltekit } from '@sveltejs/kit/vite';
        import { defineConfig } from 'vite';
        // [!code highlight:2]
        import tailwindcss from '@tailwindcss/vite';

        export default defineConfig({
          plugins: [
            // [!code highlight:2]
            tailwindcss(),
            sveltekit(),
          ],
        });
      `,
    },
  },
  {
    title: "Importa Tailwind CSS",
    body: (
      <p>
        Crea un archivo <code>./src/app.css</code> y añade un <code>@import</code> que importe Tailwind CSS.
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
    title: "Importa el archivo CSS",
    body: (
      <p>
        Crea un archivo <code>./src/routes/+layout.svelte</code> e importa el archivo <code>app.css</code> recién
        creado.
      </p>
    ),
    code: {
      name: "+layout.svelte",
      lang: "svelte",
      code: html`
        <script>
          let { children } = $props();
          // [!code highlight:2]
          import "../app.css";
        </script>

        {@render children()}
      `,
    },
  },
  {
    title: "Inicia tu proceso de build",
    body: (
      <p>
        Ejecuta tu proceso de build con <code>npm run dev</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm run dev
      `,
    },
  },
  {
    title: "Comienza a usar Tailwind en tu proyecto",
    body: (
      <p>
        Comienza a usar las clases de utilidad de Tailwind para estilizar tu contenido, asegurándote de importar tu tema
        de Tailwind CSS para cualquier bloque <code>&lt;style&gt;</code> que necesite ser procesado por Tailwind.
      </p>
    ),
    code: {
      name: "+page.svelte",
      lang: "svelte",
      code: html`
        <!-- [!code highlight:4] -->
        <h1 class="text-3xl font-bold underline">
          <!-- prettier-ignore -->
          Hello world!
        </h1>

        <style lang="postcss">
          /* [!code highlight:2] */
          @reference "tailwindcss";

          :global(html) {
            background-color: theme(--color-gray-100);
          }
        </style>
      `,
    },
  },
];
