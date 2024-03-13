import React from "react";
import SectionTitle from "./SectionTitle";
import { skills } from "../assets/data";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <div className="py-5" id="skills">
      <section className="py-20 align-element">
        <SectionTitle text="tech stack" />
        <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skills) => {
            return <SkillsCard key={skills.id} {...skills} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Skills;
