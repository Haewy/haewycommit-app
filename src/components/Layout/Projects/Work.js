import React from "react";
import project from "../../../data/projects.json";
import "./Work.css";
const Work = () => {
  return (
    <div className="work-background">
      {/* <div className="work"> */}
      {project.map((prj, id) => {
        return (
          <div className="work-container">
            <div className="work-info">
              <div className="work-box">
                <div className="img-hover-box">
                  <img src={prj.imgsrc} alt={`Image of ${prj.title}`} />
                </div>
              </div>
              <div className="work-text">
                <h3>{prj.title}</h3>
                <p>{prj.desc}</p>
                <div className="skill-text">
                  <p className="work-skill">{prj.skills}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {/* </div> */}
    </div>
  );
};

export default Work;
