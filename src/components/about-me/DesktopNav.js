import React from "react";
import "./about.scss";
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";

function DesktopNav() {
  return (
    <div >
       <Link to="/codesnippets">
        <p class='tracking-wide'>Mini Coding Projects</p>
      </Link>
      {/* <HashLink smooth to="#creative-projects">
        <p class='tracking-wide'>Creative Projects</p>
      </HashLink> */}
      {/* <HashLink smooth to="#writing">
        <p class='tracking-wide'>Writing</p>
      </HashLink> */}
    </div>
  );
}

export default DesktopNav;
