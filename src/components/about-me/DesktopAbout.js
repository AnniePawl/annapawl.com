import React from "react";
import "./about.scss";

function DesktopAbout() {
  // onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}}

  const handleContact = () => {
    navigator.clipboard.writeText("annampawl@gmail.com");
  };

  return (
    <div className="desktop-about">
      <h1>
        Anna <br /> Pawl
      </h1>
      <p>
        I'm a software engineer with a focus on front-end development and an
        interest in design. I like making satisfying little experiences with
        code. The web should be fun ✨ <br />
        <br /> <span className="about-hover">Hover</span> over the things on the
        bookshelf for some mini surprises. Everything is made with pure CSS.
        Check out my project,{" "}
        <a href="https://anniepawl.github.io/dwc/" target="blank">
          Drawing with Code
        </a>
        , if you're interested in learning more about the process.
      </p>

      <ul>
        <li>
          <p onClick={handleContact}></p>
        </li>
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

export default DesktopAbout;
