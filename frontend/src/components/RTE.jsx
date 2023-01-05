import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import React, { useContext } from "react";
import { DateContext } from "../Context/DateContext";
import { DataContext } from "../Context/DataContext";

// eslint-disable-next-line react/prop-types
function Editor({ id, title }) {
  // permet de récupérer la date courante et de ne pas sélectionner une date antérieur
  const currentDate = new Date().toISOString().split("T")[0];
  const { nativeDate, handleDateChange } = useContext(DateContext);
  const { handleDataChange } = useContext(DataContext);

  return (
    <div>
      <h2>{title}</h2>
      <input
        className="date"
        type="date"
        name={title}
        id={`form-${id}`}
        min={currentDate}
        value={nativeDate.title}
        onChange={handleDateChange}
      />
      <CKEditor
        editor={ClassicEditor}
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
