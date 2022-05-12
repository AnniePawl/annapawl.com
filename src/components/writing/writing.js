import React from "react";
import "./writing.scss";

function Writing() {
  return (
    <div className="writing-container" id="writing">
      <div className="paper">
        <h1>Things I've Written</h1>
        <ul>
          <li>Drawing with Code: An intro to CSS Art</li>
          <li>Bringing Back the Barter Economy</li>
          <li>Leading the way with Redis</li>
        </ul>
      </div>
      <div className="writing-container__pencil">
        <div className="pencil-tip"></div>
      </div>
    </div>
  );
}

export default Writing;
