"use client";
import { useRouter } from "next/navigation";

function TaskCardAdmin({ servicio }) {
  const router = useRouter();

  return (
    <section className=" sm:inline-block ">
      <h1 className=" ml-4 mt-4 mr-4 text-xl font-semibold dark:text-white  px-3 py-4 bg-gray-50 dark:bg-gray-800">
        {servicio.proveedor}
      </h1>
      <div
        className=" ml-4 mr-4 text-xl font-semibold dark:text-white px-3 py-4 bg-gray-50 dark:bg-gray-800"
        onClick={() => {
          router.push("/tasks/edit/" + servicio.id);
        }}
      >
        <p className=" font-thin">{servicio.plan}</p>
        <p className=" font-thin">{servicio.velocidad}</p>
        <p className=" font-thin">{servicio.velocidadSub}</p>
        <p className=" font-thin">{servicio.velocidadBaj}</p>
        <p className=" font-thin">{servicio.tecnologia}</p>
        <p className=" font-thin">{servicio.ip}</p>
        <p className=" font-thin">{servicio.instalacion}</p>
        <p className=" font-thin">{servicio.precioLista}</p>
        <p className=" font-thin">{servicio.precioDesc}</p>
        <p className=" font-thin">{servicio.atencionCl}</p>
        <p className=" font-thin">{servicio.descripcion}</p>
      </div>
    </section>
  );
}

export default TaskCardAdmin;
