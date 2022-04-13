import React from "react";
import "./pens.scss";

function Pens(props) {
  const { cn } = props;
  return (
    <div className={`cup-container ${cn}`}>
      <div className="cup-contents">
        <div className="ruler"></div>
        <div className="pen"></div>
        <div className="pencil pencil--1"></div>
        <div className="pencil pencil--2"></div>
      </div>
      <div className="cup"></div>
    </div>
  );
}

export default Pens;
