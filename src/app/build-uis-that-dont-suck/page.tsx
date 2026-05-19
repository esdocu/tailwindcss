import { SignUpForm } from "./call-to-action";
import { GridContainer } from "./grid-container";

import type { Metadata } from "next";
import { HeroSection } from "./hero-section";

import card from "./card.jpg";

export const metadata: Metadata = {
  title: "Crea UIs que no apesten",
  description: "Una serie de videos gratuitos del creador de Tailwind CSS.",
  openGraph: {
    type: "website",
    title: "Crea UIs que no apesten",
    description: "Una serie de videos gratuitos del creador de Tailwind CSS.",
    images: card.src,
    url: "https://tailwindcss.com/build-uis-that-dont-suck",
  },
};

export default async function Course() {
  return (
    <div className="dark relative px-4 py-8 sm:px-0">
      <header>
        <HeroSection />
      </header>
      <main className="pt-14 pb-28">
        <GridContainer>
          <div className="max-w-xl space-y-8 text-base/7 text-gray-400 marker:text-white/60 **:[li]:pl-2 **:[strong]:font-medium **:[strong]:text-white **:[ul]:list-[square] **:[ul]:space-y-4 **:[ul]:pl-8">
            <p>
              Cuando creas componentes de UI que son utilizados por <strong>decenas de miles de desarrolladores</strong>
              , aprendes a preocuparte realmente por los detalles, como:
            </p>
            <ul>
              <li>
                <strong>Crear diseños que no se rompan</strong> cuando el contenido sea más largo de lo planeado en
                Figma
              </li>
              <li>
                Hacer que una tabla tenga scroll, <strong>sin que el contenido se recorte</strong> por el padding de la
                página
              </li>
              <li>
                <strong>Alinear iconos automáticamente</strong> en menús desplegables, incluso cuando algunos elementos
                son solo texto
              </li>
              <li>
                Hacer que una tarjeta completa sea cliqueable, <strong>sin destruir la experiencia</strong> para
                lectores de pantalla
              </li>
              <li>
                <strong>Ajustar con precisión las áreas de clic para móviles</strong>, sin complicar el mantenimiento de
                todo lo demás
              </li>
              <li>
                Conseguir que el border-radius sea <strong>matemáticamente perfecto</strong> en elementos anidados, sin
                usar valores fijos aleatorios
              </li>
            </ul>
            <p>
              <strong>“Crea UIs que no apesten”</strong> es un curso intensivo sobre algunos de los mejores trucos que
              he aprendido a lo largo de los años construyendo cosas que deben ser tanto hermosas como a prueba de
              balas.
            </p>

            <p>
              <strong>Todos los días durante una semana te enviaré una videolección corta</strong> guiándote a través de
              un problema de UI interesante, <strong>así como el código</strong> para que puedas experimentar por tu
              cuenta y adaptarlo a tus propios proyectos.
            </p>
          </div>
          <div className="mt-8">
            <SignUpForm />
          </div>
        </GridContainer>
      </main>
    </div>
  );
}
