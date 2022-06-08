import React from "react";
import "./code-snippets.scss";

function SnippetCard(props) {
  const { snippetName } = props;
  return <div className="snippet-card">{snippetName}</div>;
}

export default SnippetCard;
