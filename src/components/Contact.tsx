import React from "react";
import { profile } from "../data/profile";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const Contact: React.FC = () => (
  <section className="my-12">
    <h3 className="text-xl font-bold text-gray-900 mb-4">📬 Contact</h3>
    <ul className="space-y-3">
      <li>
        <a
          href={`mailto:${profile.contact.email}`}
          className="flex items-center gap-2 text-gray-800 hover:text-blue-600 transition-colors"
        >
          <MdEmail className="text-xl" />
          <span>{profile.contact.email}</span>
        </a>
      </li>
      <li>
        <a
          href={profile.contact.github}
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
          href={profile.contact.linkedin}
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