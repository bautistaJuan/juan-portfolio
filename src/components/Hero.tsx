import React from "react";
import { profile } from "../data/profile";
import { Lang } from "../App";
// import foto from "../assets/Juan_Vega-1.jpg";
const Hero: React.FC<{ lang: Lang }> = ({ lang }) => (
  <section className="py-16 text-center">
    <h1 className="text-4xl font-bold mb-2">{profile[lang].name}</h1>
    <h2 className="text-xl text-gray-600 mb-4">{profile[lang].title}</h2>
    <p className="max-w-xl mx-auto text-gray-700">{profile[lang].bio}</p>
    <div className="mt-8">
      {/* <img
        src={foto}
        alt="Juan Bautista"
        className="w-48 h-48 rounded-full mx-auto mb-4"
      /> */}
    </div>
  </section>
);

export default Hero;