import React from "react";
import NavBar from "../components/Layout/NavBar/NavBar";
import Footer from "../components/Layout/Footer";
import TextContent from "../components/Layout/TextContent";
import ContactCard from "../components/Layout/Contact/ContactCard";

function Contact() {
  return (
    <div>
      <NavBar />
      <TextContent
        heading="Contact___"
        desc_01="I am"
        desc_02="happy to talk"
        // text_2="I am happly to talk For general enquiries or working together"
      />
      <ContactCard />
      <Footer />
    </div>
  );
}

export default Contact;
