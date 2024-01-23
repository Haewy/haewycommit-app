import "./ImgContent.css";
import hobby from "../data/hobbies.json";
import Modal from "../components/Modal/Modal";
import { useState } from "react";

const ImgContent = () => {
  const [viewOpen, setViewOpen] = useState(false);

  return (
    <div className="img-container">
      {hobby.map((value, index) => {
        return (
          <div className="img-card" key={index}>
            <div className="img-box">
              <img src={value.imgsrc} alt={`Image of ${value.title}`} />
            </div>
            <div className="img-overlay-card">
              <button className="btn-view" onClick={() => setViewOpen(true)}>
                {/* <button
                className="btn-view"
                onClick={() => modalhandler(value, index)}
              > */}
                view more: {index}
              </button>
              <Modal>This is modal</Modal>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ImgContent;
