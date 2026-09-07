import React from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import Reveal from "../../components/reveal/Reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  if (!techStack.viewSkillBars) {
    return null;
  }

  return (
    <Reveal>
      <div className="skills-container" id="proficiency">
        <div className="skills-bar">
          <span className="section-eyebrow">Proficiency</span>
          <h1 className="section-title proficiency-title">
            Depth Across the Stack
          </h1>

          {techStack.experience.map((exp, i) => (
            <div key={i} className="skill">
              <div className="skill-row">
                <p className="skill-name">{exp.Stack}</p>
                <span className="skill-value">{exp.progressPercentage}</span>
              </div>
              <div className="meter">
                <span style={{width: exp.progressPercentage}}></span>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-image">
          {illustration.animated ? (
            <DisplayLottie animationData={Build} />
          ) : (
            <img alt="Skills" src={require("../../assets/images/skill.svg")} />
          )}
        </div>
      </div>
    </Reveal>
  );
}
