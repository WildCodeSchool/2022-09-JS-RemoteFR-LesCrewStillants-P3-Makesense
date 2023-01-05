import { useState } from "react";
import Footer from "./Footer";
import "./FormD.css";
import Editor from "./RTE";
import Timeline from "./Timeline";
// import { DataContextProvider } from "../Context/DataContext";

function Form() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const titles = [
    "#1 Les détails de la décision",
    "#2 Impact sur l'organisation",
    "#3 Bénéfices",
    "#4 Risques",
    "#5 Première Décision",
  ];
  console.warn(date);

  return (
    <>
      <div className="Timeline">
        <Timeline />
      </div>
      <form onSubmit={handleSubmit}>
        <label className="Label">
          <p className="labelF"> Insérez un titre pour votre décision </p>
          <input
            className="TitleD"
            type="text"
            placeholder="Titre décision "
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        {titles.map((titleH2, id) => (
          <Editor key={titleH2} setDate={setDate} id={id} title={titleH2} />
        ))}
        <br />
        <input className="Submit" type="submit" value="Soumettre" />
      </form>
      <Footer />
    </>
  );
}

export default Form;
