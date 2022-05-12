import React from "react";
import DesktopAbout from "../about-me/DesktopAbout";
import DesktopHome from "../home/DesktopHome";
import DesktopCodeSnippets from "../code-snippets/DesktopCodeSnippets";
import CreativeProjects from "../creative-projects/CreativeProjects";
import Writing from "../writing/writing";

import "./desktop.scss";

function Desktop() {
  return (
    <div className="desktop">
      <DesktopAbout />

      <div className="desktop-content">
        <DesktopHome />
        <DesktopCodeSnippets />
        <CreativeProjects />
        <Writing />
      </div>
    </div>
  );
}

export default Desktop;
