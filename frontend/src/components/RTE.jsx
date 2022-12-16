import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import "./RTE.css";

// eslint-disable-next-line react/prop-types
function Editor({ title, setDate }) {
  const todayDate = new Date();
  return (
    <div>
      <h2>{title}</h2>
      <input
        className="date"
        type="date"
        value={todayDate}
        on
        onChange={setDate}
      />
      <CKEditor
        editor={ClassicEditor}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.warn({ event, editor, data });
        }}
      />
    </div>
  );
}

export default Editor;
