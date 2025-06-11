import React from "react";
import "../styles/footer.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="anclas">
        <a
          href={"https://www.instagram.com/juantosi1/"}
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href={"https://www.linkedin.com/in/juan-tosi-488b66338/"}
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href={"https://github.com/JuanTosi"}
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
