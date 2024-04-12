"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function NewPage({ params }) {
  
  const router = useRouter();
  const [proveedor, setProveedor] = useState("");
  const [plan, setPlan] = useState("");
  const [velocidad, setVelocidad] = useState("");
  const [velocidadSub, setVelocidadSub] = useState("");
  const [velocidadBaj, setVelocidadBaj] = useState("");
  const [tecnologia, setTecnologia] = useState("");
  const [ip, setIp] = useState("");
  const [instalacion, setInstalacion] = useState("");
  const [precioLista, setPrecioLista] = useState("");
  const [precioDesc, setPrecioDesc] = useState("");
  const [atencionCl, setAtencionCl] = useState("");
  const [descripcion, setDescripcion] = useState("");
  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setProveedor(data.proveedor);
          setPlan(data.plan);
          setVelocidad(data.velocidad);
          setVelocidadSub(data.velocidadSub);
          setVelocidadBaj(data.velocidadBaj);
          setTecnologia(data.tecnologia);
          setIp(data.ip);
          setInstalacion(data.instalacion);
          setPrecioLista(data.precioLista);
          setPrecioDesc(data.precioDesc);
          setAtencionCl(data.atencionCl);
          setDescripcion(data.descripcion);

        });
    }
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (params.id) {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ proveedor, plan, velocidad, velocidadSub, velocidadBaj, tecnologia, ip, instalacion, precioLista, precioDesc, atencionCl, descripcion}),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
    } else {
      const res = await fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify({ proveedor, plan, velocidad, velocidadSub, velocidadBaj, tecnologia, ip, instalacion, precioLista, precioDesc, atencionCl, descripcion }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
    }
    router.refresh();
    router.push("/");
  };

  return (
    <div className=" container sm:ml-64">
      <form
        className=" ml-4 mr-4 relative overflow-x-auto text-xl font-semibold dark:text-white h-full px-3 py-4 bg-gray-50 dark:bg-gray-800"
        onSubmit={onSubmit}
      >
        <label htmlFor="proveedor" className="font-bold text-sm">
          Proveedor del servicio
        </label>
        <input
          type="text"
          id="proveedor"
          className="border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Proveedor"
          onChange={(e) => setProveedor(e.target.value)}
          value={proveedor}
        />
        <label htmlFor="plan" className="font-bold text-sm">
          Plan
        </label>
        <input
          type="text"
          id="plan"
          className="border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Plan"
          onChange={(e) => setPlan(e.target.value)}
          value={plan}
        />
        <label htmlFor="velocidad" className="font-bold text-sm">
          Velocidad del servicio
        </label>
        <input
          type="text"
          id="velocidad"
          className="border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Velocidad"
          onChange={(e) => setVelocidad(e.target.value)}
          value={velocidad}
        />
        <label htmlFor="velocidadSub" className="font-bold text-sm">
          Velocidad de subida
        </label>
        <input
          type="text"
          id="velocidadSub"
          className="border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Velocidad de subida"
          onChange={(e) => setVelocidadSub(e.target.value)}
          value={velocidadSub}
        />
        <label htmlFor="velocidadBaj" className="font-bold text-sm">
          Velocidad de bajada
        </label>
        <input
          type="text"
          id="velocidadBaj"
          className="border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Velocidad de bajada"
          onChange={(e) => setVelocidadBaj(e.target.value)}
          value={velocidadBaj}
        />
        <label htmlFor="tecnologia" className="font-bold text-sm">
          Tecnologia
        </label>
        <input
          type="text"
          id="tecnologia"
          className="border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Tecnologia"
          onChange={(e) => setTecnologia(e.target.value)}
          value={tecnologia}
        />
        <label htmlFor="ip" className="font-bold text-sm">
          IP
        </label>
        <input
          type="text"
          id="ip"
          className="border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="IP"
          onChange={(e) => setIp(e.target.value)}
          value={ip}
        />
        <label htmlFor="instalacion" className="font-bold text-sm">
          Instalacion
        </label>
        <input
          type="text"
          id="instalacion"
          className="border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Instalacion"
          onChange={(e) => setInstalacion(e.target.value)}
          value={instalacion}
        />
        <label htmlFor="precioLista" className="font-bold text-sm">
          Precio de lista
        </label>
        <input
          type="text"
          id="precioLista"
          className="border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Precio de lista"
          onChange={(e) => setPrecioLista(e.target.value)}
          value={precioLista}
        />
        <label htmlFor="precioDesc" className="font-bold text-sm">
          Precio con descuento
        </label>
        <input
          type="text"
          id="precioDesc"
          className="border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Precio con descuento"
          onChange={(e) => setPrecioDesc(e.target.value)}
          value={precioDesc}
        />
        <label htmlFor="atencionCl" className="font-bold text-sm">
          Atencion al Cliente
        </label>
        <input
          type="text"
          id="atencionCl"
          className="border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Atencion al Cliente"
          onChange={(e) => setAtencionCl(e.target.value)}
          value={atencionCl}
        />
        <label htmlFor="descripcion" className="font-bold text-sm">
          Descripcion
        </label>
        <input
          type="text"
          id="descripcion"
          className="border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Descripcion"
          onChange={(e) => setDescripcion(e.target.value)}
          value={descripcion}
        />
        

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Crear
        </button>
        {params.id && (
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4"
            type="button"
            onClick={async () => {
              fetch(`/api/tasks/${params.id}`, {
                method: "DELETE",
              });
              
              router.push("/");
              router.refresh();
            }}
          >
            Borrar
          </button>
        )}
      </form>
    </div>
  );
}

export default NewPage;
