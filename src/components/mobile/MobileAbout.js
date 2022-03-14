import React from "react";
import "./mobile.scss";

function MobileAbout() {
  return (
    <div className="mobile-about">
      <h1>
        Anna <br /> Pawl
      </h1>
      <p className="mobile-about-me">
        I'm a software engineer with a focus on front-end development and an
        interest in design. I love using my creativity to make satisfying little
        experiences with code. The web should be fun ✨ <br />
        <br /> Scroll down to get to know me better. I made each item with pure
        CSS. Check out my website,{" "}
        <a href="https://anniepawl.github.io/dwc/" target="blank">
          Drawing with Code
        </a>
        , if you're interested in learning more about the process.
      </p>

      <ul className="mobile-links">
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
      </ul>
    </div>
  );
}

export default MobileAbout;
