// import React, { Fragment, useState } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";
// import ModalContent from "./ModalContent";

import { FaTimes } from "react-icons/fa";

const Modal = ({ isOpen, children, onClose, clickedImg, desc }) => {
  if (!isOpen) {
    return null;
  }
  return createPortal(
    <div className="modal-container">
      <div className="modal-box">
        <div className="left-container">
          <h2 className="modal-title">{children}</h2>
          <p className="modal-desc">{desc}</p>
        </div>

        <div className="modal-img-container">
          <button className="btn-modal" onClick={onClose}>
            <FaTimes />
          </button>
          <img src={clickedImg} />
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
