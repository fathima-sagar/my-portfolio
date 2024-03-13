import React from "react";
import ProjectsCard from "./ProjectsCard";
import SectionTitle from "./SectionTitle";
import { projects } from "../assets/data";

const Projects = () => {
  return (
    <div className="py-5" id="projects">
      <section className="py-20 align-element">
        <SectionTitle text="web creations" />
        <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => {
            return <ProjectsCard key={project.id} {...project} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Projects;
