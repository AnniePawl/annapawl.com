import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import "./practice.scss";

export default function Practice() {
  const [html, setHtml] = useState("<div class='rainbow'></div>");
  const [css, setCss] = useState(
    `body {
	display:flex;
	overflow:hidden;
	background-color: #d6f1ff;
	justify-content: center;
	transform:translateY(90vh)
}
		 
.rainbow {
	width: 20vh;
	height: 20vh;
	border-radius: 50%;
	background-color: #d6f1ff;
	box-shadow: 0 0 0 1.5em #e7c9ff, 0 0 0 3.5em #9ea5ff, 0 0 0 5.5em #7dc7ff, 0 0 0 7.5em #c9ffb8, 0 0 0 9.5em #fffca3, 0 0 0 11.5em #ffc791, 0 0 0 13.5em #ff9191
}
		`
  );
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
        </html>
      `);
    }, 40);

    return () => clearTimeout(timeout);
  }, [html, css]);

  return (
    <div className="practice-container ml-5" id="practice">
      {/* <Heading /> */}
      <div className="workspace">
        <div className="pane top-pane">
          <Editor
            cname="editor__container editor__container--html"
            displayName="HTML"
            language="xml"
            value={html}
            onChange={setHtml}
          />
          <Editor
            cname="editor__container editor__container--css"
            displayName="CSS"
            language="css"
            value={css}
            onChange={setCss}
          />
        </div>
        <div className="pane bottom-pane">
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameborder="0"
            height="100%"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}
