import React, { useState } from "react";
import "./Sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Toggle Button */}
      <button className={`sidebar-toggle ${isOpen ? "open" : ""}`} onClick={toggleSidebar}>
        <span className="bar top"></span>
        <span className="bar middle"></span>
        <span className="bar bottom"></span>
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#about" onClick={closeSidebar}>About</a></li>
          <li><a href="#projects" onClick={closeSidebar}>Projects</a></li>
          <li><a href="#contact" onClick={closeSidebar}>Contact</a></li>
          <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a href="https://gmail.com" target="_blank" rel="noreferrer">Gmail</a></li>
        </ul>
      </div>

      {/* Overlay */}
      <div className={`overlay ${isOpen ? "show" : ""}`} onClick={closeSidebar}></div>
    </>
  );
}

export default Sidebar;