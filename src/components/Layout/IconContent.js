import React from "react";
import "./IconContent.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaUnity,
  FaReact,
  FaGit,
  FaNode,
} from "react-icons/fa";
import { SiJavascript, SiCsharp, SiUnrealengine } from "react-icons/si";

const IconContent = () => {
  return (
    <div className="icon-container">
      <div className="icon-left-container">
        <h1 className="icon-categories">Skills_</h1>
        <p className="icon-desc">How I Do It</p>
      </div>
      <div className="icon-right-content">
        <div className="icon-box">
          <div className="icons">
            <FaHtml5 size={30} style={{ color: "#a6211c" }} />
          </div>
          <div className="icons">
            <FaCss3Alt size={30} style={{ color: "#a6211c" }} />
          </div>
          <div className="icons">
            <FaBootstrap size={30} style={{ color: "#a6211c" }} />
          </div>
          <div className="icons">
            <SiJavascript size={24} style={{ color: "#a6211c" }} />
          </div>
          <div className="icons">
            <FaReact size={30} style={{ color: "#a6211c" }} />
          </div>
          <div className="icons">
            <FaGit size={30} style={{ color: "#a6211c" }} />
          </div>
          <div className="icons">
            <FaNode size={45} style={{ color: "#a6211c" }} />
          </div>
          <div className="icons">
            <SiCsharp size={28} style={{ color: "#a6211c" }} />
          </div>
          <div className="icons">
            <FaUnity size={30} style={{ color: "#a6211c" }} />
          </div>
          <div className="icons">
            <SiUnrealengine size={30} style={{ color: "#a6211c" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconContent;
