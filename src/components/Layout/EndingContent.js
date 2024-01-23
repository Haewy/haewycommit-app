import React from "react";
import "./EndingContent.css";

import Button from "../Button";

const EndingContent = () => {
  return (
    <div className="ending-content">
      <h2 className="htwo">LET'S DO SOMETHING TOGETHER</h2>
      <div className="btn-ending">
        <Button linkName="/contact" btnTitle="CONTACT" />
      </div>
    </div>
  );
};

export default EndingContent;
