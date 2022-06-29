import React from "react";
import Shelf from "./Shelf";
import NewtonsCradle from "../newtonsCradle/NewtonsCradle";
import Books2 from "../books/Books2";
import Radio from "../radio/Radio";
import Books from "../books/Books";
import Pens from "../writing/Pens";
import "./shelves.scss";
import Sewing from "../sewing/Sewing";
import Laptop from "../laptop/Laptop";
import Dessert from "../dessert/Dessert";
import DigitalClock from "../digitalClock/DigitalClock";

function TabletShelves() {
  return (
    <div className="tablet-shelves">
      {/* Shelf 1 */}
      <Shelf
        cssItem1={<NewtonsCradle cn={"tablet-newtonsCradle-container"} />}
        cssItem2={<Pens cn={"tablet-pens-container"} />}
        cssItem3={<Books2 cn={"tablet-books2-container"} />}
      />

      {/* Shelf 2 */}
      <Shelf
        cssItem1={<Radio cn={"tablet-radio-container"} />}
        cssItem2={<Dessert cn={"tablet-dessert-container"} />}
        cssItem3={<Laptop cn={"tablet-laptop-container"} />}
      />
      {/* Shelf 3 */}
      <Shelf
        cssItem1={
          <Sewing
            cn="tablet-sewing-container"
            tapecn="tablet-tape"
            pincushioncn="mobile-pin-cushion"
          />
        }
        cssItem2={<Books cn={"tablet-books-container"} />}
        cssItem3={<DigitalClock cn={"tablet-digitalClock-container"} />}
      />
    </div>
  );
}

export default TabletShelves;
