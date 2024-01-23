import React from "react";
import "./TabButton.css";

const TabButton = ({ children, isActive, onClick }) => {
  if (isActive) {
    return (
      <p className="tab">
        {children}
        <span> &#10003;</span>
      </p>
    );
  }
  return (
    /*When it is clicked, it turns into <p>
    When it isn't clicked, it turns into <button>*/
    <button
      className="tab-container"
      onClick={() => {
        onClick();
      }}
    >
      {children}_
    </button>
  );
};

export default TabButton;
