import React from "react";
import "./about.scss";
import { HashLink } from "react-router-hash-link";

function DesktopNav() {
  return (
    <div className="desktop-nav">
      <HashLink smooth to="#code-snippets">
        <p>Code Snippets</p>
      </HashLink>
    </div>
  );
}

export default DesktopNav;
