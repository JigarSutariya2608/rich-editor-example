import React, { ClipboardEvent } from "react";
import RswEditor, { ContentEditableEvent } from "react-simple-wysiwyg";

const MyEditor: React.FC = () => {
  const [html, setHtml] = React.useState("");

  function onChange(e: ContentEditableEvent) {
    setHtml(e.target.value);
  }

  const handlePaste = (event: ClipboardEvent<HTMLDivElement>): void => {
    event.preventDefault();

    const plainText = event.clipboardData.getData("text/plain");

    setHtml((prevHtml) => prevHtml + plainText);
  };

  return (
    <>
      <RswEditor
        placeholder="Paste plain text here"
        value={html}
        onChange={onChange}
        title="editor"
        onPaste={handlePaste}
      />
      <div style={{ marginTop: "20px", whiteSpace: "pre-wrap" }}>
        <strong>Raw Output:</strong>
        <pre>{html}</pre>
      </div>
    </>
  );
};

export default MyEditor;
