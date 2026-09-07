import React, {useMemo, useState} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import Reveal from "../../components/reveal/Reveal";

const linkIcon = name => {
  const key = (name || "").toLowerCase();
  if (key.includes("github")) return "fab fa-github";
  if (key.includes("live") || key.includes("demo"))
    return "fas fa-external-link-alt";
  return "fas fa-link";
};

export default function StartupProject() {
  const categories = bigProjects.categories || ["All"];
  const [active, setActive] = useState(categories[0]);

  const counts = useMemo(() => {
    const map = {All: bigProjects.projects.length};
    bigProjects.projects.forEach(p => {
      map[p.category] = (map[p.category] || 0) + 1;
    });
    return map;
  }, []);

  const visible = useMemo(
    () =>
      active === "All"
        ? bigProjects.projects
        : bigProjects.projects.filter(p => p.category === active),
    [active]
  );

  if (!bigProjects.display) {
    return null;
  }

  return (
    <div className="main projects-section" id="projects">
      <Reveal>
        <div className="section-head">
          <span className="section-eyebrow">Portfolio</span>
          <h1 className="section-title">{bigProjects.title}</h1>
          <p className="section-subtitle">{bigProjects.subtitle}</p>
        </div>

        <div
          className="project-filters"
          role="tablist"
          aria-label="Filter projects"
        >
          {categories.map(cat => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={active === cat}
              className={
                active === cat
                  ? "project-filter project-filter--active"
                  : "project-filter"
              }
              onClick={() => setActive(cat)}
            >
              {cat}
              <span className="project-filter__count">{counts[cat] || 0}</span>
            </button>
          ))}
        </div>
      </Reveal>

      <div className="projects-container">
        {visible.map(project => (
          <article
            key={project.projectName}
            className={
              project.featured
                ? "project-card project-card--featured"
                : "project-card"
            }
          >
            <div className="project-card__top">
              <span className="project-card__icon" aria-hidden="true">
                <i className={project.icon || "fas fa-code"}></i>
              </span>
              <span className="project-card__category">{project.category}</span>
              {project.featured && (
                <span className="project-card__star" title="Featured project">
                  <i className="fas fa-star" aria-hidden="true"></i>
                </span>
              )}
            </div>

            <h3 className="project-card__title">{project.projectName}</h3>
            <p className="project-card__desc">{project.projectDesc}</p>

            {project.tech && project.tech.length > 0 && (
              <ul className="project-card__tech">
                {project.tech.map(t => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            )}

            {project.footerLink && project.footerLink.length > 0 && (
              <div className="project-card__links">
                {project.footerLink.map(link => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className={
                      link.name.toLowerCase().includes("live")
                        ? "project-link project-link--primary"
                        : "project-link"
                    }
                  >
                    <i className={linkIcon(link.name)} aria-hidden="true"></i>
                    {link.name}
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
