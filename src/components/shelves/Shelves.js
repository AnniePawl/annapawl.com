import React from "react";
import Shelf from "./Shelf";
import Books from "../books/Books";
import Radio from "../radio/radio";
import Tape from "../sewing/Tape";
import "./shelves.scss";

function Shelves() {
  return (
    <div className="shelves">
      <div className="shelf-1">
        <Books />
        <Shelf />
      </div>

      <div className="shelf-2">
        <Radio />
        <Tape />
        <Shelf />
      </div>

      <div className="shelf-3">
        <Shelf />
      </div>
    </div>
  );
}

export default Shelves;
