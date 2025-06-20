import React from "react";
import { profile } from "../data/profile";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { Lang } from "../App";
import labels from "../data/label";

const Contact: React.FC<{ lang: Lang }> = ({ lang }) => (
  <section className="my-12">
    <h3 className="text-xl font-bold text-gray-900 mb-4">📬 {labels[lang].contact}</h3>
    <ul className="space-y-3">
      <li>
        <a
          href={`mailto:${profile[lang].contact.email}`}
          className="flex items-center gap-2 text-gray-800 hover:text-blue-600 transition-colors"
        >
          <MdEmail className="text-xl" />
          <span>{profile[lang].contact.email}</span>
        </a>
      </li>
      <li>
        <a
          href={profile[lang].contact.github}
          className="flex items-center gap-2 text-gray-800 hover:text-blue-600 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub className="text-xl" />
          <span>GitHub</span>
        </a>
      </li>
      <li>
        <a
          href={profile[lang].contact.linkedin}
          className="flex items-center gap-2 text-gray-800 hover:text-blue-600 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLinkedin className="text-xl" />
          <span>LinkedIn</span>
        </a>
      </li>
    </ul>
  </section>


);

export default Contact;