import React from "react";
import DisqusComments from "../../components/Disqus/DisqusComments"
import Link from "next/link";

function ReviewPage() {
  return (
    <section className=" relative overflow-x-auto h-full sm:ml-64 sm:mr-36">
      <h1 className="ml-4 mr-4 mb-4 text-xl font-semibold dark:text-white px-3 py-4  bg-gray-50 dark:bg-gray-800 ">
        Opiniones
      </h1>
      <div class="flex mb-4 justify-center" role="group">
        <Link
          href="/review/claro"
          type="button"
          class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200  hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-red-700 dark:hover:bg-gray-700 dark:focus:ring-red-500 dark:focus:text-white"
          
        >
          Claro
        </Link>
        <Link
          href="/review/personal"
          type="button"
          class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-blue-700 dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Personal
        </Link>
        <Link
          href="/review/iplan"
          type="button"
          class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200  hover:bg-gray-100 hover:text-pink-700 focus:z-10 focus:ring-2 focus:ring-pink-700 focus:text-pink-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-pink-700 dark:hover:bg-gray-700 dark:focus:ring-pink-500 dark:focus:text-white"
        >
          Iplan
        </Link>
      </div>
      <div className="ml-4 mr-4  px-3 py-4  bg-gray-50 dark:bg-gray-800">
        <p className=" mb-4 text-l font-semibold dark:text-white">
          En esta seccion los comentarios van dirigidos hacia el proyecto,
          posibles mejoras, errores encontrados, solicitud de informacion, asi
          como tambien una breve reseña sobre la experiencia del usuario.
        </p>
        <DisqusComments />
      </div>
    </section>
  );
}

export default ReviewPage;
