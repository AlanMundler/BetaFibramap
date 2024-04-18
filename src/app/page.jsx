"use client";

import { useState, useEffect } from "react";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";


export default function Home() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserImput] = useState("");
  const [chat, setChat] = useState(null);
  const [error, setError] = useState(null);


  const API_KEY = "AIzaSyCakhv_Iow9z_nmjDHtPoyM-LjdPo75XrU";
  const MODEL_NAME = "gemini-1.0-pro";

  const genAI = new GoogleGenerativeAI(API_KEY);

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };
  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  useEffect(() => {
    const initChat = async () => {
      try {
        const newChat = await genAI
          .getGenerativeModel({ model: MODEL_NAME })
          .startChat({
            generationConfig,
            safetySettings,
            history: messages.map((msg) => ({
              text: msg.text,
              role: msg.role,
            })),
          });
        setChat(newChat);
      } catch (error) {
        setError("Fallo iniciar el chat. Intente de nuevo.");
      }
    };
    initChat();
  }, []);

  const handleSendMessage = async () => {
    try {
      const userMessage = {
        text: userInput,
        role: "user",
        timestamp: new Date(),
      };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setUserImput("");

      if (chat) {
        const result = await chat.sendMessage(userInput);
        const botMessage = {
          text: result.response.text(),
          role: "bot",
          timestamp: new Date(),
        };

        setMessages((prevMessages) => [...prevMessages, botMessage]);
      }
    } catch (error) {
      setError("No se pudo enviar el mensaje. Intenta de nuevo.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <section className="relative overflow-x-auto h-full sm:ml-64 sm:mr-36 ">
      <h1 className=" ml-4 mr-4 mb-4 text-xl font-semibold dark:text-white h-full px-3 py-4 bg-gray-50 dark:bg-gray-800">
        Inicio
      </h1>
      <h1 className="text-center ml-4 mr-4 mb-4 text-l  dark:text-white h-full px-3 py-4 bg-gray-50 dark:bg-gray-800">
        Te damos la bienvenida a un portal informativo sobre la disponibilidad
        de fibra óptica domiciliaria en Córdoba. <br />
        Aquí podrás encontrar de forma sencilla y clara si esta tecnología está
        disponible en tu zona y con qué proveedores.
        <br />
        Asi como tambien dejar una breve reseña de tu servicio contratado, asi
        contribuir a futuros clientes.
      </h1>
      <h1 className=" ml-4 mr-4 mb-4 text-xl font-semibold dark:text-white h-full px-3 py-4 bg-gray-50 dark:bg-gray-800">
        Chat IA
      </h1>
      <form className=" ml-4 mr-4 relative overflow-x-auto   bg-gray-50 dark:bg-gray-800 ">
        <div className="dark:text-white max-h-96 h-full overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex flex-col mb-2 p-2  ${
                msg.role === "user"
                  ? "text-right bg-gray-200 dark:bg-gray-700 "
                  : "text-left bg-blue-200 dark:bg-blue-950 "
              }`}
            >
              <span
                className={`text-xs ${
                  msg.role === "user" ? "text-right" : "text-left"
                }`}
              >
                {msg.text}
              </span>
              <p className="text-xs mt-1">
                {msg.role === "bot" ? "IA" : "Vos"} -{" "}
                {msg.timestamp.toLocaleTimeString()}
              </p>
            </div>
          ))}
        </div>
        {error && <div className=" text-red-500 text-sm mb-4">{error}</div>}

        <div className="flex justify-between my-4">
          <label className="dark:text-white block font-bold my-2 ml-4">
            Di algo...
          </label>
          <button
          type="button"
            onClick={handleSendMessage}
            className=" mr-4 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-blue-700 dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            Enviar
          </button>
        </div>
        <textarea
          rows={4}
          value={userInput}
          placeholder="Escribi tu mensaje aqui"
          className=" ml-4 mr-4 mb-4 text-black bg-slate-300 px-3 py-2 w-11/12 focus:outline-none"
          onChange={(e) => setUserImput(e.target.value)}
          onKeyDown={handleKeyPress}
          autoFocus
        />
      </form>
    </section>
  );
}
