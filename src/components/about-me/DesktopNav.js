import React from "react";
import "./about.scss";
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";

function DesktopNav() {
  return (
    <div >
      <Link to="/dwc">
        <p class='text-xs mb-1 text-blue-400 hover:text-blue-600 transition-colors tracking-wide'>Drawing with Code</p>
      </Link> 
      <Link to="/codesnippets">
        <p class='text-xs mb-1 text-blue-400 hover:text-blue6500 transition-colors tracking-wide'>Mini Coding Projects</p>
      </Link> 
      <Link to="/embroidery">
        <p class='text-xs mb-1 text-blue-400 hover:text-blue-600 transition-colors tracking-wide'>Embroidery</p>
      </Link> 
      {/* <b>General nerdery:</b> roller skating, {""}
        <HashLink smooth to="#code-snippets">
          <span>css art</span>
        </HashLink>{" "}
        , cooking
        <HashLink smooth to="#embroidery">
          , <span>embroidering,</span>
        </HashLink>{" "}
        playing cello, {""}
        <HashLink smooth to="#writing">
          <span>writing</span>
        </HashLink>
        , podcasts, going down rabbit holes 🐰
        
       <Link to="/codesnippets">
        <p class='tracking-wide'>Mini Coding Projects</p>
      </Link> */}
    </div>
  );
}

export default DesktopNav;
