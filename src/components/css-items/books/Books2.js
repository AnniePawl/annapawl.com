import React from "react";
import "./books2.scss";

function Books2(props) {
  const { cn } = props;
  return (
    <div className={`v-books-container ${cn}`}>
      <div className="v-book-end"></div>
      <div className="v-book v-book--1"></div>
      <div className="v-book v-book--2"></div>
      <div className="v-book v-book--3"></div>
      <div className="v-book v-book--4"></div>
      {/* <div className="v-book v-book-5"></div> */}
    </div>
  );
}

export default Books2;
