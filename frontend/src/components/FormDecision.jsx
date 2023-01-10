import { useState } from "react";
import Footer from "./Footer";
import "./FormDecision.css";
import Editor from "./RTE";
import Timeline from "./Timeline";
import DateStep from "./DateDecision";
// import { DataContextProvider } from "../Context/DataContext";

/* Créer usestate pour afficher/masquer onglet rte */

function Form() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState();
  // const [titleDeadline, setTitleDeadLine] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [stateOnglets, setStateOnglets] = useState(1);

  const goDecision = () => {
    setStateOnglets(1);
  };
  const goDate = () => {
    setStateOnglets(2);
  };

  const titles = [
    "#1 Les détails de la décision",
    "#2 Impact sur l'organisation",
    "#3 Bénéfices",
    "#4 Risques",
    "#5 Première Décision",
  ];
  const stepDeadlines = [
    "#1 Prise de décision commencée",
    "#2 Deadline pour donner son avis",
    "#3 Première décision prise",
    "#4 Deadline pour entrer en conflit",
    "#5 Décision définitive",
  ];
  console.warn(date);

  return (
    <>
      <div className="Timeline">
        <Timeline />
      </div>
      <div>
        <div className="contBtn">
          <button
            type="button"
            onClick={goDecision}
            className={`onglets ${stateOnglets === 1 ? "active" : ""}`}
          >
            Décision
          </button>
          <button
            type="button"
            onClick={goDate}
            className={`onglets ${stateOnglets === 2 ? "active" : ""}`}
          >
            Date
          </button>
        </div>
        <div className="container">
          {stateOnglets === 1 ? (
            <p className="contenu Decision">
              <form onSubmit={handleSubmit}>
                <label className="Label">
                  <p className="labelF">
                    {" "}
                    Insérez un titre pour votre décision{" "}
                  </p>
                  <input
                    className="TitleD"
                    type="text"
                    placeholder="Titre décision "
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </label>
                {titles.map((titleH2, id) => (
                  <Editor key={titleH2} id={id} title={titleH2} />
                ))}
                <br />
                <input className="Submit" type="submit" value="Soumettre" />
              </form>
            </p>
          ) : (
            <p className="contenu Date">
              {stepDeadlines.map((stepDeadlineH2, id) => (
                <DateStep
                  key={stepDeadlineH2}
                  setDate={setDate}
                  id={id}
                  title={stepDeadlineH2}
                />
              ))}
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Form;
