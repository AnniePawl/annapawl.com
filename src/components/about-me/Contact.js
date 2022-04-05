import React, { useState, useEffect } from "react";
import { ReactComponent as Codepen } from "../../assets/codepen.svg";
import { ReactComponent as GitHub } from "../../assets/github.svg";
import { ReactComponent as Medium } from "../../assets/medium.svg";
import "./contact.scss";

function Contact() {
  const [clicked, setClicked] = useState(false);

  const handleContactClick = () => {
    navigator.clipboard.writeText("annampawl@gmail.com");
    setClicked(true);
    console.log(clicked);
  };

  useEffect(() => {
    let timer1 = setTimeout(() => setClicked(false), 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, [clicked]);

  return (
    <div>
      <div className="contact">
        <div className="desktop-icons">
          <a
            className="github-icon"
            href="https://github.com/AnniePawl"
            target="blank"
          >
            <GitHub />
          </a>
          <a
            className="codepen-icon"
            href="https://codepen.io/annampawl"
            target="blank"
          >
            <Codepen />
          </a>
          {/* <a
            className="medium-icon"
            href="https://medium.com/@annapawl"
            target="blank"
          >
            <Medium />
          </a> */}
        </div>
        <div className="envelope" onClick={handleContactClick}></div>
        <p className={clicked ? "clicked" : "notClicked"}>Email copied!</p>
      </div>
    </div>
  );
}

export default Contact;
