import React from "react";
import Tape from "./Tape";
import PinCushion from "./PinCushion";
import "./sewing.scss";
import SewingMachine from "./SewingMachine";

function Sewing(props) {
  const { cn } = props;

  return (
    <div className={`sewing ${cn}`}>
      <SewingMachine />
      <Tape />
      <PinCushion />
    </div>
  );
}

export default Sewing;
