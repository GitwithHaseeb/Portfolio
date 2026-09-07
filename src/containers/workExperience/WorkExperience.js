import React from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import Reveal from "../../components/reveal/Reveal";

export default function WorkExperience() {
  if (!workExperiences.display) {
    return null;
  }

  return (
    <div className="main experience-section" id="experience">
      <Reveal>
        <div className="section-head">
          <span className="section-eyebrow">Experience</span>
          <h1 className="section-title">Where I&apos;ve Built</h1>
          <p className="section-subtitle">
            Professional software delivery in production engineering teams
          </p>
        </div>

        <div className="experience-timeline">
          {workExperiences.experience.map((card, i) => (
            <ExperienceCard key={i} cardInfo={card} />
          ))}
        </div>
      </Reveal>
    </div>
  );
}
