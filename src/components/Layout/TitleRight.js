import React from "react";
import "./TitleRight.css";

const TitleRight = (props) => {
  return (
    <div className="titleR-container">
      <div className="titleR-left-content">
        <p className="titleR-year">{props.year1}</p>
        <p className="titleL-company">{props.company1}</p>
        <p className="titleR-detail">{props.detail1}</p>
        <p className="titleR-year">{props.year2}</p>
        <p className="titleL-company">{props.company2}</p>
        <p className="titleR-detail">{props.detail2}</p>
      </div>
      <div className="titleR-right-content">
        <div className="titleR-categories">{props.categories}</div>
      </div>
    </div>
  );
};

export default TitleRight;
