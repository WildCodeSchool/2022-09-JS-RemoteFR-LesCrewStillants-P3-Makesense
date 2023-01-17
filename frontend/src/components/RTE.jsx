import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";

// eslint-disable-next-line react/prop-types
function Editor({ id, title, data }) {
  const { handleDataChange } = useContext(DataContext);

  return (
    <div>
      {/* faire un component input date */}
      <h2>{title}</h2>
      <CKEditor
        editor={ClassicEditor}
        data={data}
        onChange={(event, editor) => {
          const data = editor.getData();
          const edit = {
            id,
            data,
          };
          handleDataChange(edit);
        }}
      />
    </div>
  );
}

export default Editor;
