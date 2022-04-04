import React, { useState, useEffect } from "react";
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
    <div className="contact">
      <div className="envelope" onClick={handleContactClick}></div>
      <p className={clicked ? "clicked" : "notClicked"}>Email copied!</p>
    </div>
  );
}

export default Contact;
