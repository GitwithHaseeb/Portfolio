import React from "react";
import "./Button.scss";

export default function Button({text, className, href, newTab, variant}) {
  const classes = [
    "main-button",
    variant === "ghost" ? "main-button--ghost" : ""
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className}>
      <a
        className={classes}
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noreferrer" : undefined}
      >
        {text}
      </a>
    </div>
  );
}
