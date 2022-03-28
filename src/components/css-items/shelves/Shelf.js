import React from "react";
import "./shelves.scss";

// CSS items on shelf
export default function Shelf(props) {
  const { cn, cssItem1, cssItem2, cssItem3 } = props;

  return (
    <div>
      <div className="shelf-contents ">
        {cssItem1}
        {cssItem2}
        {cssItem3}
      </div>
      <div className={`shelf ${cn}`}></div>
    </div>
  );
}
