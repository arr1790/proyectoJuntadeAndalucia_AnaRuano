import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import ItemLista from "@/components/item-lista";
import image from "next/image";


export const metadata = {
  title: "1.8.- ¿Cuándo tendré noticias sobre si se ha aprobado la convalidación?"
};

export default function Home() {
  return (
    <>
      <Titulo>  { metadata.title } </Titulo>
      <Nav pos={18} />

      <div className="flex flex-col gap-4">
        <ItemLista>En primer lugar, hay que recordar que<span className="font-bold">solo se pueden convalidar módulos en los que estás debidamente matriculado. La matrícula solo se da por finalizada cuando concluya el pago de las tasas</span>Por tanto, hasta que el centro no tenga constancia del pago, no se podrá proceder a reconocer la convalidación. De esta forma, si el pago se retrasa cabría la posibilidad de que la resolución de la convalidación también se retrasara.</ItemLista>
        <ItemLista><span className="font-bold">Si la convalidación la debe resolver el Ministerio, el plazo se alarga más, ya que</span>no se puede remitir la documentación a ese organismo hasta tener la constancia del pago realizado. En los últimos años, la resolución del Ministerio ha llegado bien entrado el año nuevo.<span className="font-bold">Por eso es conveniente que presentes tu solicitud lo antes posible.</span>Una vez resuelta la convalidación, el Ministerio de Educación y Formación Profesional se pondrá directamente en contacto contigo, a través del correo electrónico que hayas facilitado en la solicitud de convalidación, para comunicarte el resultado y para que te descargues la resolución desde su Sede Electrónica. Si te han concedido la convalidación, deberás presentar la resolución en el centro para que la anoten en tu expediente académico. <span className="font-bold">Es en este momento, y no antes, cuando tienes formalmente el módulo convalidado.</span></ItemLista>
        <p className="font-bold">El Ministerio informa que se debe empezar a trabajar el módulo, con independencia de haber solicitado la convalidación, por si al llegar la resolución esta es negativa.  Durante el tiempo que el Ministerio informe al alumno/a de la resolución de la convalidación del módulo solicitado, es imprescindible que participe en las actividades a distancia (entrega de tareas, participación en foros, etc.) como obligación dentro del proceso de evaluación continua.</p>
       
        <div className=" flex justify-center mt-5">
    <img
        src="https://www.juntadeandalucia.es/educacion/gestionafp/documentacion/Informacion_tutorial/calendar-1231038_960_720.jpg"
        alt="Calendario"
        
        className="w-[300px] h-[332px] border-2 border-black"
    />
  
</div>
  
</div>

      
    </>
  );
}
