import React from "react";
import "./about.scss";

function TabletAbout() {
  return (
    <div className="tablet__about">
      <div>
        <h1>Anna Pawl</h1>

        <ul className="links">
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

      <p>
        I'm a software engineer with a focus on front-end development and an
        interest in design. I love using my creativity to make satisfying little
        experiences with code. The web should be fun ✨ Scroll down to get to
        know me through some fun facts. I made each item with pure CSS. Check
        out my website,{" "}
        <a href="https://anniepawl.github.io/dwc/" target="blank">
          Drawing with Code
        </a>
        , if you're interested in learning more about the process.
      </p>
    </div>
  );
}

export default TabletAbout;
