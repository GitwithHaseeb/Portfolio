import React from "react";
import "./ExperienceCard.scss";

export default function ExperienceCard({cardInfo}) {
  const initials =
    cardInfo.companyShort ||
    (cardInfo.company || "")
      .split(" ")
      .slice(0, 2)
      .map(word => word.charAt(0))
      .join("")
      .toUpperCase();

  return (
    <article className="xp-card">
      <div className="xp-card__marker" aria-hidden="true">
        <span className="xp-card__dot"></span>
      </div>

      <div className="xp-card__body">
        <header className="xp-card__header">
          <span className="xp-card__logo" aria-hidden="true">
            {cardInfo.companylogo ? (
              <img src={cardInfo.companylogo} alt="" loading="lazy" />
            ) : (
              initials
            )}
          </span>

          <div className="xp-card__heading">
            <h3 className="xp-card__role">{cardInfo.role}</h3>
            <p className="xp-card__company">
              {cardInfo.companyUrl ? (
                <a href={cardInfo.companyUrl} target="_blank" rel="noreferrer">
                  {cardInfo.company}
                  <i
                    className="fas fa-external-link-alt"
                    aria-hidden="true"
                  ></i>
                </a>
              ) : (
                cardInfo.company
              )}
            </p>
          </div>

          <span
            className={
              cardInfo.current
                ? "xp-card__date xp-card__date--now"
                : "xp-card__date"
            }
          >
            {cardInfo.date}
          </span>
        </header>

        {cardInfo.desc && <p className="xp-card__desc">{cardInfo.desc}</p>}

        {cardInfo.descBullets && cardInfo.descBullets.length > 0 && (
          <ul className="xp-card__bullets">
            {cardInfo.descBullets.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
