import React from "react";
import "./sewing-machine.scss";

function SewingMachine(props) {
  const { cn } = props;
  return (
    <div className={`sewing-machine ${cn}`}>
      <div className="thread"></div>
      <div className="needle"></div>
      <div className="sewing-machine__top"></div>
      <div className="sewing-machine__right"></div>
      <div className="sewing-machine__bottom"></div>
    </div>
  );
}

export default SewingMachine;
