import { prisma } from "../../../libs/prisma";
import TaskCard from "../../../components/TaskCard";

 
async function getServiciosByProveedor(proveedorName) {
    const servicios = await prisma.servicio.findMany({
    where: {
      proveedor: { equals: proveedorName }, // Filter by exact match with 'Claro'
    },
  });

  return servicios;
}

export const dynamic = "force-dynamic";

async function PersonalPage() {
  const servicio = await getServiciosByProveedor("Personal");
  

  return (
    <section className="container sm:ml-64 ">
      <h1 className=" ml-4 mr-4 relative overflow-x-auto text-xl font-semibold dark:text-white h-full px-3 py-4 bg-gray-50 dark:bg-gray-800">
        Proveedor Personal
      </h1>
      <div>
        {servicio.map((servicio) => (
          <TaskCard servicio={servicio} key={servicio.id} />
        ))}
      </div>
    </section>
  );
}

export default PersonalPage;