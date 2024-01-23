import React from "react";
import "./TextContent1.css";

export default function TextContent1(props) {
  return (
    <div className="text1-content">
      <div className="desc-container">
        <p className="desc-content">
          {props.text_1}
          <br />
          {props.text_2}
        </p>
      </div>
      <div className="btn-container">
        {/* <h3 className="job-title">{props.jobtitle}</h3>
        <h2 className="name-title">{props.title}</h2> */}
        <div className="download-container">
          <a href="CV_HL.pdf" download="Haewon Lee Resume.pdf">
            <button className="btn-download">Download Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
}
