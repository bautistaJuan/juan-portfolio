import React from "react";
import { Lang } from "../App";
import { profile } from "../data/profile";
import labels from "../data/label";
const About: React.FC<{ lang: Lang }> = ({ lang }) => (

  <section className="my-12">
    <h3 className="text-lg font-semibold mb-2">{labels[lang].about}</h3>
    <p>
      {profile[lang].about}
    </p>
  </section>
);

export default About;