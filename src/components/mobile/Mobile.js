import React from "react";
import MobileAbout from "./MobileAbout";
import MobileBox from "./MobileBox";
// CSS art components
import Radio from "../radio/radio";
import Books from "../books/Books";
import Sewing from "../sewing/Sewing";
import Writing from "../writing/writing";

function Mobile() {
  return (
    <div className="mobile">
      <MobileAbout />
      <MobileBox
        id={1}
        cn={"mobile-radio"}
        box_item={<Radio />}
        text={
          "I love the radio blah blah blah blah I love the radio blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"
        }
      />
      <MobileBox
        id={2}
        cn={"mobile-books"}
        box_item={<Books />}
        text={
          "I love the radio blah blah blah blah I love the radio blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"
        }
      />
      <MobileBox
        id={3}
        cn={"mobile-sewing"}
        box_item={<Sewing />}
        text={
          "I love the radio blah blah blah blah I love the radio blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"
        }
      />
      <MobileBox
        id={4}
        cn={"mobile-writingg"}
        box_item={<Writing />}
        text={
          "I love the radio blah blah blah blah I love the radio blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"
        }
      />
    </div>
  );
}

export default Mobile;
