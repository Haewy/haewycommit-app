import React from "react";

import Footer from "../components/Layout/Footer";
import TextContent from "../components/Layout/TextContent";
import ImageContent from "../components/ImageContent";
import NavBar from "../components/Layout/NavBar/NavBar";

//import ImgContent from "../components/ImgContent";

const Hobbies = () => {
  return (
    <div>
      <NavBar />

      <TextContent
        heading="Hobbies___"
        desc_01="Drawing"
        desc_02="my emotions"
      />
      {/* <ImgContent /> */}
      <ImageContent />
      <Footer />
    </div>
  );
};

export default Hobbies;
