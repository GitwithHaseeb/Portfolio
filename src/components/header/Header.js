import React, {useContext, useEffect, useState} from "react";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  educationInfo,
  bigProjects,
  achievementSection
} from "../../portfolio";

const NAV_ITEMS = [
  {id: "skills", label: "Skills", show: () => skillsSection.display},
  {id: "experience", label: "Experience", show: () => workExperiences.display},
  {id: "education", label: "Education", show: () => educationInfo.display},
  {id: "projects", label: "Projects", show: () => bigProjects.display},
  {
    id: "achievements",
    label: "Competencies",
    show: () => achievementSection.display
  },
  {id: "contact", label: "Contact", show: () => true}
];

function Header() {
  const {isDark} = useContext(StyleContext);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = NAV_ITEMS.filter(item => item.show());

  return (
    <header
      className={[
        "site-header",
        scrolled ? "site-header--scrolled" : "",
        isDark ? "site-header--dark" : ""
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="site-header__inner">
        <a href="#greeting" className="site-header__logo">
          <span className="site-header__logo-mark">MH</span>
          <span className="site-header__logo-text">{greeting.username}</span>
        </a>

        <nav
          className={open ? "site-nav site-nav--open" : "site-nav"}
          aria-label="Primary"
        >
          <ul className="site-nav__list">
            {items.map(item => (
              <li key={item.id}>
                <a href={`#${item.id}`} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <ToggleSwitch />
          <button
            type="button"
            className="site-header__burger"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            <span className={open ? "burger burger--open" : "burger"}></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
