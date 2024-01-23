import React from "react";
import "./TitleContent.css";
import { PiArrowFatDownFill } from "react-icons/pi";
import Button from "../Button";

const TitleContent = () => {
  return (
    <section className="title-container">
      <div className="name-container">
        <h2 className="title-name">HAEWON LEE</h2>
        <p className="profile">
          Passionate about creating websites that resonate with diverse users,
          regardless of age or gender, in alignment with the unique purpose of
          each project.
        </p>
      </div>
      <div className="job-container">
        <h2 className="job-title-content">Front-end DEVELOPER</h2>
      </div>
      <div className="arrow-container">
        <PiArrowFatDownFill size={70} style={{ color: "#c93d3d" }} />
      </div>
      <div className="more-container">
        <Button clsName="btn-p" linkName="/about" btnTitle="MORE ABOUT ME" />
      </div>
    </section>
  );
};

export default TitleContent;
