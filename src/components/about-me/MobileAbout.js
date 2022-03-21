import React from "react";
import "./about.scss";

function MobileAbout() {
  return (
    <div className="mobile-about">
      <h1>
        Anna <br /> Pawl
      </h1>
      <p>
        I'm a software engineer with a focus on front-end development and an
        interest in design. I love using my creativity to make satisfying little
        experiences with code. The web should be fun ✨ <br />
        <br />
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
