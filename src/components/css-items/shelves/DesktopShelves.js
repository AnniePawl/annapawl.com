import React from "react";
import Shelf from "./Shelf";
import Radio from "../radio/Radio";
import Books from "../books/Books";
import Sewing from "../sewing/Sewing";
import Pens from "../writing/Pens";
import Books2 from "../books/Books2";
import "./shelves.scss";

function DesktopShelves() {
  return (
    <div className="desktop-shelves">
      <Shelf cssItem1={<Books2 cn={"desktop-books2-container"} />} />
      <Shelf
        cssItem1={<Radio cn={"desktop-radio-container"} />}
        cssItem2={<Books cn={"desktop-books-container"} />}
        cssItem3={<Pens cn={"desktop-pens-container"} />}
      />
      <Shelf cssItem1={<Sewing cn={"desktop-sewing-container"} />} />
    </div>
  );
}

export default DesktopShelves;
