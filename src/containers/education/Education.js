import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";
import Reveal from "../../components/reveal/Reveal";

export default function Education() {
  if (!educationInfo.display) {
    return null;
  }

  return (
    <div className="main education-section" id="education">
      <Reveal>
        <div className="section-head">
          <span className="section-eyebrow">Education</span>
          <h1 className="section-title">Academic Foundation</h1>
          <p className="section-subtitle">
            Formal computer science training behind the engineering practice
          </p>
        </div>

        <div className="education-card-container">
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </Reveal>
    </div>
  );
}
