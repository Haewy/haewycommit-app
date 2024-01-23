import React from "react";
import NavBar from "../components/Layout/NavBar/NavBar";
import Footer from "../components/Layout/Footer";
import TitleContent from "../components/Layout/TitleContent";
import EndingContent from "../components/Layout/EndingContent";

const Home = () => {
  return (
    <div>
      <NavBar />
      <TitleContent />
      {/* <Card /> */}

      <EndingContent />
      <Footer />
    </div>
  );
};

export default Home;
