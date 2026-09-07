import React from "react";
import "./Footer.scss";
import Reveal from "../reveal/Reveal";
import {greeting} from "../../portfolio";

export default function Footer() {
  return (
    <Reveal>
      <footer className="site-footer">
        <div className="site-footer__inner">
          <p className="site-footer__text">
            © {new Date().getFullYear()} <strong>{greeting.username}</strong> —
            Full-Stack Software Engineer
          </p>
          <p className="site-footer__meta">
            Built with React · Deployed on Vercel
          </p>
        </div>
      </footer>
    </Reveal>
  );
}
