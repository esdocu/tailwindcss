import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { InstallationLayout } from '@/layouts/InstallationLayout'
import Link from 'next/link'

import { ReactComponent as NextJsLogo } from '@/img/guides/nextjs.svg'
import { ReactComponent as NextJsLogoWhite } from '@/img/guides/nextjs-white.svg'
import { ReactComponent as SvelteLogo } from '@/img/guides/svelte.svg'
import { ReactComponent as LaravelLogo } from '@/img/guides/laravel.svg'
import { ReactComponent as ViteLogo } from '@/img/guides/vite.svg'
import { ReactComponent as NuxtJsLogo } from '@/img/guides/nuxtjs.svg'
import { ReactComponent as GatsbyLogo } from '@/img/guides/gatsby.svg'
import { ReactComponent as CraLogo } from '@/img/guides/cra.svg'
import { ReactComponent as AngularLogo } from '@/img/guides/angular.svg'
import { ReactComponent as AngularLogoWhite } from '@/img/guides/angular-white.svg'
import { ReactComponent as RemixLogo } from '@/img/guides/remix.svg'
import { ReactComponent as RemixLogoWhite } from '@/img/guides/remix-white.svg'
import { ReactComponent as RailsLogo } from '@/img/guides/rails.svg'
import { ReactComponent as RailsLogoWhite } from '@/img/guides/rails-white.svg'
import PhoenixLogo from '@/img/guides/phoenix.png'
import ParcelLogo from '@/img/guides/parcel.png'

export default function FrameworkGuides() {
  return (
    <InstallationLayout>
      <div id="content-wrapper" className="prose prose-slate mb-10 max-w-3xl dark:prose-dark">
        <h3 className="sr-only">Guías para Frameworks</h3>
        <p>
          Guías específicas de frameworks que cubren nuestro enfoque recomendado para instalar 
          Tailwind CSS en varios entornos populares.
        </p>
      </div>
      <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
        {[
          {
            name: 'Next.js',
            slug: 'nextjs',
            description: 'React framework con todas las funciones y una gran experiencia de desarrollador.',
            logo: NextJsLogo,
            logoDark: NextJsLogoWhite,
          },
          {
            name: 'Laravel',
            slug: 'laravel',
            description: 'Framework de aplicación web PHP con sintaxis expresiva y elegante.',
            logo: LaravelLogo,
          },
          {
            name: 'Vite',
            slug: 'vite',
            description: 'Servidor de desarrollo rápido y moderno y herramienta de compilación.',
            logo: ViteLogo,
          },
          {
            name: 'Nuxt.js',
            slug: 'nuxtjs',
            description: 'Framework Vue intuitivo para crear aplicaciones universales.',
            logo: NuxtJsLogo,
          },
          {
            name: 'Gatsby',
            slug: 'gatsby',
            description: 'Framework para construir sitios estáticos con React y GraphQL.',
            logo: GatsbyLogo,
          },
          {
            name: 'Create React App',
            slug: 'create-react-app',
            description: 'Herramienta CLI para montar una nueva aplicación React de una sola página.',
            logo: CraLogo,
          },
          {
            name: 'SvelteKit',
            slug: 'sveltekit',
            description: 'La forma más rápida de crear aplicaciones de todos los tamaños con Svelte.js.',
            logo: SvelteLogo,
          },
          {
            name: 'Angular',
            slug: 'angular',
            description: 'Plataforma para la creación de aplicaciones web móviles y de escritorio.',
            logo: AngularLogo,
            logoDark: AngularLogoWhite,
          },
          {
            name: 'Ruby on Rails',
            slug: 'ruby-on-rails',
            description:
              'Framework full-stack con todas las herramientas necesarias para crear aplicaciones web sorprendentes.',
            logo: RailsLogo,
            logoDark: RailsLogoWhite,
          },
          {
            name: 'Remix',
            slug: 'remix',
            description: 'Full stack framework centrado en los fundamentos web y una moderna experiencia de usuario.',
            logo: RemixLogo,
            logoDark: RemixLogoWhite,
          },
          {
            name: 'Phoenix',
            slug: 'phoenix',
            description: 'Un framework para construir aplicaciones ricas e interactivas con Elixir.',
            logo: () => (
              <img
                src={PhoenixLogo}
                alt="Phoenix"
                role="presentation"
                className="w-10 h-10 object-contain object-center"
              />
            ),
          },
          {
            name: 'Parcel',
            slug: 'parcel',
            description: 'La herramienta de compilación de configuración cero para la web.',
            logo: () => (
              <img
                src={ParcelLogo}
                alt="Parcel"
                role="presentation"
                className="w-10 h-10 object-contain object-center"
              />
            ),
          },
        ].map(({ name, description, logo: Logo, logoDark: LogoDark, slug }) => (
          <li key={name} className="relative flex flex-row-reverse">
            <div className="peer group ml-6 flex-auto">
              <h4 className="mb-2 leading-6 text-slate-900 font-semibold dark:text-slate-200">
                <Link href={`/docs/guides/${slug}`}>
                  <a className="before:absolute before:-inset-3 before:rounded-2xl">
                    {name}
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
              </h4>
              <p className="text-sm leading-6 text-slate-700 dark:text-slate-400">{description}</p>
            </div>
            <div className="flex-none w-14 h-14 rounded-full bg-white ring-1 ring-slate-900/5 shadow flex items-center justify-center overflow-hidden dark:bg-slate-800 dark:highlight-white/5">
              {LogoDark !== undefined ? (
                <>
                  <Logo className="block dark:hidden" />
                  <LogoDark className="hidden dark:block" />
                </>
              ) : (
                <Logo className="dark:block" />
              )}
            </div>
            <div className="absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100" />
          </li>
        ))}
      </ul>
      <div className="mt-16 prose prose-slate max-w-3xl dark:prose-dark">
        <p>
          ¿No ves el framework de tu elección? Intenta usar{' '}
          <Link href="/docs/installation">
            <a>Tailwind CLI</a>
          </Link>{' '}
          o instala Tailwind{' '}
          <Link href="/docs/installation/using-postcss">
            <a>como un complemento de PostCSS</a>
          </Link>{' '}
          en su lugar.
        </p>
      </div>
    </InstallationLayout>
  )
}

FrameworkGuides.layoutProps = {
  meta: {
    title: 'Instalación: Guías para Frameworks',
    section: 'Empezando',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
