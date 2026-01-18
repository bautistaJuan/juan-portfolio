import React from "react";
import { profile } from "../data/profile";
import { techIcons } from "./Projects";
import { Lang } from "../App";
import labels from "../data/label";
const Skills: React.FC<{ lang: Lang }> = ({ lang }) => (
  <section className="my-20">
    <h3 className="text-2xl font-bold mb-10 text-slate-900 dark:text-emerald-50 flex items-center gap-3">
      <span className="w-8 h-1 bg-primary-600 dark:bg-primary-400 rounded-full"></span>
      {labels[lang].skills}
    </h3>
    <ul className="flex flex-wrap gap-4">
      {profile[lang].skills.map((skill) => (
        <li
          key={skill}
          className="px-6 py-3 bg-white dark:bg-primary-900/40 border border-emerald-100 dark:border-primary-800/50 rounded-2xl text-xl font-medium 
                 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-primary-950 
                 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-200/50 dark:hover:shadow-primary-900/20 
                 cursor-pointer text-slate-700 dark:text-emerald-100 transition-all duration-300 flex items-center gap-3 shadow-sm"
        >
          <span className="text-2xl opacity-80 group-hover:opacity-100">
            {techIcons[skill] ? techIcons[skill] : null}
          </span>
          {skill}
        </li>
      ))}
    </ul>
  </section>

);

export default Skills;