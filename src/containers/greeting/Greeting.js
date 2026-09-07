import React, {useContext, useEffect, useState} from "react";
import Reveal from "../../components/reveal/Reveal";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting, heroStats} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

function RoleRotator({roles}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!roles || roles.length < 2) {
      return undefined;
    }
    const timer = setInterval(
      () => setIndex(i => (i + 1) % roles.length),
      2600
    );
    return () => clearInterval(timer);
  }, [roles]);

  if (!roles || roles.length === 0) {
    return null;
  }

  return (
    <span className="role-rotator" aria-live="polite">
      <span key={index} className="role-rotator__item gradient-text">
        {roles[index]}
      </span>
    </span>
  );
}

export default function Greeting() {
  const {isDark} = useContext(StyleContext);

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <div className="hero" id="greeting">
      <div className="hero__glow hero__glow--one" aria-hidden="true"></div>
      <div className="hero__glow hero__glow--two" aria-hidden="true"></div>

      <div className="hero__inner">
        <Reveal>
          <div className="hero__content">
            <span className="hero__badge">
              <span className="hero__badge-dot"></span>
              {greeting.currentRole || "Available for work"}
            </span>

            <h1 className="hero__name">{greeting.title}</h1>

            <p className="hero__role">
              <RoleRotator roles={greeting.roles} />
            </p>

            <p className="hero__subtitle">{greeting.subTitle}</p>

            {greeting.location && (
              <p className="hero__location">
                <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                {greeting.location}
              </p>
            )}

            <SocialMedia />

            <div className="hero__actions">
              <Button text="View my work" href="#projects" />
              <Button text="Get in touch" href="#contact" variant="ghost" />
              {greeting.resumeLink && (
                <a
                  href={greeting.resumeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="download-link-button"
                >
                  <Button text="Résumé" variant="ghost" />
                </a>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" delay={120} className="hero__media-reveal">
          <div className="hero__media">
            <div className="hero__portrait-wrap">
              <div className="hero__portrait-ring" aria-hidden="true"></div>
              <img
                className="hero__portrait"
                alt={`${greeting.username} portrait`}
                src={greeting.profileImage}
                width="1003"
                height="1254"
              />
              <div
                className={
                  isDark
                    ? "hero__chip hero__chip--one hero__chip--dark"
                    : "hero__chip hero__chip--one"
                }
              >
                <i className="fas fa-code" aria-hidden="true"></i>
                Full-Stack
              </div>
              <div
                className={
                  isDark
                    ? "hero__chip hero__chip--alt hero__chip--dark"
                    : "hero__chip hero__chip--alt"
                }
              >
                <i className="fas fa-brain" aria-hidden="true"></i>
                AI / ML
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {heroStats.display && (
        <Reveal delay={80}>
          <div className="hero__stats">
            {heroStats.stats.map((stat, i) => (
              <div className="hero__stat" key={i}>
                <span className="hero__stat-value gradient-text">
                  {stat.value}
                </span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      )}
    </div>
  );
}
