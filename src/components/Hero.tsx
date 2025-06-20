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
    <section className="py-16 text-center dark:text-white relative overflow-hidden">

      <div className="relative z-10 bg-white/70 dark:bg-gray-900/70 rounded-lg p-6 max-w-xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">{profile[lang].name}</h1>
        <h2 className="text-xl text-gray-600 mb-4 dark:text-white">
          {profile[lang].title}
        </h2>
        <img
          src={foto}
          alt="Laptop"
          className="w-56 sm:w-2/4  mx-auto object-contain select-none"
        />
        <p
          className={`text-gray-700 dark:text-gray-300 transition-opacity duration-700 ease-in-out ${showBio ? "opacity-100" : "opacity-0"
            }`}
        >
          {profile[lang].bio}
        </p>
      </div>
    </section>

  );
};

export default Hero;
