import React from "react";
import Tape from "./Tape";
import PinCushion from "./PinCushion";
import "./sewing.scss";

function Sewing() {
  return (
    <div className="sewing">
      <Tape />
      <PinCushion />
    </div>
  );
}

export default Sewing;
