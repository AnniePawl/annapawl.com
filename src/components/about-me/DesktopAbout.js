import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from 'react-router-dom';
import Contact from "./Contact";
import DesktopNav from "./DesktopNav";
import { ReactComponent as StarIcon } from "../../assets/star-icon.svg";
import "./about.scss";

function DesktopAbout() {
  return (
    <div id='desktopAbout' className="desktop__about h-[100vh] flex items-center justify-center ">
      <div class='flex flex-col h-fit'>
        <h1 className='title pt-4 text-3xl tracking-wide'>Anna Pawl</h1>
        <h2 className='text-lg font-[500] pt-1 '>UX Engineer</h2>
        <p className='text-blue-500 font-[500] mb-6 '>Seattle, WA | New York, NY</p>
        <p className='tracking-wide leading-5 xl:leading-6'>
          Hi! Welcome to my little corner of the internet. I’m a software engineer that appreciates delightful UX and a designer who sees creativity in code. I specialize in ensuring that aesthetic concepts translate seamlessly into functional interfaces. I bridge development and design to craft intuitive, engaging digital experiences. ✨
          <br />
          <br />

          <b>General nerdery: </b>
          <Link to="/dwc">
            <span className='text-blue-500 underline'>CSS art</span>
          </Link>{" "}, cello noodling, {""}
          <Link to="/foodblog">
            <span className='text-blue-500 underline'> forkplay</span>,
          </Link>{" "} roller skating,
          hoarding postage stamps,
          <Link to="/embroidery">
            <span className='text-blue-500 underline'> embroidery</span>
          </Link>{" "}
, book club, thrifting for weird old treasures, spiraling down internet rabbit holes 🐰
        </p>
        {/* <DesktopNav /> */}
        <Contact />
      </div>
    </div>
  );
}

export default DesktopAbout;
