import React, { Component } from "react";
import "./TextContent.css";

class TextContent extends Component {
  render() {
    return (
      <div className="text-content">
        <div className="heading-container">
          <h1 className="text-heading">{this.props.heading}</h1>
          <p className="text-desc-s">{this.props.desc_01}</p>
          <p className="text-desc-l">{this.props.desc_02}</p>
        </div>
      </div>
    );
  }
}
export default TextContent;
