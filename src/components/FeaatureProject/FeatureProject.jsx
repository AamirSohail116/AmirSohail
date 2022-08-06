import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import featureprojectData from "../../Data/featureProjectData";
import { Link } from "react-router-dom";

import "./FeatureProject.css";

function FeatureProject() {
  return (
    <div className="container">
      <div className="feature-projects">
        <div className="feature-project__title">
          <h3>Some Unique things I have built.</h3>
          <div className="line"></div>
        </div>
        <div className="feature-project">
          {featureprojectData.map((project, i) => (
            <div className="project" key={i}>
              <div className="left-p">
                <span>{project.feature}</span>
                <h3>{project.title}</h3>
                <div className="project-description">
                  <p>{project.description}</p>
                </div>
                <div className="technology">
                  {project.technology.map((tech, i) => (
                    <span>{tech}</span>
                  ))}
                </div>
                <div className="project-icon">
                  <div>
                    <OpenInNewIcon />
                  </div>
                  <div>
                    <GitHubIcon />
                  </div>
                </div>
              </div>
              <Link to="/#" className="right-p">
                <div className="blur-filter"></div>
                <img src={project.image} alt="" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureProject;
