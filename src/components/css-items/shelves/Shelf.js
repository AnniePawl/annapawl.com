import React from "react";
import "./shelves.scss";

// CSS items on shelf
export default function Shelf(props) {
  const { cn, cssItems } = props;

  return (
    <div>
      <div className="shelf-contents ">{cssItems}</div>
      <div className={`shelf ${cn}`}></div>
    </div>
  );
}
