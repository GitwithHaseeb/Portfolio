import React from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import Reveal from "../../components/reveal/Reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function Skills() {
  if (!skillsSection.display) {
    return null;
  }

  return (
    <div className="main skills-section" id="skills">
      <div className="skills-main-div">
        <Reveal direction="left">
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Developer at work"
                src={require("../../assets/images/developerActivity.svg")}
              />
            )}
          </div>
        </Reveal>

        <Reveal direction="right" delay={100}>
          <div className="skills-text-div">
            <span className="section-eyebrow">Capabilities</span>
            <h1 className="section-title skills-title">
              {skillsSection.title}
            </h1>
            <p className="skills-text-subtitle">{skillsSection.subTitle}</p>

            <SoftwareSkill />

            <ul className="skills-list">
              {skillsSection.skills.map((skill, i) => (
                <li key={i} className="skills-text">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
