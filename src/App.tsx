import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App: React.FC = () => (
  <div className="font-sans bg-white text-gray-900 min-h-screen">
    <main className="max-w-2xl mx-auto px-4">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="text-center text-xs text-gray-400 mt-16 mb-4">
        © {new Date().getFullYear()} Juan Bautista
      </footer>
    </main>
  </div>
);

export default App;