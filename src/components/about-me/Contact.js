import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Codepen } from "../../assets/codepen.svg";
import { ReactComponent as GitHub } from "../../assets/github.svg";
// import { ReactComponent as Medium } from "../../assets/medium.svg";
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
    <div className="contact pt-10">
      <div class='flex items-center' >
        <a
          className="mr-4 contact__github-icon"
          href="https://github.com/AnniePawl"
          target="_blank"
        >
          <GitHub />
        </a>
    
        <a
          className="mr-4 contact__codepen-icon"
          href="https://codepen.io/annampawl"
          target="blank"
        >
          <Codepen />
        </a>
      
      </div>
      <div className="mr-4 contact__envelope" onClick={handleContactClick}></div>
      <p className={clicked ? "clicked" : "notClicked"}>Email copied!</p>
    </div>
  );
}

export default Contact;
