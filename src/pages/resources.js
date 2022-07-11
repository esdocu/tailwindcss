import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { Button } from '@/components/Button'
import clsx from 'clsx'
import { BasicLayout } from '@/layouts/BasicLayout'
import { ReactComponent as DiscordIcon } from '@/img/icons/discord.svg'
import { ReactComponent as GitHubIcon } from '@/img/icons/github.svg'

function CardGroup({ children, className }) {
  return (
    <ul className={clsx('grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start', className)}>
      {children}
    </ul>
  )
}

function Card({ title, superTitle, href, color, body, image, button }) {
  return (
    <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
      <div className="order-1 sm:ml-6 xl:ml-0">
        <h3 className="mb-1 text-slate-900 font-semibold dark:text-slate-200">
          {button ? (
            <>
              <span className={clsx('mb-1 block text-sm leading-6', color)}>{superTitle}</span>
              {title}
            </>
          ) : (
            <a
              href={href}
              className={clsx(
                'before:absolute before:inset-0',
                !button && 'hover:text-slate-600 dark:hover:text-white'
              )}
            >
              <span className={clsx('mb-1 block text-sm leading-6', color)}>{superTitle}</span>
              {title}
            </a>
          )}
        </h3>
        <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">{body}</div>
        {button && (
          <Button href={href} className="mt-6">
            {button}
          </Button>
        )}
      </div>
      <img
        src={image}
        alt=""
        className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
        width="1216"
        height="640"
      />
    </li>
  )
}

function Icon({ children, className }) {
  return (
    <div
      className={clsx(
        'relative pt-full rounded-full ring-1 ring-inset ring-slate-900/5',
        className
      )}
    >
      <div className="absolute inset-0 flex items-center justify-center">{children}</div>
    </div>
  )
}

export default function Resources() {
  return (
    <BasicLayout>
      <header className="mb-20 max-w-xl">
        <p className="mb-4 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400">
          Recursos
        </p>
        <h1 className="mb-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200">
          Todo lo demás que necesitas para crear increíbles sitios web Tailwind CSS
        </h1>
        <p className="text-lg text-slate-700 dark:text-slate-400">
          Creemos que Tailwind es un framework CSS increíble, pero necesitas más que un 
          framework CSS para producir un trabajo visualmente asombroso.
        </p>
      </header>

      <div className="space-y-16">
        <section>
          <h2 className="mb-2 text-2xl leading-7 tracking-tight text-slate-900 font-bold dark:text-slate-200">
            Recursos de diseño
          </h2>
          <div className="mb-10 prose prose-slate text-slate-600 max-w-3xl dark:prose-dark">
            <p>
              El diseño es difícil, por lo que creamos algunos recursos para ayudarte. Estos recursos 
              son una excelente manera de ayudarte con tus diseños y una excelente manera de apoyar 
              el desarrollo del framework.
            </p>
          </div>

          <ul className="sm:space-y-6">
            {[
              {
                title: 'Refactoring UI',
                description: 'Aprende diseño UI',
                images: [
                  require('@/img/resources/refactoringui-small@75.jpg').default,
                  require('@/img/resources/refactoringui@75.jpg').default,
                ],
                color: 'text-blue-500',
                href: 'https://refactoringui.com',
                body: (
                  <>
                    <p>
                      Refactoring UI es una serie de videos y libros de diseño para desarrolladores 
                      elaborados por Adam Wathan y Steve Schoger. Cubre literalmente todo lo que 
                      sabemos sobre cómo hacer que las cosas se vean geniales.
                    </p>
                    <p>
                      Casi 10,000 personas lo han elegido hasta ahora y tienen todo tipo de cosas 
                      increíbles que decir sobre cómo les ayudó a mejorar su trabajo.
                    </p>
                  </>
                ),
              },
              {
                title: 'Tailwind UI',
                description: 'Hermosos componentes UI, creados por los creadores de Tailwind CSS',
                images: [
                  require('@/img/resources/tailwindui-small@75.jpg').default,
                  require('@/img/resources/tailwindui@75.jpg').default,
                ],
                color: 'text-sky-500',
                href: 'https://tailwindui.com',
                body: (
                  <>
                    <p>
                      Tailwind UI es una colección de fragmentos HTML diseñados profesionalmente, 
                      preconstruidos y totalmente responsive que puedes incluir en tus proyectos de Tailwind.
                    </p>
                    <p>
                      Actualmente hay más de 550 componentes disponibles en tres categorías diferentes 
                      (Marketing, Interfaz de usuario de aplicaciones y Comercio electrónico) 
                      y siempre estamos agregando más.
                    </p>
                  </>
                ),
              },
            ].map(({ title, description, images, color, body, href }) => (
              <li
                key={title}
                className="-mx-4 p-4 pb-10 bg-slate-50 flex flex-col-reverse items-start sm:mx-0 sm:p-10 sm:rounded-2xl xl:flex-row dark:bg-slate-800/50"
              >
                <div className="flex-auto">
                  <h3 className={clsx('mb-4 text-sm leading-6 font-semibold', color)}>{title}</h3>
                  <p className="mb-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-200">
                    {description}
                  </p>
                  <div className="mb-6 text-sm leading-6 text-slate-600 space-y-4 dark:text-slate-400">
                    {body}
                  </div>
                  <Button
                    href={href}
                    color={[
                      'bg-slate-700 text-white hover:bg-slate-800 focus:ring-offset-2 focus:ring-offset-slate-50 focus:ring-slate-400 dark:focus:ring-offset-0',
                      'text-slate-300 group-hover:text-slate-200',
                    ]}
                    darkColor="gray"
                  >
                    Conoce más<span className="sr-only">, {title}</span>
                  </Button>
                </div>
                <div className="w-full flex-none mb-10 xl:mb-0 xl:ml-8 xl:w-[29rem]">
                  <div className="aspect-w-[1216] aspect-h-[606] sm:aspect-w-[1376] sm:aspect-h-[664] shadow-lg rounded-lg bg-slate-100 overflow-hidden dark:bg-slate-800">
                    <picture>
                      <source type="image/jpeg" srcSet={images[1]} media="(min-width: 640px)" />
                      <img src={images[0]} alt="" />
                    </picture>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-2xl leading-7 tracking-tight text-slate-900 font-bold dark:text-slate-200">
            Recursos adicionales
          </h2>
          <div className="mb-10 prose prose-slate text-slate-600 max-w-3xl dark:prose-dark">
            <p>
              Tailwind no es el único proyecto de código abierto que mantenemos. Hemos creado 
              algunos otros recursos para ayudarte con tu flujo de trabajo de diseño y desarrollo.
            </p>
          </div>

          <CardGroup>
            {[
              {
                superTitle: 'Headless UI',
                title: 'Componentes UI totalmente accesibles y sin estilo',
                body: (
                  <p>
                    Componentes UI completamente accesibles y sin estilo, diseñados para integrarse 
                    a la perfección con Tailwind CSS.
                  </p>
                ),
                href: 'https://headlessui.dev',
                image: require('@/img/resources/headlessui@75.jpg').default,
                color: 'text-indigo-500',
              },
              {
                superTitle: 'Heroicons',
                title: 'Hermosos íconos SVG hechos a mano por los creadores de Tailwind CSS.',
                body: (
                  <p>
                    Un conjunto de más de 450 íconos SVG gratuitos con licencia del MIT. Disponible 
                    como íconos SVG básicos y a través de bibliotecas propias de React y Vue.
                  </p>
                ),
                href: 'https://heroicons.com',
                image: require('@/img/resources/heroicons@75.jpg').default,
                color: 'text-purple-500',
              },
              {
                superTitle: 'Hero Patterns',
                title: 'Patrones de fondo SVG impecables de los creadores de Tailwind CSS.',
                body: (
                  <p>
                    Una colección de más de 100 patrones SVG gratuitos de alta calidad con 
                    licencia del MIT para que los uses en tus proyectos web.
                  </p>
                ),
                href: 'https://heropatterns.com',
                image: require('@/img/resources/heropatterns@75.jpg').default,
                color: 'text-cyan-500',
              },
            ].map((card) => (
              <Card
                key={card.title}
                button={
                  <>
                    Conoce más<span className="sr-only">, {card.title}</span>
                  </>
                }
                {...card}
              />
            ))}
          </CardGroup>
        </section>

        <section className="border-t border-slate-100 pt-16 dark:border-slate-200/5">
          <h2 className="mb-2 text-xl tracking-tight text-slate-900 font-bold dark:text-slate-200">
            Screencasts
          </h2>
          <div className="mb-10 prose prose-slate text-slate-600 max-w-3xl dark:prose-dark">
            <p>
              Dirígete a nuestro canal oficial de YouTube y sumérgete en docenas de videos que te 
              enseñarán todo, desde los conceptos básicos de Tailwind hasta conceptos avanzados.
            </p>
          </div>

          <CardGroup className="mb-10">
            {[
              {
                superTitle: 'Fundamentos',
                title: 'Traducir un sistema de diseño personalizado a Tailwind CSS',
                body: (
                  <p>
                    Aprende a configurar Tailwind para crear tu propio marco de utilidad 
                    ajustado específicamente para tu proyecto.
                  </p>
                ),
                href: 'https://www.youtube.com/watch?v=cZc4Jn5nK3k',
                image: require('@/img/resources/translating-design-system@75.jpg').default,
                color: 'text-sky-500',
              },
              {
                superTitle: 'Fundamentos',
                title: 'Agregar Tailwind CSS a un proyecto existente',
                body: (
                  <p>
                    Aprende a agregar Tailwind CSS a un proyecto existente sin encontrarte con 
                    colisiones de nombres o problemas de especificidad.
                  </p>
                ),
                href: 'https://www.youtube.com/watch?v=oG6XPy1t1KA',
                image: require('@/img/resources/existing-project@75.jpg').default,
                color: 'text-pink-500',
              },
              {
                superTitle: 'Como lo construiríamos',
                title:
                  'Creación de una tienda de comercio electrónico Headless con Tailwind CSS, Shopify y Next.js',
                body: (
                  <p>
                    Obtén productos de una tienda Shopify usando la API de GraphQL y ensambla 
                    las páginas usando la interfaz de usuario de Tailwind.
                  </p>
                ),
                href: 'https://www.youtube.com/watch?v=xNMYz74zNHM',
                image: require('@/img/resources/ecommerce-store@75.jpg').default,
                color: 'text-indigo-500',
              },
            ].map((card) => (
              <Card key={card.title} {...card} />
            ))}
          </CardGroup>

          <Button href="https://www.youtube.com/tailwindlabs">Ver todos nuestros screencasts</Button>
        </section>

        <section className="border-t border-slate-100 pt-16 dark:border-slate-200/5">
          <h2 className="mb-2 text-xl tracking-tight text-slate-900 font-bold dark:text-slate-200">
            Conéctate y contribuye
          </h2>
          <div className="mb-10 prose prose-slate text-slate-600 max-w-3xl dark:prose-dark">
            <p>
              Ya sea que seas un usuario principiante o avanzado, involucrarse en la comunidad de 
              Tailwind es una excelente manera de conectarse con personas de ideas afines que 
              están creando cosas increíbles con el framework.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2">
            {[
              {
                title: 'Discord',
                href: '/discord',
                description:
                  'Únete a más de 10,000 miembros en el grupo de Discord para conversar sobre Tailwind y otros temas relacionados.',
                icon: (
                  <Icon className="bg-[#838CF1]/[0.15] dark:bg-indigo-700">
                    <DiscordIcon className="w-6 h-auto dark:fill-indigo-200" />
                  </Icon>
                ),
                className:
                  'ring-1 ring-slate-900/10 dark:bg-indigo-500 dark:ring-0 dark:highlight-white/20',
              },
              {
                title: 'GitHub Discussions',
                href: 'https://github.com/tailwindlabs/tailwindcss/discussions',
                description:
                  '¿Tienes algún problema con tu proyecto? Conéctate con otros miembros de la comunidad de Tailwind para obtener ayuda.',
                icon: (
                  <Icon className="bg-slate-100 dark:bg-slate-800">
                    <GitHubIcon className="w-7 h-auto dark:fill-slate-400" />
                  </Icon>
                ),
                className:
                  'ring-1 ring-slate-900/10 dark:bg-slate-600 dark:ring-0 dark:highlight-white/20',
              },
            ].map(({ title, href, description, icon, className }) => (
              <li key={title} className="relative flex flex-row-reverse">
                <div className="peer group flex-auto ml-6">
                  <h3 className="mb-2 font-semibold text-slate-900 dark:text-slate-200">
                    <a
                      href={href}
                      className="before:absolute before:-inset-3 before:rounded-2xl sm:before:-inset-4"
                    >
                      {title}
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
                  </h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {description}
                  </p>
                </div>
                <div
                  className={clsx(
                    'flex-none w-16 h-16 p-[0.1875rem] rounded-full shadow overflow-hidden pointer-events-none',
                    className
                  )}
                >
                  {icon}
                </div>
                <div className="absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100 sm:-inset-4" />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </BasicLayout>
  )
}

Resources.layoutProps = {
  meta: {
    title: 'Recursos',
  },
  Layout: DocumentationLayout,
}
