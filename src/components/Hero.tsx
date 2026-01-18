import React, { useEffect, useState } from "react";
import { profile } from "../data/profile";
import { Lang } from "../App";
import foto from "/laptop-removebg.png";
const Hero: React.FC<{ lang: Lang }> = ({ lang }) => {
  const [showBio, setShowBio] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowBio(true), 200); // retrasa la animación un poco
    return () => clearTimeout(timeout);
  }, [lang]); // re-dispara cuando cambia el idioma

  return (
    <section className="py-20 text-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-100/20 via-transparent to-transparent dark:from-primary-900/10 z-0 pointer-events-none"></div>

      <div className="relative z-10 p-6 max-w-2xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight text-slate-900 dark:text-emerald-50">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-emerald-500 dark:from-primary-400 dark:to-emerald-300">
            {profile[lang].name}
          </span>
        </h1>
        <h2 className="text-2xl font-medium text-emerald-800 dark:text-emerald-200 mb-8">
          {profile[lang].title}
        </h2>

        <div className="relative mb-10 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-emerald-500 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <img
            src={foto}
            alt="Laptop"
            className="relative w-64 sm:w-80 mx-auto object-contain select-none transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <p
          className={`text-lg leading-relaxed text-slate-700 dark:text-emerald-100/80 transition-all duration-1000 ease-in-out ${showBio ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          {profile[lang].bio}
        </p>
      </div>
    </section>

  );
};

export default Hero;
