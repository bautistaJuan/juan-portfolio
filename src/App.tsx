import React, { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { FaGlobe } from "react-icons/fa"; // o el que prefieras
export type Lang = "en" | "es";
const App: React.FC = () => {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <>
      <div className="font-sans bg-white text-gray-900 min-h-screen">

        <div className="fixed top-4 right-4 flex items-center gap-2 text-sm bg-white/80 backdrop-blur px-3 py-1 rounded-full shadow">
          <FaGlobe className="text-gray-600" />
          <button
            onClick={() => setLang("en")}
            className={`hover:underline ${lang === "en" ? "font-bold text-blue-600" : ""}`}
          >
            EN
          </button>
          <button
            onClick={() => setLang("es")}
            className={`hover:underline ${lang === "es" ? "font-bold text-blue-600" : ""}`}
          >
            ES
          </button>
        </div>

        <main className="max-w-2xl mx-auto px-4">
          <Hero lang={lang} />
          <About lang={lang} />
          <Skills lang={lang} />
          <Projects lang={lang} />
          <Contact lang={lang} />
          <footer className="text-center text-xs text-gray-400 mt-16 mb-4">
            © {new Date().getFullYear()} Juan Bautista
          </footer>
        </main>
      </div>
    </>
  );
};

export default App;