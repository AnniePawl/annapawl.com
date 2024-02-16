import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "./practice.scss";
import { Controlled as ControlledEditor } from "react-codemirror2";
// import {Controlled as CodeMirror} from 'react-codemirror2'

function Editor(props) {
  const { displayName, language, value, onChange } = props;

  function handleChange(editor, data, value) {
    onChange(value);
  }
  return (
    <div className={props.cname}>
      <div className="editor__title">{displayName}</div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lineNumbers: true,
          // lint: true,
          mode: language,
          theme: "material",
        }}
      />
    </div>
  );
}

export default Editor;
