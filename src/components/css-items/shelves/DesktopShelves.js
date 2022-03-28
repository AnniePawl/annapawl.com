import React from "react";
import Shelf from "./Shelf";
import Radio from "../radio/Radio";
import Books from "../books/Books";
import Sewing from "../sewing/Sewing";
import Pens from "../writing/Pens";
import Books2 from "../books/Books2";
import Laptop from "../laptop/Laptop";
import "./shelves.scss";

function DesktopShelves() {
  return (
    <div className="desktop-shelves">
      {/* Shelf 1 */}
      <Shelf cssItems={<Books2 cn={"desktop-books2-container"} />} />
      {/* Shelf 2*/}
      <Shelf
        cssItems={<Laptop cn={"desktop-laptop-container"} />}
        // cssItem={<Laptop cn={"desktop-laptop-container"} />}
        // cssIte3={<Pens cn={"desktop-pens-container"} />}
      />
      {/* Shelf 3 */}
      <Shelf
        cssItems={<Sewing cn={"desktop-sewing-container"} />}
        // cssItem={<Books cn={"desktop-books-container"} />}
      />
    </div>
  );
}

export default DesktopShelves;
