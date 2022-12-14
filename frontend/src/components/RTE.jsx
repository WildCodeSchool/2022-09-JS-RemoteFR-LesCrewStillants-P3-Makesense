import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import "./RTE.css";

function Editor(title) {
  return (
    <div>
      <h2>{title}</h2>
      <CKEditor
        editor={ClassicEditor}
        data="Ecrivez votre annonce..."
        onChange={(event, editor) => {
          const data = editor.getData();
          console.warn({ event, editor, data });
        }}
      />
    </div>
  );
}

export default Editor;
