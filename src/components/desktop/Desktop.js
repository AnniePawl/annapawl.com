import React from "react";
import About from "../about-me/DesktopAbout";
import Shelves from "../css-items/shelves/Shelves";
import "./desktop.scss";

function Desktop() {
  return (
    <div className="desktop">
      <About />
      <Shelves />
    </div>
  );
}

export default Desktop;
