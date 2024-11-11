import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import ItemLista from "@/components/item-lista";
import Image from "next/image";


export const metadata = {
  title: "1.2.- ¿Dónde encontrar qué módulos son convalidables?"
};

export default function Home() {
  return (
    <>
      <Titulo>  {metadata.title} </Titulo>
      <Nav pos={5} />

      <div className="flex flex-col gap-4 ">
        <p>Son dos los documentos que debes consultar:</p>
        <div>
        <ItemLista>Por un lado, los diferentes <span className="font-bold">Anexos de </span> <a
          href="https://www.boe.es/buscar/doc.php?id=BOE-A-2020-17274"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline" >
          Real Decreto 1085/2020, de 9 de diciembre, por el que se establecen convalidaciones de módulos profesionales de los títulos de Formación Profesional del sistema educativo español y las medidas para su aplicación, y se modifica el Real Decreto 1147/2011, de 29 de julio, por el que se establece la ordenación general de la formación profesional del sistema educativo.
        </a>Aquí puedes consultar las tablas de convalidaciones del Real decreto 1085/2020, de 9 de diciembre <a
          href="https://www.todofp.es/convalidaciones-equivalencias-homologaciones/convalidaciones/normativa-de-apoyo.html"
          target="_blank"
          title="tablas de convalidación"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
            (tablas de convalidación). </a></ItemLista>
        <ItemLista>Por otro,el <span className="font-bold"> Anexo IV del Real Decreto </span>
          que crea el título LOE que estás estudiando, ya que establece las convalidaciones con módulos LOGSE del mismo Ciclo. Quien haya superado la totalidad de un ciclo formativo LOGSE no podrá aportarlo para solicitar la convalidación de ningún módulo profesional del ciclo formativo LOE que lo sustituye. Estas convalidaciones están reservadas para quien transita a un ciclo formativo LOE desde un ciclo formativo LOGSE, sin haberlo finalizado ni obtenido el título.
        </ItemLista>
        </div>
        <p>Ten en cuenta que los<span className="font-bold"> módulos profesionales con el mismo código y denominación </span>presentes en diferentes ciclos formativos LOE <span className="font-bold"> son en realidad el mismo módulo profesional.</span>Estos módulos se denominan <span className="font-bold">transversales</span>Si superas un módulo profesional transversal en un ciclo formativo, lo tendrás superado en cualquier otro del que también forme parte y<span className="font-bold">la calificación obtenida se traslada de un ciclo al otro sin necesidad de convalidación ni más trámite.</span></p>
        <p>Los módulos profesionales de FOL y EIE tienen en todos los ciclos formativos LOE la misma denominación, pero diferentes códigos. Por tanto, no hay arrastre de calificación sino convalidación. Se deben cursar o convalidar de un ciclo formativo a otro (siempre que se cumplan los requerimientos para ello).</p>
       
        <div>
        <ItemLista>La convalidación del módulo FOL puedes consultarla en el siguiente enlace:
    <a
        href="https://www.todofp.es/convalidaciones-equivalencias-homologaciones/convalidaciones.html"
        target="_blank"
        rel="noopener noreferrer"  
        title="Convalidación de FOL"
        className="text-blue-600 hover:text-blue-800 underline"
    >
        Convalidación de FOL
    </a>.
</ItemLista>
    <ItemLista>
        La convalidación del módulo EIE puedes consultarla en el siguiente enlace:
        <a
            href="https://www.todofp.es/convalidaciones-equivalencias-homologaciones/convalidaciones.html"
            target="_blank"
            rel="noopener noreferrer"  
            title="Convalidación de EIE"
            className="text-blue-600 hover:text-blue-800 underline"
        >
            Convalidación de EIE
        </a>.
    </ItemLista>
</div>

        
        <Image
          src="https://www.juntadeandalucia.es/educacion/gestionafp/documentacion/Informacion_tutorial/school-1661730_960_720.jpg"
          alt="Leyendo leyes"
          width={960}
          height={720}
          className="self-center w-[600px]  border-2 border-black" />
      </div>
    </>
  );
}
