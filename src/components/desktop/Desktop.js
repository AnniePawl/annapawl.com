import React from "react";
import DesktopAbout from "../about-me/DesktopAbout";
import DesktopShelves from "../css-items/shelves/DesktopShelves";

import "./desktop.scss";

function Desktop() {
  return (
    <div className="desktop">
      <DesktopAbout />
      <div className="desktop-shelves-container">
        <DesktopShelves />
      </div>
    </div>
  );
}

export default Desktop;
