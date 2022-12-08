import { useState } from "react";
import "./FormD.css";
import Editor from "./RTE";

function Form() {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="Label">
        <p className="labelF">Insérez un titre:</p>
        <input
          className="TitleD"
          type="text"
          placeholder="titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <Editor />
      <br />
      <input className="Submit" type="submit" value="Soumettre" />
    </form>
  );
}

export default Form;

// const [contactInfo, setContactInfo] = useState({
//   title: "",
//   editor: "",
// });
// return (
//   <div className="form-container">
//     <form>
//       <div>
//         <h3>Contact Form</h3>
//       </div>
//       <div>
//         <input
//           type="text"
//           name="title"
//           placeholder="Name"
//           value={contactInfo.name}
//         />
//       </div>
//       <div>
//         <Editor
//           type="editor"
//           name="editor"
//           value={contactInfo.editor}
//         />
//       </div>
//       <div>
//         <button>Submit Contact</button>
//       </div>
//     </form>
//   </div>
// );
// }
