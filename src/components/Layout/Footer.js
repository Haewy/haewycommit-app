import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PiHeartDuotone, PiLink } from "react-icons/pi";
import "./Footer.css";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">
        <h4>Made by HAEWY with</h4>
        <div className="heart">
          <PiHeartDuotone size={16} style={{ color: "#feffd9" }} />
        </div>
      </div>

      <ul className="list-icon">
        <li>
          <FaLinkedin size={20} style={{ color: "#feffd9" }} />
        </li>
        <li>
          <FaGithub size={20} style={{ color: "#feffd9" }} />
        </li>
        <li>
          <PiLink size={20} style={{ color: "#feffd9" }} />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
