import React from "react";
import reactDom from "react-dom";
import "./modal.scss";

export default function Modal({ isOpen, onClose, cn }) {
  if (!isOpen) return null;
  return reactDom.createPortal(
    <div className={`modal__overlay ${cn}`}>
      <div className="modal">
        <button className="modal__button" onClick={onClose}>
          X
        </button>
        <div className="modal__content">
          {/* Desktop Modal */}
          <p className={cn === "desktop-modal" ? "show" : "hide"}>
            I've fallen for CSS and really enjoy exploring its potential through
            mini illustrations and animations. <br></br>
            <br></br>
            <span>
              {" "}
              <b>Hover over</b>
            </span>{" "}
            the bookshelf items for some bite-sized surprises. I made everything
            with ♥ and pure CSS.
            <br></br>
            cv wes>Check out my ongoing project,{" "}
            <a href="https://anniepawl.github.io/dwc/" target="blank">
              Drawing with Code
            </a>
            , if you're interested in learning more about the process.
          </p>

          {/* Tablet Modal */}
          <p className={cn === "tablet-modal" ? "show" : "hide"}>
            I've fallen for CSS and really enjoy exploring its potential through
            mini illustrations and animations. I made this bookshelf with ♥ and
            pure CSS.
            <br></br>
            <br></br>Check out my ongoing project,{" "}
            <a href="https://anniepawl.github.io/dwc/" target="blank">
              Drawing with Code
            </a>
            , if you're interested in learning more about the process.
          </p>

          {/* Mobile Modal */}
          <p className={cn === "mobile-modal" ? "show" : "hide"}>
            I've fallen for CSS and really enjoy exploring its potential through
            mini illustrations and animations. <br></br>
            <br></br>Check out my growing CSS art gallery. I'm ever striving to
            learn new techniques and create positive experiences. I like
            sprinkling user interfaces with a little extra flavor 🌶️
          </p>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
