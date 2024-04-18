"use client";
import { useRouter } from "next/navigation";

function TaskCard({ servicio }) {
  const router = useRouter();

  return (
    <section className=" sm:inline-block  ">
      
      <div
        className="cursor-pointer mt-4 ml-4 mr-4 text-xl font-semibold dark:text-white px-3 py-4 bg-gray-50 dark:bg-gray-800 hover:bg-slate-200 dark:hover:bg-slate-950"
        onClick={() => {
          router.push("/provider/" + servicio.proveedor);
        }}
      >
        <h1 className=" mb-4 text-xl font-semibold dark:text-white ">
        {servicio.proveedor}
      </h1>
        <p className=" font-thin"><span className="font-semibold">Plan: </span>{servicio.plan}</p>
        <p className=" font-thin"><span className="font-semibold">Velocidad: </span>{servicio.velocidad}</p>
        <p className=" font-thin"><span className="font-semibold">Velocidad bajada: </span>{servicio.velocidadSub}</p>
        <p className=" font-thin"><span className="font-semibold">Velocidad subida: </span>{servicio.velocidadBaj}</p>
        <p className=" font-thin"><span className="font-semibold">Tecnologia: </span>{servicio.tecnologia}</p>
        <p className=" font-thin"><span className="font-semibold">Tipo IP: </span>{servicio.ip}</p>
        <p className=" font-thin"><span className="font-semibold">Precio de instalacion: </span>{servicio.instalacion}</p>
        <p className=" font-thin"><span className="font-semibold">Precio de lista: </span>{servicio.precioLista}</p>
        <p className=" font-thin"><span className="font-semibold">Precion con descuento: </span>{servicio.precioDesc}</p>
        <p className=" font-thin"><span className="font-semibold">Atencion al cliente: </span>{servicio.atencionCl}</p>
        <p className=" font-thin"><span className="font-semibold">Datos extra: </span>{servicio.descripcion}</p>
      </div>
    </section>
  );
}

export default TaskCard;
