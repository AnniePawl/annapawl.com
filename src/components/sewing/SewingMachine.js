import React from "react";
import "./sewing-machine.scss";

function SewingMachine() {
  return (
    <div className="sewing-machine">
      <div className="thread"></div>
      <div className="needle"></div>
      <div className="sewing-machine-top"></div>
      <div className="sewing-machine-right"></div>
      <div className="sewing-machine-bottom"></div>
    </div>
  );
}

export default SewingMachine;
