import React from "react";
import MobileAbout from "../about-me/MobileAbout";
import MobileBox from "./MobileBox";
// CSS art components
import Radio from "../css-items/radio/Radio";
import Books from "../css-items/books/Books";
import Sewing from "../css-items/sewing/Sewing";
import Writing from "../css-items/writing/Writing";

function Mobile() {
  return (
    <div className="mobile">
      <MobileAbout />
      <MobileBox
        id={1}
        cn={"mobile-radio"}
        box_item={<Radio />}
        text={
          "I'm a big fan of public radio. I tune into WNYC most mornings to gague what's going on in the world. I'm especially interested in NYC politics. "
        }
      />
      <MobileBox
        id={2}
        cn={"mobile-books"}
        box_item={<Books />}
        text={
          "I have a growing book collection and am always looking reccomendations. Some of my favorite authors include Kurt Vonnegut and Oliver Sacks. The last book I read was, 'What a Plant Knows,' by blank blank"
        }
      />
      <MobileBox
        id={3}
        cn={"mobile-sewing"}
        box_item={<Sewing />}
        text={
          "I really enjoy machine sewing and hand embroidery. Check out my embroidery patterns on Etsy! "
        }
      />
      <MobileBox
        id={4}
        cn={"mobile-writing"}
        box_item={<Writing />}
        text={[
          "I like writing about the things I'm learning. I've published a few articles in Hacker Noon and UX Collective. ",
          <a href="https://medium.com/@annapawl" target="blank">
            Check them out!
          </a>,
        ]}
      />
    </div>
  );
}

export default Mobile;
