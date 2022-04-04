import React from "react";
import Contact from "../about-me/Contact";
import "./mobile-links.scss";

function MobileLinks() {
  return (
    <div className="MobileLinks">
      <ul className="mobile-links">
        <li>
          <Contact />
        </li>
        <div>
          <li>
            <a href="https://github.com/AnniePawl" target="blank">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://codepen.io/annampawl" target="blank">
              CodePen
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default MobileLinks;
