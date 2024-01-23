import "./ImageContent.css";
//import HobbyList from "../data/HobbyList";
import hobby from "../data/hobbies.json";
import Modal from "./Modal/Modal";
import { Fragment, useState } from "react";

const ImageContent = () => {
  const [IsViewOpen, setIsViewOpen] = useState(false);

  const [clickedImg, setClickedImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const modalhandler = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.imgsrc);
    setImgTitle(item.title);

    console.log(index);
    console.log(item.title);
    console.log(item.imgsrc);
  };

  return (
    <div className="img-container">
      {hobby.map((value, index) => {
        return (
          <div className="img-card" key={index}>
            <div className="img-box">
              <img src={value.imgsrc} alt={`Image of ${value.title}`} />
            </div>
            <div className="img-overlay-card">
              <button
                className="btn-view"
                // onClick={() => setIsViewOpen(true)}
                onClick={() => {
                  setIsViewOpen(true);
                  modalhandler(value, index);
                }}
              >
                view more: {index}
              </button>
              {/* */}
            </div>
            <Modal
              isOpen={IsViewOpen}
              clickedImg={clickedImg}
              onClose={() => setIsViewOpen(false)}
              desc="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. "
            >
              {imgTitle}
            </Modal>
          </div>
        );
      })}

      {/* {hobby.map(() => {})}
      <Modal isOpen={IsViewOpen} imgSrc="" onClose={() => setIsViewOpen(false)}>
        This message from Modal
      </Modal> */}
    </div>
  );
};

export default ImageContent;
