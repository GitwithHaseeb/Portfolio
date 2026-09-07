import React from "react";
import "./SplashScreen.css";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import {greeting, splashScreen} from "../../portfolio";

export default function SplashScreen() {
  return (
    <div className="splash-container">
      <div className="splash-animation-container">
        <DisplayLottie animationData={splashScreen.animation} />
      </div>
      <div className="splash-title-container">
        <span className="splash-logo-mark">MH</span>
        <span className="splash-title">{greeting.username}</span>
      </div>
      <p className="splash-tagline">Software Engineer</p>
    </div>
  );
}
