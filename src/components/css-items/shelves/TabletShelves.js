import React from "react";
import Shelf from "./Shelf";
import Radio from "../radio/Radio";
import Books from "../books/Books";
import "./shelves.scss";
import Sewing from "../sewing/Sewing";

function TabletShelves() {
  return (
    <div className="tablet-shelves">
      <Shelf
        cn={"tablet-shelf"}
        cssItem1={<Books cn={"tablet-books-container"} />}
      />
      <Shelf
        cn={"tablet-shelf"}
        cssItem1={<Radio cn={"tablet-radio-container"} />}
        cssItem2={<Sewing />}
      />
    </div>
  );
}

export default TabletShelves;
