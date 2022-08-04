import React from "react";

import amir from "../../assets/amir.jpeg";
import "./About.css";

function About() {
  return (
    <div className="container">
      <div className="about">
        <div className="left-about">
          <div className="about-title">
            <h3>About Me</h3>
            <div className="line"></div>
          </div>
          <span>
            Hello! My name is Usama and I enjoy creating things that live on the
            internet. My interest in web development started back in 2017. I started
            my coding journey from Web Desiging. In first days I learned wordpress
            and custom coding in wordpress blogging taught me a lot about HTML & CSS!
          </span>
          <span>
            Fast-forward to today, I've had the privilege of working at a school, a
            start-up and a design house. My goal these days is to build my
            interactive content at NETTECH.
          </span>
          <div className="skills">
            <span>Here are a few technologies I've been working with recently:</span>
            <ul>
              <span className="left-li">
                <li>JavaScript</li>
                <li>React</li>
                <li>Node Js</li>
              </span>
              <span className="right-li">
                <li>Bootstrap</li>
                <li>Bootstrap | Tailwind</li>
                <li>Html Css</li>
              </span>
            </ul>
          </div>
        </div>
        <div className="right-about">
          <div className="img-container">
            <div></div>
            <img src={amir} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
