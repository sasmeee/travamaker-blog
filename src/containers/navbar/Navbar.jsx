import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          TM Blog
        </Link>
        <div className="nav-menu-pc">
          <Link to="/" className="nav-link">
            <p>Home</p>
          </Link>
          <Link to="/about" className="nav-link">
            <p>About</p>
          </Link>
          <Link to="/contact" className="nav-link">
            <p>Contact</p>
          </Link>
        </div>
        <div
          className="nav-menu-mob"
          style={{
            visibility: `${menuOpen ? "visible" : "hidden"}`,
            opacity: `${menuOpen ? "100%" : "0%"}`,
            transition: "opacity 0.5s",
          }}
        >
          <Link to="/" className="nav-link">
            <p onClick={closeMenu}>Home</p>
          </Link>
          <Link to="/about" className="nav-link">
            <p onClick={closeMenu}>About</p>
          </Link>
          <Link to="/contact" className="nav-link">
            <p onClick={closeMenu}>Contact</p>
          </Link>
        </div>
        <div className="nav-toggle">
          <RiCloseLine
            style={{
              visibility: `${menuOpen ? "visible" : "hidden"}`,
              opacity: `${menuOpen ? "100%" : "0%"}`,
              transition: "opacity 1s",
              position: "absolute",
            }}
            onClick={() => {
              setMenuOpen(false);
            }}
          />
          <RiMenu3Line
            style={{
              visibility: `${menuOpen ? "hidden" : "visible"}`,
              opacity: `${menuOpen ? "0%" : "100%"}`,
              transition: "opacity 0.5s",
              position: "absolute",
            }}
            onClick={() => {
              setMenuOpen(true);
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
