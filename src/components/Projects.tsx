import React from "react";
import { profile } from "../data/profile";
import {
  SiReact,
  SiNextdotjs,
  SiFirebase,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiGithub
} from "react-icons/si";
import { Lang } from "../App";
import labels from "../data/label";
export const techIcons: Record<string, JSX.Element> = {
  React: <SiReact className="text-sky-500" title="React" />,
  "Next.js": <SiNextdotjs className="text-black dark:text-white" title="Next.js" />,
  Firebase: <SiFirebase className="text-yellow-500" title="Firebase" />,
  Tailwind: <SiTailwindcss className="text-cyan-500" title="Tailwind CSS" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-500" title="Tailwind CSS" />,
  HTML: <SiHtml5 className="text-orange-600" title="HTML5" />,
  CSS: <SiCss3 className="text-blue-600" title="CSS3" />,
  JavaScript: <SiJavascript className="text-yellow-400" title="JavaScript" />,
  TypeScript: <SiTypescript className="text-blue-500" title="TypeScript" />,
  Git: <SiGit className="text-orange-500" title="Git" />,
  Github: <SiGithub className="text-gray-700 dark:text-gray-300" title="GitHub" />,
};
const Projects: React.FC<{ lang: Lang }> = ({ lang }) => (
  <section className="my-12">
    <h3 className="text-lg font-semibold mb-2">{labels[lang].projects}</h3>
    <ul className="space-y-4">
      {profile[lang].projects.map(project => (
        <li
          key={project.name}
          className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex justify-between items-start mb-2">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-gray-800 dark:text-white group-hover:underline"
            >
              {project.name}
            </a>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black dark:hover:text-white"
                aria-label="GitHub repository"
              >
                {techIcons.Github}
              </a>
            )}
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 items-center">
            {project.tech?.map(tech =>
              techIcons[tech] ? (
                <div
                  key={tech}
                  className="flex text-lg items-center justify-center w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-700 hover:scale-110 transition-transform"
                  title={tech}
                >
                  {techIcons[tech]}
                </div>
              ) : (
                <span
                  key={tech}
                  className="text-lg px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md text-gray-800 dark:text-white"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </li>

      ))}
    </ul>
  </section>
);

export default Projects;