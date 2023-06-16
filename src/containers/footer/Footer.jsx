import React from "react";
import { FaYoutube, FaInstagram, FaGithub } from "react-icons/fa";
import "./Footer.css";

const GitURL = 'https://github.com/Sasmeee'
const InstaURL = 'https://instagram.com/sinhalaya_official_'
const YtURL = 'https://youtube.com/@travamaker'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-text">
          TM Blog &copy; {new Date().getFullYear()}
        </p>
        <div className="footer-social">
          <a
            href={GitURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="footer-icon" />
          </a>
          <a
            href={YtURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="footer-icon" />
          </a>
          <a
            href={InstaURL}
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
