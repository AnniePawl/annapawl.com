import React from "react";
import "./about.scss";

function About() {
  return (
    <div className="desktop-about">
      <h1>
        Anna <br /> Pawl
      </h1>
      <p>
        I'm a software engineer with a focus on front-end development and an
        interest in design. I like making satisfying little experiences with
        code. The web should be fun ✨ <br />
        <br /> Hover over the stuff on the bookshelf for some mini surprises.
        It's all made with pure CSS. Check out my website,{" "}
        <a href="https://anniepawl.github.io/dwc/" target="blank">
          Drawing with Code
        </a>
        , if you're interested in learning more about the process.
      </p>

      <ul>
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
        {/* <li>
          <a href="https://medium.com/@annapawl" target="blank">
            Medium
          </a>
        </li> */}
      </ul>
    </div>
  );
}

export default About;
