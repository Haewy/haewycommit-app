import React from "react";
import "./Projects.css";
import projects from "../../../data/projects.json";
import p01 from "../../../assets/christmas.png";
// import { getImageUrl } from "../../../utils";
const Projects = () => {
  return (
    <div className="project-container">
      <div className="project-content">
        {projects.map((project, id) => {
          return (
            <div className="content-container" key={id}>
              {console.log(project.imgsrc)}
              <img
                className="project-img"
                src={p01}
                alt={`Image of ${project.title}`}
              />
              {/* <div className="detail-container">
              <div className="detail-box">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <ul>
                  {project.skills.map((skill, id) => {
                    return (
                      <li className="project-skill" key={id}>
                        {skill}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
