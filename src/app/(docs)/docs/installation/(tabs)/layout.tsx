import { Metadata } from "next";
import { TabBar } from "@/components/installation-tabs";

export const metadata: Metadata = {
  title: {
    template: "%s - Tailwind CSS",
    default: "Instalación",
  },
  openGraph: {
    type: "article",
    title: {
      template: "%s - Instalación",
      default: "Instalación",
    },
  },
};

const tabs = {
  "Uso de Vite": "/docs/installation/using-vite",
  "Uso de PostCSS": "/docs/installation/using-postcss",
  "CLI de Tailwind": "/docs/installation/tailwind-cli",
  "Guías de frameworks": "/docs/installation/framework-guides",
  "Play CDN": "/docs/installation/play-cdn",
};

const readNext = [
  {
    title: "Diseño con clases de utilidad",
    href: "/docs/styling-with-utility-classes",
    body: (
      <p>
        Uso de un flujo de trabajo que prioriza las utilidades para crear componentes complejos a partir de un conjunto
        limitado de utilidades primitivas.
      </p>
    ),
    // icon: {
    //   className: "dark:bg-indigo-500 dark:highlight-white/20",
    //   // light: require("@/img/icons/home/utility-first.png").default.src,
    //   // dark: require("@/img/icons/home/dark/utility-first.png").default.src,
    // },
    icon: require("@/components/home/icons/css-grid-icon").default,
  },
  {
    title: "Diseño responsivo",
    href: "/docs/responsive-design",
    body: (
      <p>
        Crea interfaces de usuario totalmente responsivas que se adaptan a cualquier tamaño de pantalla mediante
        modificadores responsivos.
      </p>
    ),
    icon: {
      className: "dark:bg-indigo-500 dark:highlight-white/20",
      // light: require("@/img/icons/home/mobile-first.png").default.src,
      // dark: require("@/img/icons/home/dark/mobile-first.png").default.src,
    },
  },
  {
    title: "Hover, Focus y otros estados",
    href: "/docs/hover-focus-and-other-states",
    body: (
      <p>
        Aplica estilos a elementos en estados interactivos como hover, focus y más utilizando modificadores
        condicionales.
      </p>
    ),
    icon: {
      className: "dark:bg-blue-500 dark:highlight-white/20",
      // light: require("@/img/icons/home/state-variants.png").default.src,
      // dark: require("@/img/icons/home/dark/state-variants.png").default.src,
    },
  },
  {
    title: "Modo oscuro",
    href: "/docs/dark-mode",
    body: (
      <p>Optimiza tu sitio para el modo oscuro directamente en tu HTML utilizando el modificador de modo oscuro.</p>
    ),
    icon: {
      className: "dark:bg-slate-600 dark:highlight-white/20",
      // light: require("@/img/icons/home/dark-mode.png").default.src,
      // dark: require("@/img/icons/home/dark/dark-mode.png").default.src,
    },
  },
  {
    title: "Reutilización de estilos",
    href: "/docs/reusing-styles",
    body: <p>Gestiona la duplicación y mantén tus proyectos mantenibles creando abstracciones reutilizables.</p>,
    icon: {
      className: "dark:bg-sky-500 dark:highlight-white/20",
      // light: require("@/img/icons/home/component-driven.png").default.src,
      // dark: require("@/img/icons/home/dark/component-driven.png").default.src,
    },
  },
  {
    title: "Personalización del framework",
    href: "/docs/adding-custom-styles",
    body: (
      <p>
        Personaliza el framework para que coincida con tu marca y extiéndelo con tus propios estilos personalizados.
      </p>
    ),
    icon: {
      className: "dark:bg-pink-500 dark:highlight-white/30",
      // light: require("@/img/icons/home/customization.png").default.src,
      // dark: require("@/img/icons/home/dark/customization.png").default.src,
    },
  },
];

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Add a placeholder div so the Next.js router can find the scrollable element. */}
      <div hidden />

      <div className="isolate mx-auto grid w-full max-w-2xl grid-cols-1 gap-10 pt-10 md:pb-24 xl:max-w-5xl">
        <div className="px-4 sm:px-6">
          <p
            data-section="true"
            className="font-mono text-xs/6 font-medium tracking-widest text-gray-600 uppercase dark:text-gray-400"
          >
            Instalación
          </p>
          <h1 className="mt-2 text-3xl font-medium tracking-tight text-gray-950 dark:text-white">
            Primeros pasos con Tailwind CSS
          </h1>
          <p data-description="true" className="mt-6 text-base/7 text-gray-700 dark:text-gray-300">
            Tailwind CSS funciona escaneando todos tus archivos HTML, componentes de JavaScript y cualquier otra
            plantilla en busca de nombres de clases, generando los estilos correspondientes y luego escribiéndolos en un
            archivo CSS estático.
          </p>
          <p className="mt-4 text-base/7 text-gray-700 dark:text-gray-300">
            Es rápido, flexible y confiable, sin tiempo de ejecución.
          </p>

          <div className="mt-10" data-content="true">
            <section className="relative mb-16">
              <div className="relative z-10">
                <h2
                  data-docsearch-ignore
                  className="mb-6 text-lg font-semibold tracking-tight text-gray-950 dark:text-white"
                >
                  Instalación
                </h2>
                <TabBar
                  tabs={Object.entries(tabs).map(([title, url]) => ({
                    title,
                    url,
                  }))}
                />
              </div>
              {children}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
