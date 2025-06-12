import React from "react";
import { profile } from "../data/profile";
import { techIcons } from "./Projects";
const Skills: React.FC = () => (
  <section className="my-12">
    <h3 className="text-lg font-semibold mb-2">Skills</h3>
    <ul className="flex flex-wrap gap-2">
      {profile.skills.map(skill => (
        <li
          key={skill}
          className="px-3 py-2 bg-gray-100 rounded-full text-2xl font-medium hover:bg-black cursor-pointer"
        >
          {techIcons[skill] ? techIcons[skill] : skill}
        </li>
      ))}
    </ul>
  </section>
);

export default Skills;