import React from "react";
import "./writing.scss";

function Writing() {
  return (
    <div className="writing-container" id="writing">
      <div className="paper">
        <h1>Things I've Written</h1>
        <ul>
          <li>
            <a
              href="https://medium.com/user-experience-design-1/drawing-with-code-716cb0b21b06"
              target="blank"
            >
              Drawing with Code: An intro to CSS Art
            </a>
          </li>

          <li>
            <a
              href="	https://medium.com/hackernoon/redis-gamification-60e49b5494ae
							"
              target="blank"
            >
              Leading The Way With Redis
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/user-experience-design-1/bringbarterback-72b530ba1c59
							"
              target="blank"
            >
              Bringing Back the Barter Economy
            </a>
          </li>
        </ul>
      </div>
      <div className="writing-container__pencil">
        <div className="pencil-tip"></div>
      </div>
    </div>
  );
}

export default Writing;
