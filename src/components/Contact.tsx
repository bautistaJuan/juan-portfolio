import React from "react";
import { profile } from "../data/profile";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { Lang } from "../App";
import labels from "../data/label";

const Contact: React.FC<{ lang: Lang }> = ({ lang }) => (
  <section className="my-20">
    <h3 className="text-2xl font-bold mb-10 text-slate-900 dark:text-emerald-50 flex items-center gap-3">
      <span className="w-8 h-1 bg-primary-600 dark:bg-primary-400 rounded-full"></span>
      {labels[lang].contact}
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <a
        href={`mailto:${profile[lang].contact.email}`}
        className="group flex flex-col items-center gap-4 p-8 bg-white dark:bg-primary-900/40 border border-emerald-100 dark:border-primary-800/50 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-200/50 dark:hover:shadow-primary-900/20"
      >
        <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-primary-800/50 flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:bg-primary-600 group-hover:text-white dark:group-hover:bg-primary-400 dark:group-hover:text-primary-950 transition-all duration-300">
          <MdEmail className="text-2xl" />
        </div>
        <span className="text-sm font-medium text-slate-600 dark:text-emerald-100/70 truncate w-full text-center">{profile[lang].contact.email}</span>
      </a>

      <a
        href={profile[lang].contact.github}
        className="group flex flex-col items-center gap-4 p-8 bg-white dark:bg-primary-900/40 border border-emerald-100 dark:border-primary-800/50 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-200/50 dark:hover:shadow-primary-900/20"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-primary-800/50 flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:bg-primary-600 group-hover:text-white dark:group-hover:bg-primary-400 dark:group-hover:text-primary-950 transition-all duration-300">
          <SiGithub className="text-2xl" />
        </div>
        <span className="text-sm font-medium text-slate-600 dark:text-emerald-100/70">GitHub</span>
      </a>

      <a
        href={profile[lang].contact.linkedin}
        className="group flex flex-col items-center gap-4 p-8 bg-white dark:bg-primary-900/40 border border-emerald-100 dark:border-primary-800/50 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-200/50 dark:hover:shadow-primary-900/20"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-primary-800/50 flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:bg-primary-600 group-hover:text-white dark:group-hover:bg-primary-400 dark:group-hover:text-primary-950 transition-all duration-300">
          <SiLinkedin className="text-2xl" />
        </div>
        <span className="text-sm font-medium text-slate-600 dark:text-emerald-100/70">LinkedIn</span>
      </a>
    </div>
  </section>



);

export default Contact;