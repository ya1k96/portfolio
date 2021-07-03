import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-indigo-500 mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Yamil Martinez
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 text-gray-700">
            Trabajos
          </a>
          <a href="#skills" className="mr-5 text-gray-700">
            Skills
          </a>          
        </nav>
        <a
          href="#contact"
          className="font-medium inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Contacto
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}