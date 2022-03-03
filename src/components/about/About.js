import React from "react";
import "./about.scss";

function About() {
  return (
    <div className="about">
      <h1>
        Anna <br /> Pawl
      </h1>
      <p className="about-me">
        I’m Anna, a software engineer with a focus on front-end development and
        a passion for design. I’m driven by curiosity and spend a lot of my free
        time learning new things and experimenting. I especially love creating
        interactive experiences with code. The web should be fun ✨ <br />{" "}
        <br /> Get to know me better by clicking objects on these shelves. I
        created each item with pure CSS ( you can check out the source code on
        my CodePen profile ).
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
        <li>
          <a href="https://medium.com/@annapawl" target="blank">
            Medium
          </a>
        </li>
      </ul>
    </div>
  );
}

export default About;
