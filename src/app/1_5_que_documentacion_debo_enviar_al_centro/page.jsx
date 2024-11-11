import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import ItemLista from "@/components/item-lista";
import Image from "next/image";


export const metadata = {
  title: "1.5.- ¿Qué documentación debo enviar al centro?"
};

export default function Home() {
  return (
    <>
      <Titulo>  {metadata.title} </Titulo>
      <Nav pos={15} />

      <div className="flex flex-col gap-4">
        <p>Debes presentar la solicitud de convalidación de módulos profesionales, acompañada de la documentación establecida correspondiente, en el centro.
          <span className="font-bold"> En ningúno caso el alumno podrá enviar directamente la solicitud de convalidación al Ministerio.</span>
        </p>
        <ItemLista ><span className="font-bold">Solicitud de convalidación </span> que encuentras en este
          <a
            href=" https://www.juntadeandalucia.es/educacion/portals/web/formacion-profesional-andaluza/estudiante/posibilidades-tras-formarme/convalidaciones-modulos"
            target="_blank"
            title="Convalidaciones entre módulos profesionales"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            <strong> enlace (ver &quot;Impreso solicitud convalidación módulos profesionales&quot;)</strong>
          </a>.
          En ese documento es imprescindible que cumplimentes todos los apartados.En este
          <a
            href="https://www.juntadeandalucia.es/educacion/secretariavirtual/consulta/oferta-educativa-formacion-profesional-parcial/"
            target="_blank"
            title="Oferta de centros docentes sostenidos con fondos públicos para el procedimiento de admisión en oferta parcial diferenciada (modalidades presencial, semipresencial y distancia) para el curso escolar"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            <strong> enlace</strong>
          </a>
          puedes consultar los módulos de cada ciclo impartido con <span className="font-bold">su nombre y el código exacto. Para ello, debes desplegar dentro de cada centro, el apartado &quot;Módulos ofertados de este ciclo&quot;. Recuerda que el plazo para enviar la solicitud de convalidación concluye a finales de octubre.</span>
        </ItemLista>
        <ItemLista>
          <span className="font-bold">Fotocopia del Documento Nacional de Identidad</span>(DNI) o fotocopia del Pasaporte o de la Tarjeta de Extranjero/a o del Permiso de Residencia (temporal o definitivo) o del Visado de Estudios.
        </ItemLista>
        <div>
        <ItemLista>
        Además, debe incluirse la siguiente documentación,
          <span className="font-bold">ya sea original o fotocopia compulsada</span>(recuerda que puedes compulsar un documento en cualquier Administración Pública que cuente con registro simplemente presentando la copia y enseñando el original):</ItemLista> 
         
        <ItemLista interior={true}> <span className="font-bold">Certificación académica oficial expedida por el centro docente donde has cursado los estudios que alegas</span> .En el caso de estudios universitarios, es obligatorio presentar original o fotocopia compulsada de la certificación académica oficial, con indicación de las horas o créditos de cada materia superada. </ItemLista> </div>
        <ItemLista interior={true}> <span className="font-bold">En el caso de alegar un título que acredite la formación previa alegada, debes presentar el título oficial o resguardo de haberlo solicitado. </span> En el caso de que desees convalidar alegando haber cursado otro ciclo formativo, es suficiente con el certificado académico de notas y no es necesario que adjuntes también la copia del título o el resguardo de haberlo solicitado..</ItemLista>
        <ItemLista interior={true}> <span className="font-bold">En el caso de alegar enseñanzas universitarias, además de la certificación académica oficial con indicación de las horas o créditos de cada materia superada, deberás presentar los programas de las asignaturas que haya cursado sellados  </span> <span className="underline">(el sello debe ser original y no vale una fotocopia del programa en el que el sello no sea original) por el centro universitario</span> Estos programas deben recoger la <span className="font-bold">duración y contenidos teóricos y prácticos estudiados</span>
        </ItemLista>
        <ItemLista interior={true}> <span className="font-bold">En el caso de alegar unidades de competencia oficialmente acreditadas, certificación oficial de la acreditación de la Unidad de Competencia o Certificado de profesionalidad expedido por la Administración Laboral competente, obtenido de acuerdo con lo establecido en el RD 34/2008, de 18 de enero.</span> </ItemLista>
        <p> <span className="font-bold">Aunque ya se ha dicho anteriormente, se recuerda que todos <span className="underline">los documentos (excepto el DNI y el documento de la solicitud de convalidación) tienen que ser original o copia compulsada. También se recuerda que el centro no puede tramitar ante el Ministerio de Educación ninguna solicitud que no venga acompañada de la documentación establecida.</span></span></p>
      <p><span className="underline font-bold">El solicitante deberá estar matriculado en los módulos profesionales que solicita convalidar y haber satisfecho los derechos de matrícula en las enseñanzas para las cuales solicita la convalidación.</span></p>
      <p><span className="font-bold">Las convalidaciones entre estudios universitarios y de Formación Profesional se podrán solicitar cuando estos últimos pertenezcan al espacio de la educación superior. </span> Además, el número de módulos profesionales de los ciclos de grado superior convalidados<span className="font-bold"> no podrá superar el 60% de la totalidad de créditos ECTS</span> establecidos en el real decreto por el que se establece el título Técnico Superior y se fijan los aspectos básicos del currículo, siempre que se aporten <span className="font-bold">enseñanzas universitarias que estén relacionadas con el campo de conocimiento y exista similitud entre las competencias, conocimientos y resultados de aprendizaje.</span></p>
      <div class="flex justify-center">
    <img 
        src="https://www.juntadeandalucia.es/educacion/gestionafp/documentacion/Informacion_tutorial/documents-158461_960_720.png" 
        alt="Documentos" 
        title="Documentos" 
        class="w-[300px] h-[332px] border-2 border-black" 
    />
</div>
     
      </div>
    </>
  );
}
