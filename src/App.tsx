import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { FaGlobe } from "react-icons/fa";
import { usePreferences as hook, usePreferences } from "./hooks/hook";
export type Lang = "en" | "es";

const App: React.FC = () => {
  const { lang, setLang, darkMode, setDarkMode } = usePreferences();

  return (
    <>
      <div className="font-sans bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
        <div className="fixed top-4 right-4 z-30 flex items-center gap-4 text-sm bg-white/80 dark:bg-gray-800/80 backdrop-blur px-4 py-2 rounded-full shadow transition-colors ">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-800 dark:text-white transition-colors duration-500 hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            {darkMode ? "🌞 Light" : "🌙 Dark"}
          </button>

          <div className="flex items-center gap-3">
            <FaGlobe className="text-gray-600 dark:text-blue-500" />
            <button
              onClick={() => setLang("en")}
              className={`hover:underline transition-colors ${lang === "en" ? "font-bold text-blue-600 dark:text-blue-400" : "dark:text-gray-400"
                }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("es")}
              className={`hover:underline transition-colors ${lang === "es" ? "font-bold text-blue-600 dark:text-blue-400" : "dark:text-gray-400"
                }`}
            >
              ES
            </button>
          </div>
        </div>

        <main className="max-w-2xl mx-auto px-4">
          <Hero lang={lang} />
          <About lang={lang} />
          <Skills lang={lang} />
          <Projects lang={lang} />
          <Contact lang={lang} />
          <footer className="text-center text-xs text-gray-400 mt-16 ">
            © {new Date().getFullYear()} Juan Bautista
          </footer>
        </main>
      </div>
    </>
  );
};

export default App;