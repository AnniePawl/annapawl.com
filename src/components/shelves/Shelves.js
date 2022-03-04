import React from "react";
import Shelf1 from "./Shelf1";
import Shelf2 from "./Shelf2";
import Shelf3 from "./Shelf2";
import Books from "../books/Books";
import "./shelves.scss";

function Shelves() {
  return (
    <div className="shelves">
      <div className="shelf-1">
        <Books />
        <Shelf1 />
      </div>

      <Shelf2 />
      <Shelf3 />
    </div>
  );
}

export default Shelves;
