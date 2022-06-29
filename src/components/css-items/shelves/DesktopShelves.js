import React from "react";
import Shelf from "./Shelf";
import Radio from "../radio/Radio";
import Books from "../books/Books";
import Sewing from "../sewing/Sewing";
import Pens from "../writing/Pens";
import Books2 from "../books/Books2";
import Laptop from "../laptop/Laptop";
import Dessert from "../dessert/Dessert";
import NewtonsCradle from "../newtonsCradle/NewtonsCradle";
import DigitalClock from "../digitalClock/DigitalClock";
import "./shelves.scss";

function DesktopShelves() {
  return (
    <div className="desktop-shelves">
      {/* Shelf 1 */}
      <Shelf
        cssItem1={<NewtonsCradle cn={"desktop-newtonsCradle-container"} />}
        cssItem2={<Dessert cn={"desktop-dessert-container"} />}
        cssItem3={<Books2 cn={"desktop-books2-container"} />}
      />
      {/* Shelf 2*/}
      <Shelf
        cssItem1={<Radio cn={"desktop-radio-container"} />}
        cssItem2={<Pens cn={"desktop-pens-container"} />}
        cssItem3={<Laptop cn={"desktop-laptop-container"} />}
      />
      {/* Shelf 3 */}
      <Shelf
        cssItem1={<Sewing cn={"desktop-sewing-container"} />}
        cssItem2={<Books cn={"desktop-books-container"} />}
        cssItem3={<DigitalClock />}
      />
    </div>
  );
}

export default DesktopShelves;
