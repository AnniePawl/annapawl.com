import React from "react";
import Shelf1 from "./Shelf1";
import Shelf2 from "./Shelf2";
import Shelf3 from "./Shelf2";
import Books from "../books/Books";
import Radio from "../radio/radio";
import Tape from "../sewing/Tape";
import "./shelves.scss";

function Shelves() {
  return (
    <div className="shelves">
      <div className="shelf-1">
        <Books />
        <Shelf1 />
      </div>

      <div className="shelf-2">
        <Radio />
        <Shelf2 />
      </div>

      <div className="shelf-3">
        <Tape />
        <Shelf3 />
      </div>
    </div>
  );
}

export default Shelves;
