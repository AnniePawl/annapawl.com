import React from "react";
import Shelf from "./Shelf";
import Books from "../books/Books";
import Radio from "../radio/radio";
import Sewing from "../sewing/Sewing";

function Shelves() {
  return (
    <div className="shelves-container">
      <div className="shelves">
        <div className="shelf-1">
          <Books />
          <Shelf />
        </div>

        <div className="shelf-2">
          <Radio />

          <Shelf />
        </div>

        <div className="shelf-3">
          <Sewing />
          <Shelf />
        </div>
      </div>
    </div>
  );
}

export default Shelves;
