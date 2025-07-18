import React from "react";
import "./about.scss";
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";

function DesktopNav() {
  return (
    <div >


    {/* <div className='ml-48 rotate-12 hover:animate-spin transition-all  h-16 w-16 bg-cover bg-center font-bold uppercase text-[9px] text-center leading-3 flex items-center justify-center tracking-wider'  style={{ backgroundImage:`url(${blob})` }}>About<br/> Me</div> */}

      <div className='hover:scale-[.95] transition-all ml-48 shadow-md h-16 w-16 bg-blue-200 rounded-full flex items-center justify-center'>
        <span className='rotate-6 text-center !text-zinc-800 font-bold uppercase  leading-3 text-[10px]'>About<br/> Me</span>
      </div>
      
      
      
      
      {/* <p className='text-sm text-zinc-800 '><span className='!text-zinc-800 text-sm font-[600] font-montserrat'>General Nerdery: </span> <Link className='underline' to="/dwc">CSS Art, </Link> Roller Skating, <Link className='underline' to="/embroidery">Embroidery</Link>,  DIY Projects, </p>
       */}
    
     
      {/* <b>General nerdery:</b> roller skating, {""}
        <HashLink smooth to="#code-snippets">
          <span>css art</span>
        </HashLink>{" "}
        , cooking
        <HashLink smooth to="#embroidery">
          , <span>embroidering,</span>
        </HashLink>{" "}
        playing cello, {""}
        <HashLink smooth to="#writing">
          <span>writing</span>
        </HashLink>
        , podcasts, going down rabbit holes 🐰
        
       <Link to="/codesnippets">
        <p className='tracking-wide'>Mini Coding Projects</p>
      </Link> */}
    </div>
  );
}

export default DesktopNav;
