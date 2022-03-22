import React from "react";
import Tape from "./Tape";
import PinCushion from "./PinCushion";
import "./sewing.scss";
import SewingMachine from "./SewingMachine";

function Sewing(props) {
  const { cn, tapecn, pincushioncn } = props;

  return (
    <div className={`sewing ${cn}`}>
      <Tape cn={tapecn} />
      <PinCushion cn={pincushioncn} />
      <SewingMachine />
    </div>
  );
}

export default Sewing;
