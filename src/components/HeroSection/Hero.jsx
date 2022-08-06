import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="container">
      <div className="hero">
        <span>Hello, my name is</span>
        <span>Aamir Sohail</span>
        <span>Interactive Front-end developer.</span>
        <span>
          I'm a full stack developer specializing in building (and occasionally
          designing) exceptional digital experiences.
        </span>
        <button className="btn hero-btn">Get In Touch</button>
      </div>
    </div>
  );
}

export default Hero;
