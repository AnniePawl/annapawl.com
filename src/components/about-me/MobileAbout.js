import React from "react";
import Contact from "./Contact";
import "./about.scss";

function MobileAbout() {
  return (
    <div className="mobile__about">
      <h1>
        Anna <br /> Pawl
      </h1>
      <p>
        I'm a front-end engineer bridging the gap between development and
        design. I like making satisfying little experiences with code. The web
        should be fun ✨<br />
      </p>
      <div className="mobile__contact">
        <Contact />
      </div>
    </div>
  );
}

export default MobileAbout;
