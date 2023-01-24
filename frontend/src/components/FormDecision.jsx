import { useState, useContext } from "react";
import Footer from "./Footer";
import Editor from "./RTE";
import Timeline from "./Timeline";
import DateStep from "./DateDecision";
import { DataContext } from "../Context/DataContext";
import { DateContext } from "../Context/DateContext";
import "./FormDecision.css";
// importer axios
import instance from "../helpers/axios";

/**
 * import data du context
 * {
"0": {
  "data": "<p>coucou coucou2</p>"
},
"1": {
  "data": "<p>coucoucoucou2</p>"
}
}
* afficher les datas pour récupérer la data selon l'id ci dessus 
*/

/* Créer usestate pour afficher/masquer onglet rte */

function Form() {
  const { data } = useContext(DataContext);
  // const { date } = useContext(DateContext);
  const { nativeDate } = useContext(DateContext);

  const [title, setTitle] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [date, setDate] = useState();

  // const [decision, setDecision] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    instance
      .post("/decision", { title, data })
      .then((res) => console.warn(res.data))
      .catch((err) => console.warn(err));
  };

  console.warn(date);
  // création d'un state pour l'affichage des onglets
  const [stateOnglets, setStateOnglets] = useState(1);
  // Affiche l'onglet décision
  const goDecision = () => {
    setStateOnglets(1);
  };
  // Affiche l'onglet date
  const goDate = () => {
    setStateOnglets(2);
  };

  // faire une instance post

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
            className={`onglets ${stateOnglets === 1 ? "green" : ""}`}
          >
            Décision
          </button>
          <button
            type="button"
            onClick={goDate}
            className={`onglets ${stateOnglets === 2 ? "green" : ""}`}
          >
            Date
          </button>
        </div>
        <div className="containerForm">
          {stateOnglets === 1 ? (
            <p className="contenu Decision">
              <form onSubmit={handleSubmit}>
                <label>
                  <h1> Insérez un titre pour votre décision </h1>
                  <input
                    className="TitleD"
                    type="text"
                    placeholder="Titre décision "
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </label>
                {titles.map((titleH2, id) => {
                  return (
                    <Editor
                      key={titleH2}
                      id={id}
                      title={titleH2}
                      data={data[id]?.data}
                    />
                  );
                })}
                <br />
              </form>
            </p>
          ) : (
            <p className="containerDate">
              {stepDeadlines.map((stepDeadlineH2, id) => (
                <DateStep
                  key={stepDeadlineH2}
                  id={id}
                  title={stepDeadlineH2}
                  value={nativeDate[id]?.date}
                  // date={date[id]?.setDate}
                />
              ))}
            </p>
          )}
          <button
            className="ButtonDecision"
            type="submit"
            value="Soumettre"
            onClick={handleSubmit}
          >
            Soumettre
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Form;
