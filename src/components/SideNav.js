import "../css/app.css";
import React, { useState } from "react";

function SideNav({ children, setClassName, className }) {
  return (
    <div className="App">
      <>
        {/* CONTAINER */}
        <div className={className}>
          {/*   SIDE NAV  */}
          <nav className="side-nav">
            <ul className="has-text-centered">
              <h5 className="title is-7 has-text-white">The OGs!</h5>
              <li>
                <a href="#">Thor</a>
              </li>
              <li>
                <a href="#">Iron Man</a>
              </li>
              <li>
                <a href="#">Spidey</a>
              </li>
              <li>
                <a href="#">Black Widow</a>
              </li>
              <li>
                <a href="#">Nick Fury</a>
              </li>
              <li>
                <a href="#">Capt. Sizzle Amizzle</a>
              </li>
              <li>
                <a href="#">Hawkeye</a>
              </li>
              <li>
                <a href="#">Hulk! Arrghh!!</a>
              </li>
            </ul>
          </nav>
          {/*   BODY SECTION */}
          {children}
        </div>
      </>
    </div>
  );
}

export default SideNav;
