import React from "react";
import DesktopAbout from "../about-me/DesktopAbout";
import DesktopHome from "../home/DesktopHome";
import DesktopCodeSnippets from "../code-snippets/DesktopCodeSnippets";

import "./desktop.scss";

function Desktop() {
  return (
    <div className="desktop">
      <DesktopAbout />

      <div className="desktop-content">
        <DesktopHome />
        <DesktopCodeSnippets />
      </div>
    </div>
  );
}

export default Desktop;
