import React from "react";
import { profile } from "../data/profile";
// import foto from "../assets/Juan_Vega-1.jpg";
const Hero: React.FC = () => (
  <section className="py-16 text-center">
    <h1 className="text-4xl font-bold mb-2">{profile.name}</h1>
    <h2 className="text-xl text-gray-600 mb-4">{profile.title}</h2>
    <p className="max-w-xl mx-auto text-gray-700">{profile.bio}</p>
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