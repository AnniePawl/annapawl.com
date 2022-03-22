import React from "react";
import Pin from "./pin";
import "./pin-cushion.scss";

function PinCushion(props) {
  const { cn } = props;
  return (
    <div className={`pin-cushion-container ${cn}`}>
      <div className="pins">
        <Pin />
        <Pin />
        <Pin />
        <Pin />
        <Pin />
        <Pin />
      </div>
      <div className="pin-cushion"></div>
    </div>
  );
}

export default PinCushion;
