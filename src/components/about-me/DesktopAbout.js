import React from "react";
import Contact from "./Contact";
import "./about.scss";

function DesktopAbout() {
  return (
    <div className="desktop__about">
      <h1>
        Anna <br /> Pawl
      </h1>
      <p>
        I'm a front-end engineer bridging the gap between development and
        design. I like making satisfying little experiences with code. The web
        should be fun ✨
        {/* <br />
        <br /> <span className="about-hover">Hover</span> over the things on the
        bookshelf for some mini surprises. Everything is made with pure CSS.
        Check out my project,{" "}
        <a href="https://anniepawl.github.io/dwc/" target="blank">
          Drawing with Code
        </a>
        , if you're interested in learning more about the process. */}
      </p>

      <Contact />
    </div>
  );
}

export default DesktopAbout;
