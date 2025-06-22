import React from "react";
import reactDom from "react-dom";
import { Link } from 'react-router-dom';
import { ReactComponent as Codepen } from "../../assets/codepen.svg";
import "./modal.scss";

export default function Modal({ isOpen, onClose, cn }) {
  if (!isOpen) return null;
  return reactDom.createPortal(
    <div className={`modal-overlay ${cn}`} onClick={onClose}>
      <div className="modal bg-[#ffed8d] p-6 lg:p-10 max-w-sm">
        <button className="modal__button scale-[.9] md:scale-[1] z-[1000]" onClick={onClose}>
          X
        </button>
        <div className="modal__content flex flex-col">
          {/* Desktop Modal */}
          <p className=''>
            I've fallen for CSS and love exploring its potential through
            illustrations and animations. <br></br>
            <span className='pt-4'>
              {" "}
              <b className='text-xs'>Hover over</b>
            </span>{" "}
            the knick knacks for some mini surprises. I made everything with
            pure CSS ♥<br></br> <br></br>
          </p>

          <div className='flex items-center'>
            <Link to="/dwc"> <p className='hover:scale-[.98] transition-all btn md:tracking-wide font-medium uppercase w-fit py-[1.5px] px-3 shadow-sm rounded-full bg-[#b0d3ff] font-[700] mr-3  text-xs md:text-base'>More on css art</p></Link>
            <a href='https://codepen.io/annampawl' target='blank' className='flex hover:scale-[.98] transition-all py-[1px] btn md:tracking-wide font-medium uppercase w-fit px-3 shadow-sm rounded-full bg-[#b0d3ff] font-[700] text-xs md:text-base flex items-center'>source code <Codepen className='h-4 w-4 ml-2' /></a>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
