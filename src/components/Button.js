import React from "react";
import { NavLink } from "react-router-dom";
import "./Button.css";

const Button = (props) => {
  return (
    <div className="btn-div">
      <NavLink to={props.linkName} className="btn">
        <p className="btn-p">{props.btnTitle}</p>
      </NavLink>
    </div>
  );
};

export default Button;
