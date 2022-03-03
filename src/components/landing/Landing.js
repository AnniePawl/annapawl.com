import React from "react";
import About from "../about/About";
import Shelves from "../shelves/Shelves";
import "./landing.scss";

function Landing() {
  return (
    <div className="landing">
      <About />
      <Shelves />
    </div>
  );
}

export default Landing;
