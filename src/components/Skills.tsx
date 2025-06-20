import React from "react";
import { profile } from "../data/profile";
import { techIcons } from "./Projects";
import { Lang } from "../App";
import labels from "../data/label";
const Skills: React.FC<{ lang: Lang }> = ({ lang }) => (
  <section className="my-12">
    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
      {labels[lang].skills}
    </h3>
    <ul className="flex flex-wrap gap-2">
      {profile[lang].skills.map((skill) => (
        <li
          key={skill}
          className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-2xl font-medium hover:bg-black dark:hover:bg-gray-900 cursor-pointer text-gray-900 dark:text-gray-100 transition-colors"
        >
          {techIcons[skill] ? techIcons[skill] : skill}
        </li>
      ))}
    </ul>
  </section>

);

export default Skills;