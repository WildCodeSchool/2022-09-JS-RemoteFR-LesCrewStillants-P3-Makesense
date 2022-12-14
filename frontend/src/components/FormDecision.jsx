import { useState } from "react";
import "./FormD.css";
import Editor from "./RTE";

function Form() {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const titles = [
    "Les détails",
    "Impact",
    "Bénéfices",
    "Risques",
    "1ere Décisions",
  ];

  return (
    <form onSubmit={handleSubmit}>
      <label className="Label">
        <p className="labelF">Insérez un titre pour votre décision :</p>
        <input
          className="TitleD"
          type="text"
          placeholder="Titre décision "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      {titles.map((titleH2) => (
        <Editor title={titleH2} />
      ))}
      <br />
      <input className="Submit" type="submit" value="Soumettre" />
    </form>
  );
}

export default Form;
