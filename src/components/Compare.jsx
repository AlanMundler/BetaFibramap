"use client";
import { useState, useEffect } from "react";

const ServiciosComparador = () => {
  const [servicios, setServicios] = useState([]);
  const [servicio1, setServicio1] = useState("");
  const [servicio2, setServicio2] = useState("");

  useEffect(() => {
    const fetchServicios = async () => {
      const response = await fetch("/api/tasks");
      const data = await response.json();
      setServicios(data);
    };

    fetchServicios();
  }, []);

  useEffect(() => {
    if (servicio1) {
      const fetchService1 = async () => {
        const response = await fetch(`/api/tasks/${servicio1}`);
        if (response.ok) {
          const data = await response.json();
          setServicio1(data);
        } else {
          console.error("Error al obtener el servicio 1:", response.statusText);
        }
      };

      fetchService1();
    }
  }, [servicio1]);

  useEffect(() => {
    if (servicio2) {
      const fetchService2 = async () => {
        const response = await fetch(`/api/tasks/${servicio2}`);
        if (response.ok) {
          const data = await response.json();
          setServicio2(data);
        } else {
          console.error("Error al obtener el servicio 2:", response.statusText);
        }
      };

      fetchService2();
    }
  }, [servicio2]);

  return (
    <div className="overflow-x-auto sm:ml-64 sm:mr-36 ">
      <h2 className="ml-4 mr-4 text-xl font-semibold dark:text-white bg-gray-50 dark:bg-gray-800 p-4 mb-4">
        Comparador de Servicios
      </h2>
      <div className="flex flex-col sm:flex-row mb-4">
        <select
          className="dark:text-white dark:bg-gray-600 ml-4 mr-4"
          onChange={(e) => setServicio1(e.target.value)}
        >
          <option value="">Seleccione un servicio</option>
          {servicios.map((servicio) => (
            <option key={servicio.id} value={servicio.id}>
              {servicio.proveedor} - {servicio.plan}
            </option>
          ))}
        </select>
        <select
          className="dark:text-white dark:bg-gray-600  ml-4 mr-4"
          onChange={(e) => setServicio2(e.target.value)}
        >
          <option value="">Seleccione otro servicio</option>
          {servicios.map((servicio) => (
            <option key={servicio.id} value={servicio.id}>
              {servicio.proveedor} - {servicio.plan}
            </option>
          ))}
        </select>
      </div>
      {servicio1 && servicio2 && (
        <div className="overflow-x-auto">
          <table className="bg-gray-50 dark:bg-gray-800 lg:w-11/12 ml-4 mr-4 ">
            <thead>
              <tr>
                <th className="font-semibold dark:text-white bg-gray-50 dark:bg-gray-800 p-4">
                  Características
                </th>
                <th className="font-semibold dark:text-white bg-gray-50 dark:bg-gray-800 p-4">
                  {servicio1.proveedor} - {servicio1.plan}
                </th>
                <th className="font-semibold dark:text-white bg-gray-50 dark:bg-gray-800 p-4">
                  {servicio2.proveedor} - {servicio2.plan}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="dark:text-white p-4 border dark:border-black">
                  {servicio1.proveedor}
                </td>
                <td className="dark:text-white p-4 border dark:border-black">
                  {servicio1.plan}
                </td>
                <td className="dark:text-white p-4 border dark:border-black">
                  {servicio2.plan}
                </td>
              </tr>
              <tr>
                <td className="dark:text-white p-4 border dark:border-black">
                  Velocidad
                </td>
                <td className="dark:text-white p-4 border dark:border-black">
                  {servicio1.velocidad}
                </td>
                <td className="dark:text-white p-4 border dark:border-black">
                  {servicio2.velocidad}
                </td>
              </tr>
              <tr>
                <td class="dark:text-white p-4 border dark:border-black">
                  Velocidad Subida
                </td>
                <td class="dark:text-white p-4 border dark:border-black">
                  {servicio1.velocidadSub}
                </td>
                <td class="dark:text-white p-4 border dark:border-black">
                  {servicio2.velocidadSub}
                </td>
              </tr>
              <tr>
                <td class="dark:text-white p-4 border dark:border-black">
                  Velocidad Bajada
                </td>
                <td class="dark:text-white p-4 border dark:border-black">
                  {servicio1.velocidadBaj}
                </td>
                <td class="dark:text-white p-4 border dark:border-black">
                  {servicio2.velocidadBaj}
                </td>
              </tr>
              <tr>
                <td class="dark:text-white p-4 border dark:border-black">
                  Tecnología
                </td>
                <td class="dark:text-white p-4 border dark:border-black">
                  {servicio1.tecnologia}
                </td>
                <td class="dark:text-white p-4 border dark:border-black">
                  {servicio2.tecnologia}
                </td>
              </tr>
              <tr>
                <td class="dark:text-white p-4 border dark:border-black">IP</td>
                <td class="dark:text-white p-4 border dark:border-black">
                  {servicio1.ip}
                </td>
                <td class="dark:text-white p-4 border dark:border-black">
                  {servicio2.ip}
                </td>
              </tr>
              <tr>
                <td class="dark:text-white p-4 border dark:border-black">
                  Instalación
                </td>
                <td class="dark:text-white p-4 border dark:border-black">
                  {servicio1.instalacion}
                </td>
                <td class="dark:text-white p-4 border dark:border-black">
                  {servicio2.instalacion}
                </td>
              </tr>
              <tr>
                <td class="dark:text-white p-4 border dark:border-black">
                  Precio Lista
                </td>
                <td class="dark:text-white p-4 border dark:border-black">
                  {servicio1.precioLista}
                </td>
                <td class="dark:text-white p-4 border dark:border-black">
                  {servicio2.precioLista}
                </td>
              </tr>
              <tr>
                <td class="dark:text-white p-4 border dark:border-black">
                  Precio Descuento
                </td>
                <td class="dark:text-white p-4 border dark:border-black">
                  {servicio1.precioDesc}
                </td>
                <td class="dark:text-white p-4 border dark:border-black">
                  {servicio2.precioDesc}
                </td>
              </tr>
              <tr>
                <td class="dark:text-white p-4 border dark:border-black">
                  Atención al Cliente
                </td>
                <td class="dark:text-white p-4 border dark:border-black">
                  {servicio1.atencionCl}
                </td>
                <td class="dark:text-white p-4 border dark:border-black">
                  {servicio2.atencionCl}
                </td>
              </tr>
              <tr>
                <td class="dark:text-white p-4 border dark:border-black">
                  Descripcion
                </td>
                <td class="dark:text-white p-4 border dark:border-black">
                  {servicio1.descripcion}
                </td>
                <td class="dark:text-white p-4 border dark:border-black">
                  {servicio2.descripcion}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ServiciosComparador;
