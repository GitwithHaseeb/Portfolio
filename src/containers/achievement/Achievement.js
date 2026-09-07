import React from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import Reveal from "../../components/reveal/Reveal";

export default function Achievement() {
  if (!achievementSection.display) {
    return null;
  }

  return (
    <div className="main competency-section" id="achievements">
      <Reveal>
        <div className="section-head">
          <span className="section-eyebrow">Capabilities</span>
          <h1 className="section-title">{achievementSection.title}</h1>
          <p className="section-subtitle">{achievementSection.subtitle}</p>
        </div>

        <div className="competency-grid">
          {achievementSection.achievementsCards.map((card, i) => (
            <AchievementCard
              key={i}
              cardInfo={{
                title: card.title,
                description: card.subtitle,
                icon: card.icon
              }}
            />
          ))}
        </div>
      </Reveal>
    </div>
  );
}
