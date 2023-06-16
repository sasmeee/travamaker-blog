import React from "react";
import { FaYoutube, FaInstagram, FaGithub } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-text">
          TM Blog &copy; {new Date().getFullYear()}
        </p>
        <div className="footer-social">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="footer-icon" />
          </a>
          <a
            href="https://www.youtube.com/your-channel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="footer-icon" />
          </a>
          <a
            href="https://www.instagram.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="footer-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
