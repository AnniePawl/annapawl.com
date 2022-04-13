import React from "react";
import "./books.scss";

function Books(props) {
  const { cn } = props;
  return (
    <div className={`books-container ${cn}`}>
      <div className="book book--1"></div>
      <div className="book book--2"></div>
      <div className="book book--3"></div>
      <div className="book book--4"></div>
      <div className="book book--5"></div>
    </div>
  );
}

export default Books;
