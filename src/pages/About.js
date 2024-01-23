import React from "react";
import NavBar from "../components/Layout/NavBar/NavBar";
import Footer from "../components/Layout/Footer";
import TextContent from "../components/Layout/TextContent";
import TextContent1 from "../components/Layout/TextContent1";
import TitleLeft from "../components/Layout/TitleLeft";

function About() {
  return (
    <div>
      <NavBar />
      <TextContent heading="About___" desc_01="FRONT-END" desc_02="DEVELOPER" />
      <TextContent1 text_1="I am aspiring to be a web developer who creates responsive web pages with consideration for accessibility and web standards that appeal to people of all ages and genders, in line with the purpose of the website." />
      <TitleLeft
        category_01="Experience_"
        category_02="Education_"
        desc_01="What"
        desc_02="I have worked"
      />

      <Footer />
    </div>
  );
}

export default About;
