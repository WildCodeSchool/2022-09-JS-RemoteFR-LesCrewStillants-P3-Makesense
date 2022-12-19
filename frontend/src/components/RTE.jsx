import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Editor({ title }) {
  // permet de récupérer la date courante et de ne pas sélectionner une date antérieur
  const currentDate = new Date().toISOString().split("T")[0];
  // permet d'afficher la date sélectionner dans le navigateur
  const [nativeDate, setNativeDate] = useState("");
  const onNativeChange = (e) => {
    setNativeDate(e.target.value);
  };
  return (
    <div>
      <h2>{title}</h2>
      <input
        className="date"
        type="date"
        min={currentDate}
        value={nativeDate}
        onChange={onNativeChange}
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
