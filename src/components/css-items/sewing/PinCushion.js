import React from "react";
import Pin from "./pin";
import "./pin-cushion.scss";

function PinCushion() {
  return (
    <div className="pin-cushion-container">
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
