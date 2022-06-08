import React from "react";
import { HashLink } from "react-router-hash-link";
import Contact from "./Contact";
import DesktopNav from "./DesktopNav";
import { ReactComponent as StarIcon } from "../../assets/star-icon.svg";
import "./about.scss";

function DesktopAbout() {
  return (
    <div className="desktop__about">
      <div className="desktop__about__icon">
        <HashLink smooth to="#home">
          <StarIcon />
        </HashLink>
      </div>
      <h1>
        Anna <br /> Pawl
      </h1>
      <p>
        Hi! Welcome to my little corner of the internet. I'm a front-end
        engineer bridging the gap between development and design. I like making
        satisfying little experiences with code. The web should be fun ✨
      </p>

      <DesktopNav />

      <Contact />
    </div>
  );
}

export default DesktopAbout;
