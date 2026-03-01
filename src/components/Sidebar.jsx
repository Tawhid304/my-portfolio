import React, { useState } from "react";
import {
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaGoogle,
} from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        className={`sidebar-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleSidebar}
      >
        <span className="bar top"></span>
        <span className="bar middle"></span>
        <span className="bar bottom"></span>
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        {/* Profile Section */}
        <div className="sidebar-profile">
          <div className="avatar">TA</div>
          <h3>Tawhidullah</h3>
          <p>Full Stack Developer</p>
        </div>

        <ul>
          <li>
            <a href="#about" onClick={closeSidebar}>
              <FaUser className="nav-icon" />
              About
            </a>
          </li>

          <li>
            <a href="#projects" onClick={closeSidebar}>
              <FaProjectDiagram className="nav-icon" />
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" onClick={closeSidebar}>
              <FaEnvelope className="nav-icon" />
              Contact
            </a>
          </li>

          <li>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="nav-icon" />
              Facebook
            </a>
          </li>

          <li>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="nav-icon" />
              LinkedIn
            </a>
          </li>

          <li>
            <a
              href="mailto:tawhid.zia.2020@gmail.com"
            >
              <FaGoogle className="nav-icon" />
              Gmail
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      <div
        className={`overlay ${isOpen ? "show" : ""}`}
        onClick={closeSidebar}
      ></div>
    </>
  );
}

export default Sidebar;