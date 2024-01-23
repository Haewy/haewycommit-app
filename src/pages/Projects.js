import React from "react";

import NavBar from "../components/Layout/NavBar/NavBar";
import Footer from "../components/Layout/Footer";
import TextContent from "../components/Layout/TextContent";
import Work from "../components/Layout/Projects/Work";

function Projects() {
  return (
    <div>
      <NavBar />
      <TextContent
        heading="Projects___"
        desc_01="My small"
        desc_02="personal creations"
      />
      <Work />
      <Footer />
    </div>
  );
}

export default Projects;
