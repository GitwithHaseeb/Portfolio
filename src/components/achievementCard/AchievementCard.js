import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo}) {
  return (
    <article className="competency-card">
      <span className="competency-card__icon" aria-hidden="true">
        <i className={cardInfo.icon || "fas fa-check"}></i>
      </span>
      <h3 className="competency-card__title">{cardInfo.title}</h3>
      <p className="competency-card__desc">{cardInfo.description}</p>
    </article>
  );
}
