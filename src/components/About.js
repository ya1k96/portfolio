import React from "react";

export default function About() {
  return (
    <section className="bg-white shadow-md" id="about">
      <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-indigo-400">
            ¡Hola Mundo! 
            <br className="hidden lg:inline-block" />Mi pasion es programar.
          </h1>
          <p className="mb-8 leading-relaxed text-gray-700 font-medium">
            He tenido una experincia gratificante al encontrar soluciones de software, y estoy constantemente buscando inspiracion para los proximos. 
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex font-medium text-white bg-gradient-to-r from-indigo-400 to-blue-500 border-0 py-5 px-6 focus:outline-none hover:bg-blue-400 rounded text-lg">
              Trabajemos
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex font-medium text-indigo-500 border-0 py-2 px-3 focus:outline-none  hover:text-indigo-700 rounded text-lg">
              Mira mis trabajos
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}