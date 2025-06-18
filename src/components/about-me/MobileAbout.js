import React from "react";
import { HashLink } from "react-router-hash-link";
import Contact from "./Contact";
import { Link } from 'react-router-dom';
import "./about.scss";

function MobileAbout() {
  return (
    <div className="mobile__about">
      <h1>
        Anna
        <br /> Pawl
      </h1>
      <p>
        Hi! Welcome to my little corner of the internet. I'm a front-end
        engineer bridging the gap between development and design. I like making
        satisfying little experiences with code because the web should be fun ✨{" "}
        <br />
        <br />
        <b>General nerdery:</b> Roller skating, {""}
        <Link to="/dwc">
          <span className='text-blue-500 underline'>CSS art</span>
        </Link>{" "}, cello,
        <Link to="/foodblog">
          <span className='text-blue-500 underline'> forkplay</span>,
        </Link>{" "}, hoarding postage stamps,{" "}
        <Link to="/embroidery">
          <span className='text-blue-500 underline'> emboirdery,</span>
        </Link>{" "},  going down rabbit holes 🐰 , 
        <HashLink smooth to="#writing">
          <span class='text-blue-500 underline'> writing</span>. 
        </HashLink>
        
      </p>

      <div className="mobile__contact">
        <Contact />
      </div>
    </div>
  );
}

export default MobileAbout;
