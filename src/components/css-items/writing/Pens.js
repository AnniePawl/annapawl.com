import React from "react";
import "./pens.scss";

function Pens(props) {
  const { cn } = props;
  return (
    <div className={`cup-container ${cn}`}>
      <div className="cup-contents">
        <div className="ruler cup-contents-1"></div>
        <div className="pen cup-contents-2"></div>
        <div className="pencil pencil-1 cup-contents-3"></div>
        <div className="pencil pencil-2 cup-contents-4"></div>
      </div>
      <div className="cup"></div>
    </div>
  );
}

export default Pens;
