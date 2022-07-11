import { BasicLayout } from '@/layouts/BasicLayout'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { IconContainer } from '@/components/home/common'

let tabs = {
  'Tailwind CLI': '/docs/installation',
  'Usando PostCSS': '/docs/installation/using-postcss',
  'Guías para Frameworks': '/docs/installation/framework-guides',
  'Play CDN': '/docs/installation/play-cdn',
}

let readNext = [
  {
    title: 'Fundamentos de utilidad-primero',
    href: '/docs/utility-first',
    body: () => (
      <p>
        Uso de un flujo de trabajo utilidad-primero para crear componentes complejos a partir 
        de un conjunto restringido de utilidades primitivas.
      </p>
    ),
    icon: {
      className: 'dark:bg-indigo-500 dark:highlight-white/20',
      light: require('@/img/icons/home/utility-first.png').default,
      dark: require('@/img/icons/home/dark/utility-first.png').default,
    },
  },
  {
    title: 'Diseño responsive',
    href: '/docs/responsive-design',
    body: () => (
      <p>
        Crea interfaces de usuario totalmente responsive que se adapten a cualquier tamaño de 
        pantalla utilizando modificadores responsive.
      </p>
    ),
    icon: {
      className: 'dark:bg-indigo-500 dark:highlight-white/20',
      light: require('@/img/icons/home/mobile-first.png').default,
      dark: require('@/img/icons/home/dark/mobile-first.png').default,
    },
  },
  {
    title: 'Hover, Focus y otros estados',
    href: '/docs/hover-focus-and-other-states',
    body: () => (
      <p>
        Elementos de estilo en estados interactivos como hover, focus y más usando 
        modificadores condicionales.
      </p>
    ),
    icon: {
      className: 'dark:bg-blue-500 dark:highlight-white/20',
      light: require('@/img/icons/home/state-variants.png').default,
      dark: require('@/img/icons/home/dark/state-variants.png').default,
    },
  },
  {
    title: 'Modo oscuro',
    href: '/docs/dark-mode',
    body: () => (
      <p>Optimiza tu sitio para el modo oscuro directamente en su HTML usando el modificador dark.</p>
    ),
    icon: {
      className: 'dark:bg-slate-600 dark:highlight-white/20',
      light: require('@/img/icons/home/dark-mode.png').default,
      dark: require('@/img/icons/home/dark/dark-mode.png').default,
    },
  },
  {
    title: 'Reutiliza estilos',
    href: '/docs/reusing-styles',
    body: () => (
      <p>
        Administra la duplicación y mantén tus proyectos mantenibles mediante la creación de abstracciones reutilizables.
      </p>
    ),
    icon: {
      className: 'dark:bg-sky-500 dark:highlight-white/20',
      light: require('@/img/icons/home/component-driven.png').default,
      dark: require('@/img/icons/home/dark/component-driven.png').default,
    },
  },
  {
    title: 'Personaliza el Framework',
    href: '/docs/adding-custom-styles',
    body: () => (
      <p>Personaliza el framework para que coincida con tu marca y extiéndelo con tus propios estilos personalizados.</p>
    ),
    icon: {
      className: 'dark:bg-pink-500 dark:highlight-white/30',
      light: require('@/img/icons/home/customization.png').default,
      dark: require('@/img/icons/home/dark/customization.png').default,
    },
  },
]

export function InstallationLayout({ children }) {
  let router = useRouter()

  return (
    <BasicLayout>
      <header id="header" className="mb-10 md:flex md:items-start">
        <div className="flex-auto max-w-4xl">
          <p className="mb-4 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400">
            Instalación
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
            Comienza con Tailwind CSS
          </h1>
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-400">
            Tailwind CSS funciona escaneando todos tus archivos HTML, componentes de JavaScript y 
            cualquier otra plantilla en busca de nombres de clase, generando los estilos 
            correspondientes y luego escribiéndolos en un archivo CSS estático.
          </p>
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-400">
            Es rápido, flexible y confiable, sin tiempo de ejecución.
          </p>
        </div>
      </header>
      <section className="mb-16 relative">
        <div className="relative z-10">
          <h2
            data-docsearch-ignore
            className="text-slate-900 text-xl tracking-tight font-bold mb-3 dark:text-slate-200"
          >
            Instalación
          </h2>
          <div className="flex overflow-auto mb-6 -mx-4 sm:-mx-6">
            <div className="flex-none min-w-full px-4 sm:px-6">
              <ul className="border-b border-slate-200 space-x-6 flex whitespace-nowrap dark:border-slate-200/5">
                {Object.entries(tabs).map(([name, href]) => (
                  <li key={name}>
                    <h2>
                      <Link href={href} scroll={false}>
                        <a
                          className={clsx(
                            'flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px',
                            href === router.pathname
                              ? 'text-sky-500 border-current'
                              : 'text-slate-900 border-transparent hover:border-slate-300 dark:text-slate-200 dark:hover:border-slate-700'
                          )}
                        >
                          {name}
                        </a>
                      </Link>
                    </h2>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {children}
      </section>

      <section className="relative">
        <h2 className="text-slate-900 text-xl tracking-tight font-bold mb-3 dark:text-slate-200">
          Qué leer a continuación
        </h2>
        <div className="mb-10 max-w-2xl prose prose-slate xl:mb-0 dark:prose-dark">
          <p>
            Familiarízate con algunos de los conceptos básicos que hacen que Tailwind CSS sea 
            diferente de escribir CSS tradicional.
          </p>
        </div>
        <ul className="mt-10 grid grid-cols-1 gap-x-16 gap-y-8 xl:grid-cols-2 xl:gap-y-10">
          {readNext.map((item) => (
            <li key={item.title} className="relative flex items-start">
              <IconContainer
                className={clsx('flex-none', item.icon.className)}
                light={item.icon.light}
                dark={item.icon.dark}
              />
              <div className="peer group flex-auto ml-6">
                <h3 className="mb-2 font-semibold text-slate-900 dark:text-slate-200">
                  <Link href={item.href}>
                    <a className="before:absolute before:-inset-3 before:rounded-2xl sm:before:-inset-4">
                      {item.title}
                      <svg
                        viewBox="0 0 3 6"
                        className="ml-3 w-auto h-1.5 overflow-visible inline -mt-px text-slate-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
                      >
                        <path
                          d="M0 0L3 3L0 6"
                          fill="none"
                          strokeWidth="2"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </Link>
                </h3>
                <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                  <item.body />
                </div>
              </div>
              <div className="absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100 sm:-inset-4" />
            </li>
          ))}
        </ul>
      </section>
    </BasicLayout>
  )
}
