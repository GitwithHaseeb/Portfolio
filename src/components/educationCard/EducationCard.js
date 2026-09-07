import React from "react";
import "./EducationCard.scss";

export default function EducationCard({school}) {
  return (
    <article className="edu-card">
      {school.logo && (
        <div className="edu-card__logo">
          <img src={school.logo} alt={school.schoolName} loading="lazy" />
        </div>
      )}

      <div className="edu-card__body">
        <div className="edu-card__top">
          <h3 className="edu-card__school">{school.schoolName}</h3>
          {school.duration && (
            <span className="edu-card__duration">{school.duration}</span>
          )}
        </div>

        <p className="edu-card__degree">{school.subHeader}</p>

        {school.desc && <p className="edu-card__desc">{school.desc}</p>}

        {school.descBullets && school.descBullets.length > 0 && (
          <ul className="edu-card__bullets">
            {school.descBullets.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
