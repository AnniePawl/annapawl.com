import React from "react";
import "./shelves.scss";

function MobileShelf(props) {
  const { cssItem1, cssItem2 } = props;
  return (
    <div className={`mobile-shelf-container`}>
      <div className="mobile-shelf-contents">
        {cssItem1}
        {cssItem2}
      </div>
      <div className="shelf mobile-shelf"></div>
    </div>
  );
}

export default MobileShelf;
