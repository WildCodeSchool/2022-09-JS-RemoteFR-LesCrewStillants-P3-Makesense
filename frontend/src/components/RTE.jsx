import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./RTE.css";

function Editor() {
  /* récuperer la valeur de Editor.data 
  si la valeur de data est inférieur a 200c > renvoi un modal d'erreur
  si supérieur est stocker dans la BDD
  */
  return (
    <div>
      <h2> Votre Annonce:</h2>
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
