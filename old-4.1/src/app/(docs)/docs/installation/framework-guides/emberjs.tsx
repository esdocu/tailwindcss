import { css, handlebars, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/ember.react.svg";

export let tile: Tile = {
  title: "Ember.js",
  description: "Un framework JavaScript para desarrolladores web ambiciosos.",
  Logo,
};

export let page: Page = {
  title: "Instalar Tailwind CSS con Ember.js",
  description: "Configurando Tailwind CSS en un proyecto Ember.js.",
};

export let steps: Step[] = [
  {
    title: "Crea tu proyecto",
    body: (
      <p>
        Comienza creando un nuevo proyecto Ember.js si aún no tienes uno configurado. El enfoque más común es usar{" "}
        <a href="https://guides.emberjs.com/release/getting-started/quick-start/#toc_create-a-new-application">
          Ember CLI
        </a>
        .
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npx ember-cli new my-project --embroider --no-welcome
        cd my-project
      `,
    },
  },
  {
    title: "Instala Tailwind CSS",
    body: (
      <p>
        Usando npm, instala <code>@tailwindcss/postcss</code> y sus dependencias peer, así como{" "}
        <code>postcss-loader</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm install tailwindcss @tailwindcss/postcss postcss postcss-loader
      `,
    },
  },
  {
    title: "Habilita el soporte para PostCSS",
    body: (
      <p>
        En tu archivo <code>ember-cli-build.js</code>, configura PostCSS para procesar tus archivos CSS.
      </p>
    ),
    code: {
      name: "ember-cli-build.js",
      lang: "js",
      code: js`
        'use strict';

        const EmberApp = require('ember-cli/lib/broccoli/ember-app');

        module.exports = function (defaults) {
          const app = new EmberApp(defaults, {
            // Add options here
          });

          const { Webpack } = require('@embroider/webpack');
          return require('@embroider/compat').compatBuild(app, Webpack, {
            skipBabel: [
              {
                package: 'qunit',
              },
            ],
            // [!code highlight:22]
            packagerOptions: {
              webpackConfig: {
                module: {
                  rules: [
                    {
                      test: /\.css$/i,
                      use: ['postcss-loader'],
                    },
                  ],
                },
              },
            },
          });
        };
      `,
    },
  },
  {
    title: "Configura los plugins de PostCSS",
    body: (
      <p>
        Crea un archivo <code>postcss.config.mjs</code> en la raíz de tu proyecto y añade el plugin{" "}
        <code>@tailwindcss/postcss</code> a tu configuración de PostCSS.
      </p>
    ),
    code: {
      name: "postcss.config.mjs",
      lang: "js",
      code: js`
        export default {
          plugins: {
            // [!code highlight:2]
            "@tailwindcss/postcss": {},
          },
        }
      `,
    },
  },
  {
    title: "Importa Tailwind CSS",
    body: (
      <p>
        Crea un archivo <code>./app/app.css</code> y añade un <code>@import</code> para Tailwind CSS.
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
        Importa el archivo <code>./app/app.css</code> recién creado en tu archivo <code>./app/app.js</code>.
      </p>
    ),
    code: {
      name: "app.js",
      lang: "js",
      code: js`
        import Application from '@ember/application';
        import Resolver from 'ember-resolver';
        import loadInitializers from 'ember-load-initializers';
        import config from 'my-project/config/environment';
        // [!code highlight:2]
        import 'my-project/app.css';

        export default class App extends Application {
          modulePrefix = config.modulePrefix;
          podModulePrefix = config.podModulePrefix;
          Resolver = Resolver;
        }

        loadInitializers(App, config.modulePrefix);
      `,
    },
  },
  {
    title: "Inicia tu proceso de build",
    body: (
      <p>
        Ejecuta tu proceso de build con <code>npm run start</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm run start
      `,
    },
  },
  {
    title: "Comienza a usar Tailwind en tu proyecto",
    body: <p>Comienza a usar las clases de utilidad de Tailwind para estilizar tu contenido.</p>,
    code: {
      name: "application.hbs",
      lang: "hbs",
      code: handlebars`
        {{page-title "MyProject"}}

        <!-- [!code highlight:4] -->
        <h1 class="text-3xl font-bold underline">
          Hello world!
        </h1>

        {{outlet}}
      `,
    },
  },
];
