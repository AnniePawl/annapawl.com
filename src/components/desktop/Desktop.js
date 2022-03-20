import React from "react";
import About from "../about-me/DesktopAbout";
import DesktopShelves from "../css-items/shelves/DesktopShelves";

import "./desktop.scss";

function Desktop() {
  return (
    <div className="desktop">
      <About />
      <div className="desktop-shelves-container">
        <DesktopShelves />
      </div>
    </div>
  );
}

export default Desktop;
