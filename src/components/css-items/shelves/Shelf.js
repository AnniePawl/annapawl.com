import React from "react";
import "./shelves.scss";

export default function Shelf(props) {
  const { cn, cssItem1, cssItem2 } = props;
  return (
    <div>
      <div className="shelf-contents ">
        <div> {cssItem1}</div>
        <div> {cssItem2}</div>
      </div>
      <div className={`shelf ${cn}`}></div>
    </div>
  );
}
