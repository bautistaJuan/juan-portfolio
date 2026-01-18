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
      <div className="font-sans bg-emerald-50 text-slate-900 dark:bg-primary-950 dark:text-emerald-50 min-h-screen transition-colors duration-300">
        <div className="fixed top-6 right-6 z-50 flex items-center gap-4 text-sm bg-white/90 dark:bg-primary-900/90 backdrop-blur-md px-5 py-2.5 rounded-full shadow-lg border border-emerald-100 dark:border-primary-800 transition-all">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-emerald-100 dark:bg-primary-800 text-emerald-700 dark:text-emerald-300 transition-all hover:scale-110 active:scale-95 shadow-sm"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>

          <div className="flex items-center gap-3 border-l border-emerald-200 dark:border-primary-700 pl-4 ml-1">
            <FaGlobe className="text-emerald-600 dark:text-emerald-400" />
            <button
              onClick={() => setLang("en")}
              className={`transition-all hover:text-primary-600 dark:hover:text-primary-400 ${lang === "en" ? "font-bold text-primary-700 dark:text-primary-300 scale-110" : "text-emerald-600/60 dark:text-emerald-400/60"
                }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("es")}
              className={`transition-all hover:text-primary-600 dark:hover:text-primary-400 ${lang === "es" ? "font-bold text-primary-700 dark:text-primary-300 scale-110" : "text-emerald-600/60 dark:text-emerald-400/60"
                }`}
            >
              ES
            </button>
          </div>
        </div>

        <main className="max-w-5xl mx-auto px-6 pt-24 pb-20">
          <Hero lang={lang} />
          <About lang={lang} />
          <Skills lang={lang} />
          <Projects lang={lang} />
          <Contact lang={lang} />
          <footer className="text-center text-sm text-emerald-800/50 dark:text-emerald-200/30 mt-20 pt-10 border-t border-emerald-100 dark:border-primary-900">
            © {new Date().getFullYear()} Juan Bautista • Built with Passion
          </footer>
        </main>
      </div>
    </>
  );
};

export default App;