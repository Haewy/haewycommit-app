import React from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";
import ProjectList from "../data/ProjectList";

const Card = (props) => {
  return (
    <div className="card">
      {ProjectList.map((value, index) => {
        return (
          <div className="card-container" key={index}>
            <img src={value.imgsrc} alt={value.title} />
            <h1 className="card-title">{value.title}</h1>
            <div className="card-desc">
              <p>Image description</p>
              <div className="btn-div">
                <NavLink to="/projects" className="btn">
                  Detail
                </NavLink>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
