import React from "react";
// import Tape from "./Tape";
import PinCushion from "./PinCushion";
import "./sewing.scss";
import SewingMachine from "./SewingMachine";

function Sewing() {
  return (
    <div className="sewing">
      <SewingMachine />
      {/* <Tape /> */}
      <PinCushion />
    </div>
  );
}

export default Sewing;
