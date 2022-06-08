import React from "react";
import { HashLink } from "react-router-hash-link";
import Contact from "./Contact";
import "./about.scss";

function MobileAbout() {
  return (
    <div className="mobile__about">
      <h1>
        Anna
        <br /> Pawl
      </h1>
      <p>
        Hi! Welcome to my little corner of the internet. I'm a front-end
        engineer bridging the gap between development and design. I like making
        satisfying little experiences with code because the web should be fun ✨{" "}
        <br />
        <br />
        <b>General nerdery:</b> roller skating, {""}
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
      </p>

      <div className="mobile__contact">
        <Contact />
      </div>
    </div>
  );
}

export default MobileAbout;
