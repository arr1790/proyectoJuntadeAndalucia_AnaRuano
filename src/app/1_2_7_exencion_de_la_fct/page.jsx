import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import ItemLista from "@/components/item-lista";


export const metadata = {
  title: "1.2.7.- Exención de la FCT"
};

export default function Home() {
  return (
    <>
      <Titulo>  {metadata.title} </Titulo>
      <Nav pos={12} />

      <div className="flex flex-col gap-4">
        <p>El módulo profesional de Formación en Centros de Trabajo nunca será susceptible de convalidación, sino de exención total o parcial. Se podrá calificar como exento por correspondencia total o parcial con la experiencia laboral demostrable relacionada con los estudios profesionales respectivos. Para ello se requiere la matriculación previa del alumno en el módulo.</p>
        <p>Se debe acreditar, tanto para la exención total como para la parcial, una experiencia laboral equivalente al trabajo a tiempo completo de, al menos, un año, que permita demostrar que la persona solicitante tiene adquiridos los resultados de aprendizaje del módulo profesional de formación en centros de trabajo. En el caso de contratos a tiempo parcial, los días de cotización deberán ser equivalentes a un año a tiempo completo.</p>
        <p>Para solicitar la exención de la FCT <span className="font-bold">deberás enviar por correo certificado, y preferiblemente con acuse de recibo, a la atención de la Dirección de tu centro</span>lo siguiente: </p>
        <div>
          <ItemLista interior={false}><span className="font-bold">Anexo I </span>(solicitud de exención) de la Orden de 28 de septiembre de 2011, por la que se regulan los módulos profesionales de formación en centros de trabajo y de proyecto para el alumnado matriculado en centros docentes de la Comunidad Autónoma de Andalucía.</ItemLista>
          <ItemLista interior={false}><span className="font-bold">Documentación acreditativa </span>que justifique la experiencia laboral.</ItemLista>
        </div>
        <div className="flex flex-col gap-4 bg-blue-200 p-6 rounded-3xl  shadow-[0_4px_6px_rgba(0,0,0,0.2)] mt-6">
          <p className="font-bold">Información sobre la exención de la FCT:</p>
          <ItemLista>Apartado&quot;¿Cómo se solicita la exención del módulo profesional de Formación en Centros de Trabajo (FCT)?&quot;,en el siguiente enlace:
          <br />
            <a
            href="https://www.juntadeandalucia.es/educacion/portals/web/formacion-profesional-andaluza/estudiante/posibilidades-tras-formarme/convalidaciones-modulos"
            target="_blank"
            title="Convalidaciones entre módulos profesionales"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800 "
          >
              Convalidaciones entre módulos profesionales
          </a></ItemLista>
        </div>
      </div>
    </>
  );
}
