import React from "react";
import Shelf from "./Shelf";
import Radio from "../radio/Radio";
import Books from "../books/Books";
import Sewing from "../sewing/Sewing";
import Pens from "../writing/Pens";
import Books2 from "../books/Books2";
import "./shelves.scss";

function MobileShelves() {
  return (
    <div className="mobile-shelves">
      <Shelf
        cssItem1={<Radio cn={"mobile-radio-container"} />}
        cssItem2={<Pens cn={"mobile-pens-container"} />}
      />
      <Shelf
        cssItem1={
          <Sewing
            cn={"mobile-sewing-container"}
            tapecn="mobile-tape"
            pincushioncn="mobile-pin-cushion"
          />
        }
      />
      <Shelf cssItem2={<Books cn={"mobile-books-container"} />} />

      <Shelf cssItem1={<Books2 cn={"mobile-books2-container"} />} />
    </div>
  );
}

export default MobileShelves;
