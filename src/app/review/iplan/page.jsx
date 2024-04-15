import React from "react";
import DisqusCommentsIplan from "../../../components/Disqus/DisqusCommentsIplan";
import Link from "next/link";

function ReviewIplanPage() {
  return (
    <section className="relative overflow-x-auto h-full sm:ml-64 sm:mr-36">
      <h1 className=" mb-4 text-xl font-semibold dark:text-white px-3 py-4  bg-gray-50 dark:bg-gray-800 ">
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
      <div className="  px-3 py-4  bg-gray-50 dark:bg-gray-800">
        <p className=" mb-4 text-l font-semibold dark:text-white">
        En esta seccion los comentarios van dirigidos hacia servicio de fibra optica de Iplan.
        </p>
        <p className=" mb-4 text-l font-semibold dark:text-white">
          Recomendaciones a la hora de comentar:
        </p>
        <ul class="space-y-4 text-left text-gray-500 dark:text-gray-400">
          <li class="flex items-center space-x-3 rtl:space-x-reverse">
            <svg
              class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
            <span>Indicar barrio donde se encuentra el servicio.</span>
          </li>
          <li class="flex items-center space-x-3 rtl:space-x-reverse">
            <svg
              class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
            <span>Servicio contratado.</span>
          </li>
          <li class="flex items-center space-x-3 rtl:space-x-reverse">
            <svg
              class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
            <span>Monto que abona de servicio.</span>
          </li>
          <li class="flex items-center space-x-3 rtl:space-x-reverse">
            <svg
              class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
            <span>Comentarios sobre la calidad del servicio.</span>
          </li>
        </ul>
        <DisqusCommentsIplan />
      </div>
    </section>
  );
}

export default ReviewIplanPage;
