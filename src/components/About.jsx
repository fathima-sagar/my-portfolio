import React from "react";
import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <div className="py-5" id="about">
      <section className="bg-white py-20">
        <div className="align-element grid md:grid-cols-2 items-center gap-16">
          <img src={aboutSvg} className="w-full h-64" />
          <article>
            <SectionTitle text="About" />
            <p className="text-slate-600 mt-8 leading-loose">
              Hello! I’m Bibifathima from Dandeli. I have completed Electronics
              and Communication Engineering from,
              <a
                style={{ padding: "5px" }}
                className="underline font-bold text-emerald-500"
                href="https://klsvdit.edu.in//"
                target="_blank"
              >
                KLS's VDIT Haliyal.
              </a>
            </p>
            <p className="text-slate-600 leading-loose">
              I enjoy creating things for the internet whether that be a website
              or an application or anything in between which is not only
              functional but also beautiful bringing elegant experience.
              Whenever I am not studying or working, I’m probably watching
              movies or tv-shows.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default About;
