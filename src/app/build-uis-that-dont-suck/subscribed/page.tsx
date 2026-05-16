import { Logo } from "@/components/logo";
import { GridContainer } from "../grid-container";

export default async function Course() {
  return (
    <div className="dark relative grid min-h-dvh grid-cols-1 place-items-center px-4 py-8 sm:px-0">
      <div>
        <GridContainer>
          <div className="flex justify-center p-2">
            <Logo className="h-7" />
          </div>
        </GridContainer>
        <div className="mt-6 space-y-4">
          <GridContainer>
            <h1 className="text-center text-5xl tracking-tighter text-balance text-white lg:text-8xl">
              Revisa tu correo.
            </h1>
          </GridContainer>
          <GridContainer>
            <p className="mx-auto max-w-xl text-center text-lg/7 font-medium text-pretty text-gray-400">
              Deberías recibir un correo de confirmación en cualquier momento —{" "}
              <strong className="font-medium text-white">ábrelo</strong> y{" "}
              <strong className="font-medium text-white">confirma tu correo</strong> y te enviaré el primer video.
            </p>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
