import React from "react";
import MobileShelf from "./MobileShelf";
import Shelf from "./Shelf";
import Radio from "../radio/radio";
import Books from "../books/Books";
import Sewing from "../sewing/Sewing";
import Pens from "../writing/Pens";
import Books2 from "../books/Books2";
import Laptop from "../laptop/Laptop";
import "./shelves.scss";
import Dessert from "../dessert/Dessert";
import DigitalClock from "../digitalClock/DigitalClock";

function MobileShelves() {
  return (
    <div className="mobile-shelves">
      {/* MobileShelf 1 */}
      <MobileShelf
        cssItem2={<Pens cn={"mobile-pens-container"} />}
        cssItem1={<Radio cn={"mobile-radio-container"} />}
      />
      {/* MobileShelf 2 */}
      <MobileShelf
        cssItem1={
          <Sewing
            cn={"mobile-sewing-container"}
            tapecn="mobile-tape"
            pincushioncn="mobile-pin-cushion"
          />
        }
      />
      {/* MobileShelf 3 */}
      <MobileShelf
        cssItem2={<Books cn={"mobile-books-container"} />}
        cssItem1={<Laptop cn={"mobile-laptop-container"} />}
      />
      {/* MobileShelf 4 */}
      <MobileShelf
        cssItem1={<Books2 cn={"mobile-books2-container"} />}
        cssItem2={<DigitalClock cn={"mobile-digitalClock-container"} />}
      />
    </div>
  );
}

export default MobileShelves;
