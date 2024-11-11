import Titulo from "@/components/titulo";
import Nav from "@/components/nav";


export const metadata = {
  title: "1.4.- ¿Qué organismo resuelve las convalidaciones?"
};

export default function Home() {
  return (
    <>
      <Titulo>  {metadata.title} </Titulo>
      <Nav pos={14} />

      <div className="flex flex-col gap-4">
        <p>Las convalidaciones recogidas expresamente en los <span className="font-bold">diferentes Anexos del</span>
          <a
            href="https://www.boe.es/buscar/doc.php?id=BOE-A-2020-17274"
            target="_blank"
            title="RD 1085/2020, de 9 de diciembre"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            <strong> RD 1085/2020, de 9 de diciembre</strong>
          </a>las resuelve la dirección del centro donde esté matriculado el alumno/a.Se <span className="font-bold">resolverá negativamente aquellas solicitudes de su competencia que no aparezcan en los anexos anteriormente citados.</span>
         </p>
        <p>Aquellas solicitudes que acrediten para convalidar <span className="font-bold">una titulación universitaria o un título de FP1 o FP2</span>las resuelve el<span className="font-bold">Ministerio de Educación y Formación Profesional. </span>Estas últimas convalidaciones se envían al centro y se trasladan al Ministerio.<span className="underline font-bold">En ningún caso el alumnado podrá enviar directamente la solicitud de convalidación al Ministerio.</span></p>

      </div>
    </>
  );
}
