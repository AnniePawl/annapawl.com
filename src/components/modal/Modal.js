import React from "react";
import reactDom from "react-dom";
import { Link } from 'react-router-dom';
import { ReactComponent as Codepen } from "../../assets/codepen.svg";
import "./modal.scss";

export default function Modal({ isOpen, onClose, cn }) {
  if (!isOpen) return null;
  return reactDom.createPortal(
    <div className={`modal-overlay ${cn}`} onClick={onClose}>
      <div className="modal bg-[#fff9a0] px-8 py-12 max-w-sm">
        <button className="modal__button" onClick={onClose}>
          X
        </button>
        <div className="modal__content flex flex-col">
          {/* Desktop Modal */}
          <p className={cn === "desktop__modal" ? "show" : "hide"}>
            I've fallen for CSS and love exploring its potential through
            illustrations and animations. <br></br>
            <span class='pt-4'> 
              {" "}
              <b class='text-xs'>Hover over</b>
            </span>{" "}
            the knick knacks for some mini surprises. I made everything with
            pure CSS ♥<br></br> <br></br>
          </p>
          <div class='flex items-center'>
            <Link to="/dwc"> <p className='hover:scale-[.98] transition-all btn tracking-wide font-medium uppercase w-fit py-[1.5px] px-3 shadow-md rounded-full bg-[#b0d3ff] font-[700] mr-3 '>Read my css art post</p></Link>
            <a  href='https://codepen.io/annampawl' target='blank' className='flex hover:scale-[.98] transition-all py-[4px] btn tracking-wide font-medium uppercase w-fit px-3 shadow-sm rounded-full bg-[#b0d3ff] font-[700]'>source code <Codepen class='h-4 w-4 ml-2'/></a>
          </div>
         


          {/* Tablet Modal */}
          <p className={cn === "tablet__modal" ? "show" : "hide"}>
            I've fallen for CSS and love exploring its potential through
            illustrations and animations like these ♥ <br></br>
            <br></br>
            Check out my ongoing project,{" "}
            <a href="https://anniepawl.github.io/dwc/" target="blank">
              <b>Drawing with Code</b>
            </a>
            , and my{" "}
            <a href="https://codepen.io/annampawl" target="blank">
              <b>CodePen</b>
            </a>{" "}
            for more info.
          </p>

          {/* Mobile Modal */}
          <p className={cn === "mobile__modal" ? "show" : "hide"}>
            I've fallen for CSS and love exploring its potential through mini
            illustrations and animations like these ♥
          </p>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
