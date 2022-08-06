import React from "react";
import SourceIcon from "@mui/icons-material/Source";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import SimpleProjectData from "../../Data/SimpleProjectData";
import "./SimpleProject.css";

function SimpleProject() {
  return (
    <div className="simpleProjects">
      <div className="simpleproject-heading">
        <h3>Other Noteworthy Projects</h3>
        <span>view the archieve</span>
      </div>
      <div className="projects">
        {SimpleProjectData.map((project, i) => (
          <a href={project.url} target="_blank" className="project-cart" key={i}>
            <div className="project-cart__icon">
              <div>
                <SourceIcon style={{ fontSize: "70px", color: "#24d5db" }} />
              </div>
              <div>
                <GitHubIcon style={{ fontSize: "25px", color: "#a3bacc" }} />
                <OpenInNewIcon style={{ fontSize: "25px", color: "#a3bacc" }} />
              </div>
            </div>
            <h3 className="p-title">{project.title}</h3>
            <div className="p-description">{project.description}</div>
            <div className="p-language">
              <span>React</span>
              <span>Redux</span>
              <span>Firebase</span>
            </div>
          </a>
        ))}
      </div>
      <button className="btn s-btn">Show more</button>
    </div>
  );
}

export default SimpleProject;
