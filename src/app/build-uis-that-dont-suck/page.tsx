import { SignUpForm } from "./call-to-action";
import { GridContainer } from "./grid-container";

import type { Metadata } from "next";
import { HeroSection } from "./hero-section";

import card from "./card.jpg";

export const metadata: Metadata = {
  title: "Build UIs that don't suck",
  description: "Una serie de videos gratuitos del creador de Tailwind CSS.",
  openGraph: {
    type: "website",
    title: "Build UIs that don't suck",
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
              Cuando construyes componentes de UI que son usados por <strong>decenas de miles de desarrolladores</strong>, aprendes
              a preocuparte realmente por los detalles, como:
            </p>
            <ul>
              <li>
                <strong>Construir layouts que no se rompan</strong> cuando el contenido es más largo de lo que planeaste en
                Figma
              </li>
              <li>
                Hacer que una tabla sea desplazable, <strong>sin que el contenido se recorte</strong> por el padding de la página
              </li>
              <li>
                <strong>Alinear iconos automáticamente</strong> en menús desplegables, incluso cuando algunos elementos son solo texto
              </li>
              <li>
                Hacer que una tarjeta completa sea cliqueable, <strong>sin destruir la experiencia</strong> para lectores de pantalla
              </li>
              <li>
                <strong>Ajustar finamente los objetivos de clic para móviles</strong>, sin hacer que todo lo demás sea más difícil de mantener
              </li>
              <li>
                Obtener el border radius <strong>matemáticamente perfecto</strong> en elementos anidados, sin
                hardcodear números mágicos
              </li>
            </ul>
            <p>
              <strong>“Build UIs that don’t suck”</strong> es un curso intensivo sobre algunos de los trucos más geniales que he aprendido
              a lo largo de los años construyendo cosas que necesitan ser tanto hermosas como a prueba de balas.
            </p>

            <p>
              <strong>Cada día durante una semana te enviaré una lección corta en video</strong> explicándote un
              problema interesante de UI, <strong>así como el código</strong> para que puedas jugar con él tú mismo y adaptarlo
              para tus propios proyectos.
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
