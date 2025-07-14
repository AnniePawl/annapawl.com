import React from "react";
import { HashLink } from "react-router-hash-link";
import Contact from "./Contact";
import { Link } from 'react-router-dom';
import "./about.scss";

function MobileAbout() {
  return (
    <div className="mobile__about flex justify-between pt-16 pb-10 px-10">
  
       <h1 className='pb-6 mobile'>
        Anna <br/>Pawl
      </h1>
      <p className='text-[11.2px]'>
        Hi! Welcome to my little corner of the internet. I’m a software engineer that appreciates delightful UX and a designer who sees creativity in code. I specialize in ensuring that aesthetic concepts translate seamlessly into functional interfaces. I bridge development and design to craft intuitive, engaging digital experiences. ✨
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

      <div className="mobile__contact ">
        <Contact />
      </div>
    </div>
  );
}

export default MobileAbout;
