import React, { useRef } from "react";
import "./ContactCard.css";
import emailjs from "@emailjs/browser";

const ContactCard = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rj326rd",
        "template_fwbdqo3",
        form.current,
        "aKXiz_joCVy6tfza8"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="address-container">
        <h1 className="address-content">haewyinmtl@gmail.com</h1>
        <p className="address-desc">
          For general enquiries or working together, feel free to reach out to
          me !
        </p>
      </div>
      <div className="second-container">
        <form ref={form} onSubmit={sendEmail} className="form-container">
          <label>Your name</label>
          <input type="text" name="user_name" />

          <label>Your Email</label>
          <input type="email" name="user_email" />

          <label>Message</label>
          <textarea type="text" name="message" placeholder="" />
          <div className="btn-container">
            <button type="submit" className="btn-contact">
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactCard;
