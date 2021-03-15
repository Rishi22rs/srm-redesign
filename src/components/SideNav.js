import "../css/app.css";
import React, { useState } from "react";

function SideNav({ children, setClassName, className }) {
  return (
    <div className="App">
      <div
        className={className}
        style={className === "canvas show-nav" ? { overflow: "hidden" } : {}}
      >
        {children}
      </div>
      <div className="sideNav-container">
        <input type="text" placeholder="search" className="inp" />
        <div className="links">
          <a style={{ color: "#ff4655" }} className="side-links" href="#home">
            HOME
          </a>

          <a style={{ color: "#ff4655" }} className="side-links" href="#news">
            LATEST NEWS
          </a>

          <a
            style={{ color: "#ff4655" }}
            className="side-links"
            href="#research"
          >
            RESEARCH
          </a>

          <a style={{ color: "#ff4655" }} className="side-links" href="#campus">
            CAMPUS LIFE
          </a>

          <a
            style={{ color: "#ff4655" }}
            className="side-links"
            href="#admission"
          >
            ADMISSION
          </a>

          <a style={{ color: "#ff4655" }} className="side-links" href="#about">
            ABOUT
          </a>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
