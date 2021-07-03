import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-white">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-2/3 sm:w-1/3 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <img src="./images/contact.svg"></img>          
        </div>
        <form
          netlify
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-700 sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contacto
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Si tenes alguna duda, ¡hacemela llegar!
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-indigo-500 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-indigo-500 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-700">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-indigo-500 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-indigo-400 to-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}