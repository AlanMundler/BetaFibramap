"use client";

import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat();
  console.log(messages);

  return (
    <section className="relative overflow-x-auto h-full sm:ml-64 sm:mr-36 ">
      <h1 className=" ml-4 mr-4 mb-4 text-xl font-semibold dark:text-white h-full px-3 py-4 bg-gray-50 dark:bg-gray-800">
        Inicio
      </h1>
      <h1 className="text-center ml-4 mr-4 mb-4 text-l  dark:text-white h-full px-3 py-4 bg-gray-50 dark:bg-gray-800">
      Te damos la bienvenida a un portal informativo sobre la disponibilidad de fibra óptica domiciliaria en Córdoba. <br/>Aquí podrás encontrar de forma sencilla y clara si esta tecnología está disponible en tu zona y con qué proveedores.<br/>
      Asi como tambien dejar una breve reseña de tu servicio contratado, asi contribuir a futuros clientes.
      </h1>
      <h1 className=" ml-4 mr-4 mb-4 text-xl font-semibold dark:text-white h-full px-3 py-4 bg-gray-50 dark:bg-gray-800">
        Chat
      </h1>
      <form
        className=" ml-4 mr-4 relative overflow-x-auto   bg-gray-50 dark:bg-gray-800 "
        onSubmit={handleSubmit}
      >
        <div className="dark:text-white max-h-96 h-full overflow-y-auto">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex flex-col mb-2 p-2  ${
                m.role === "assistant"
                  ? "self-end bg-gray-200 dark:bg-gray-800 "
                  : "self-start bg-blue-200 dark:bg-blue-900 "
              }`}
            >
              <span
                className={`text-xs ${
                  m.role === "assistant" ? "text-right" : "text-left"
                }`}
              >
                {m.role}
              </span>{" "}
              {m.content}
            </div>
          ))}
        </div>

        <div className="flex justify-between my-4">
          <label className="dark:text-white block font-bold my-2 ml-4">
            Di algo...
          </label>
          <button className=" mr-4 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-blue-700 dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          disabled={isLoading || !input}>
            Enviar
          </button>
        </div>
        <textarea
          rows={4}
          value={input}
          placeholder="Escribi tu mensaje aqui"
          className=" ml-4 mr-4 mb-4 text-black bg-slate-300 px-3 py-2 w-11/12 focus:outline-none"
          onChange={handleInputChange}
          autoFocus
        />
      </form>
    </section>
  );
}

