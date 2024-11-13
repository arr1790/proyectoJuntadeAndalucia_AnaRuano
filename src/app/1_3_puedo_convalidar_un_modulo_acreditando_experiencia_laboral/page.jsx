import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import Image from "next/image";


export const metadata = {
  title: "1.3.- ¿Puedo convalidar un módulo acreditando experiencia laboral?"
};

export default function Home() {
  return (
    <>
      <Titulo>  {metadata.title} </Titulo>
      <Nav pos={13} />

      <div className="flex flex-col gap-4 md:flex-row">

        <div className="flex flex-col gap-4">
          <p>
            <span className="font-bold">Salvo el módulo de Formación en Centros de Trabajo </span>
            <span className="italic"> (las &quot;prácticas&quot;),</span>
            <span className="font-bold"> la respuesta es no.</span>
            En general, <span className="font-bold"> no es posible convalidar un módulo acreditando experiencia laboral a través de un informe de vida laboral.</span>
          </p>

          <p className="flex justify-between items-start">
            <span>
              Si alguna persona cree que con su experiencia profesional ha adquirido las competencias necesarias de un módulo concreto, debe acreditar la posesión de esas unidades de competencia bien mediante un <span className="font-bold">certificado de profesionalidad</span> o bien porque ha participado en un
              <a
                href="https://www.todofp.es/acreditacion-de-competencias.html"
                target="_blank"
                title="procedimiento de acreditación de competencias profesionales"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                <strong> procedimiento de acreditación de competencias profesionales</strong>
              </a>
              y así se lo han reconocido, <span className="underline">no a través de un certificado de vida laboral.</span>
              <span className="font-bold"> Tampoco serán válidos los resguardos de haber solicitado el certificado de profesionalidad, los diplomas o certificados de asistencia expedidos por el centro o entidad de formación, u otros documentos justificativos distintos de los indicados.</span> Estas convalidaciones se regulan en el anexo V.A del Real Decreto que crea el título que se está estudiando (en este anexo se indican las unidades de competencia que se adquieren al superar cada módulo profesional).
            </span>
          </p>
          <p>
            Por tanto, <span className="font-bold">las unidades de competencia debidamente acreditadas pueden ser aportadas para solicitar la convalidación de módulos profesionales según lo regulado en el anexo V.A del Real Decreto</span> que regula cada título siempre que se aporte el <span className="font-bold">certificado de profesionalidad</span> o en la <span className="font-bold">certificación oficial de la acreditación de la Unidad de Competencia.</span>
          </p>
        </div>
        <Image
          src="https://www.juntadeandalucia.es/educacion/gestionafp/documentacion/Informacion_tutorial/industrial-1636390_960_720.jpg"
          alt="Trabajo"
          width={960}
          height={642}
          className="w-[300px]  border-2 border-black ml-4" // Margen a la izquierda para separar la imagen del texto
        />

      </div>





    </>
  );
}
