import React from "react";

import "./header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <div className="left-h">
          <h1>Amir</h1>
        </div>
        <div className="right-h">
          <ul>
            <li>
              {" "}
              <a href="#!">About</a>{" "}
            </li>
            <li>
              <a href="#!">Work</a>
            </li>
            <li>
              <a href="#!">UI Design</a>
            </li>
            <li>
              <a href="#!">Contact</a>
            </li>
          </ul>
          <button className="header-btn">Resume</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
