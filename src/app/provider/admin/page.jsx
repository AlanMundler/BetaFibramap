import { prisma } from "../../../libs/prisma";
import TaskCardAdmin from "../../../components/TaskCardAdmin";

async function loadServicios() {
  return await prisma.servicio.findMany();
}

export const dynamic = "force-dynamic";

async function AdminPage() {
  const servicio = await loadServicios();

  return (
    <section className="container sm:ml-64 ">
      <h1 className=" ml-4 mr-4 relative overflow-x-auto text-xl font-semibold dark:text-white h-full px-3 py-4 bg-gray-50 dark:bg-gray-800">
        Proveedores
      </h1>
      <div>
        {servicio.map((servicio) => (
          <TaskCardAdmin servicio={servicio} key={servicio.id} />
        ))}
      </div>
    </section>
  );
}

export default AdminPage;
