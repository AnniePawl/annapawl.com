import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from 'react-router-dom';
import Contact from "./Contact";
import DesktopNav from "./DesktopNav";
import { ReactComponent as StarIcon } from "../../assets/star-icon.svg";
import "./about.scss";

function DesktopAbout() {
  return (
    <div className="desktop__about flex flex-col ">
      <div className="desktop__about__icon">
        <HashLink smooth to="#home">
          <StarIcon />
        </HashLink>
      </div>
      <h1 class='pb-1 pt-14 text-3xl '>Anna Pawl</h1>
      <h2 class=' pb-1 text-lg '>UX Engineer</h2>
      <p class='text-blue-500 font-[500] mb-8'>Seattle, WA | New York, NY</p>
      <p class='tracking-wide'>
        Hi! Welcome to my little corner of the internet. I’m a software engineer that appreciates delightful UX and a designer who sees creativity in code. I specialize in ensuring that aesthetic concepts translate seamlessly into functional interfaces. My goal is to connect development and design to make intuitive little enchanting digital experiences.  ✨
        <br />
        <br />
        {/* <b>General nerdery:</b> Roller skating, dessert making, cello playing, language learning, {""}
        <Link to="/dwc">
          <span class='text-blue-500 underline'>code drawing</span>
        </Link>{" "}
    
        <Link to="/embroidery">
        , <span class='text-blue-500 underline'>fiber crafting,</span>
        </Link>{" "}
      
        <a target='blank' href='https://medium.com/@annapawl'>
          <span class='text-blue-500 underline'> writing</span>
        </a>
        , fantasy reading, rabbit hole exploring 🐰 */}
      </p>
      {/* <DesktopNav /> */}
      <Contact />
    </div>
  );
}

export default DesktopAbout;
