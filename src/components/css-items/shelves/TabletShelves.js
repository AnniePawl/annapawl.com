import React from "react";
import Shelf from "./Shelf";
import Books2 from "../books/Books2";
import Radio from "../radio/Radio";
import Books from "../books/Books";
import Pens from "../writing/Pens";
import "./shelves.scss";
import Sewing from "../sewing/Sewing";
import Laptop from "../laptop/Laptop";

function TabletShelves() {
  return (
    <div className="tablet-shelves">
      {/* Shelf 1 */}
      <Shelf
        cn={"tablet-shelf"}
        cssItem1={<Books2 cn={"tablet-books2-container"} />}
        cssItem2={<Laptop cn={"tablet-laptop-container"} />}
      />
      {/* Shelf 2 */}
      <Shelf
        cn={"tablet-shelf"}
        // to do -- fix to desktop styles
        cssItem1={<Radio cn={"tablet-radio-container"} />}
        cssItem2={<Books cn={"tablet-books-container"} />}
        cssItem3={<Pens cn={"tablet-pens-container"} />}
      />
      {/* Shelf 2 */}
      <Shelf
        cn={"tablet-shelf"}
        cssItem1={
          <Sewing
            cn={"tablet-sewing-container"}
            tapecn={"tablet-tape"}
            pincushioncn={"tablet-pin-cushion"}
          />
        }
      />
    </div>
  );
}

export default TabletShelves;
