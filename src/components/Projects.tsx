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
  <section className="my-20">
    <h3 className="text-2xl font-bold mb-10 text-slate-900 dark:text-emerald-50 flex items-center gap-3">
      <span className="w-8 h-1 bg-primary-600 dark:bg-primary-400 rounded-full"></span>
      {labels[lang].projects}
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {profile[lang].projects.map((project) => (
        <div
          key={project.name}
          className="group relative bg-white dark:bg-primary-900/40 border border-emerald-100 dark:border-primary-800/50 rounded-2xl p-8 shadow-sm 
                 hover:shadow-xl hover:shadow-emerald-200/50 dark:hover:shadow-primary-900/20 
                 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
        >
          <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 dark:text-emerald-400 hover:scale-125 transition-transform"
                aria-label="GitHub repository"
              >
                {techIcons.Github}
              </a>
            )}
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-bold text-slate-900 dark:text-emerald-50 mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {project.name}
            </h4>
            <div className="w-12 h-1 bg-emerald-100 dark:bg-primary-800 rounded-full mb-4 group-hover:w-20 transition-all duration-500"></div>
            <p className="text-slate-600 dark:text-emerald-100/70 text-sm leading-relaxed mb-6">
              {project.description}
            </p>
          </div>

          <div className="mt-auto flex flex-wrap gap-2 items-center">
            {project.tech?.map((tech) =>
              techIcons[tech] ? (
                <div
                  key={tech}
                  className="flex text-xl items-center justify-center w-10 h-10 rounded-xl bg-emerald-50 dark:bg-primary-800/50 text-emerald-700 dark:text-emerald-300 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-primary-950 transition-all duration-300"
                  title={tech}
                >
                  {techIcons[tech]}
                </div>
              ) : (
                <span
                  key={tech}
                  className="text-xs font-semibold px-3 py-1 bg-emerald-50 dark:bg-primary-800/50 text-emerald-700 dark:text-emerald-300 rounded-lg group-hover:bg-primary-600 group-hover:text-white dark:group-hover:bg-primary-400 dark:group-hover:text-primary-950 transition-colors"
                >
                  {tech}
                </span>
              )
            )}
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center text-sm font-bold text-primary-700 dark:text-primary-400 hover:underline gap-2 group/link"
          >
            {lang === "en" ? "View Project" : "Ver Proyecto"}
            <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;