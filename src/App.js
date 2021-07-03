import './App.css';
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Projects from './components/Proyects';
export default function App() {
  return (
    <main className="text-white bg-gradient-to-r from-indigo-400 to-blue-500 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      {/* <Testimonials /> */}
      <Contact />
    </main>
  );
}
