import React from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import Reveal from "../../components/reveal/Reveal";

export default function Contact() {
  return (
    <div className="main contact-section" id="contact">
      <Reveal>
        <div className="contact-panel">
          <div className="contact-panel__glow" aria-hidden="true"></div>

          <div className="contact-panel__content">
            <span className="section-eyebrow">Contact</span>
            <h1 className="section-title contact-title">{contactInfo.title}</h1>
            <p className="contact-subtitle">{contactInfo.subtitle}</p>

            <div className="contact-methods">
              <a
                className="contact-method contact-method--primary"
                href={`mailto:${contactInfo.email_address}`}
              >
                <i className="fas fa-envelope" aria-hidden="true"></i>
                <span>
                  <small>Email</small>
                  {contactInfo.email_address}
                </span>
              </a>

              {contactInfo.number && (
                <a
                  className="contact-method"
                  href={`tel:${contactInfo.number.replace(/\s/g, "")}`}
                >
                  <i className="fas fa-phone-alt" aria-hidden="true"></i>
                  <span>
                    <small>Phone</small>
                    {contactInfo.number}
                  </span>
                </a>
              )}
            </div>

            <div className="contact-social">
              <SocialMedia />
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
