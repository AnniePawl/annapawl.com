import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from 'react-router-dom';
import Contact from "./Contact";
import DesktopNav from "./DesktopNav";
import { ReactComponent as StarIcon } from "../../assets/star-icon.svg";
import "./about.scss";

function DesktopAbout() {
  return (
    <div id='desktopAbout' className="desktop__about flex flex-col">
      <div className="desktop__about__icon">
        <HashLink smooth to="#home">
          <StarIcon />
        </HashLink>
      </div>
      <h1 className='pt-8 text-3xl tracking-wide'>Anna Pawl</h1>
      <h2 className='text-lg font-[500] '>UX Engineer</h2>
      <p className='text-blue-500 font-[500] mb-6'>Seattle, WA | New York, NY</p>
      <p className='tracking-wide'>
        Hi! Welcome to my little corner of the internet. I’m a software engineer that appreciates delightful UX and a designer who sees creativity in code. I specialize in ensuring that aesthetic concepts translate seamlessly into functional interfaces. I bridge development and design to craft charming, functional digital experiences. ✨
        <br />
        <br />

        <b>General nerdery: </b>
        <Link to="/dwc">
          <span className='text-blue-500 underline'>CSS art</span>
        </Link>{" "}, cello, {""}
        <Link to="/foodblog">
          <span className='text-blue-500 underline'> forkplay</span>,
        </Link>{" "} roller skating,
        hoarding postage stamps,
        <Link to="/embroidery">
          <span className='text-blue-500 underline'> emboirdery,</span>
        </Link>{" "}

        {/* <a target='blank' href='https://medium.com/@annapawl'>
          <span className='text-blue-500 underline'> writing</span>
        </a> */}
        rabbit holes 🐰
      </p>
      {/* <DesktopNav /> */}
      <Contact />
    </div>
  );
}

export default DesktopAbout;
