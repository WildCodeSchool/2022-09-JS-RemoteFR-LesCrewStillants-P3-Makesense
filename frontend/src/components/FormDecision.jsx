/* eslint-disable camelcase */
import { useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Switch } from "@mui/material";
import { AuthContext } from "../Context/AuthContext";
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

  const { userID } = useContext(AuthContext);
  const user_id = parseInt(userID, 10);

  const [title, setTitle] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [date, setDate] = useState();

  // state du switch pour le statut de la décision
  const [statut, setStatut] = useState("En cours");

  const handleChangeStatut = (e) => {
    setStatut(e.target.checked ? "Terminée" : "En cours");
  };

  // const [decision, setDecision] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.warn(nativeDate[1]);
    if (!title) {
      toast.warn("Attention vous devez insérer un titre ❌");
    } else if (!data[0]?.data) {
      toast.warn("Attention le champ 'Description de la décision' est vide ❌");
    } else if (!data[1]?.data) {
      toast.warn("Attention le champ 'Detail' est vide ❌");
    } else if (!data[2]?.data) {
      toast.warn("Attention le champ 'Impact' est vide ❌");
    } else if (!data[3]?.data) {
      toast.warn("Attention le champ 'Bénéfice' est vide ❌");
    } else if (!data[4]?.data) {
      toast.warn("Attention le champ 'Risque' est vide ❌");
    } else {
      instance
        .post("/decision", { title, data, user_id, statut })
        .then((res) => console.warn(res.data))
        .catch((err) => console.warn(err));
      toast("Décision envoyée avec succès!", {
        position: "bottom-right",
        type: "success",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  /*
   * récuperer les dates par id
   * poster les dates
   * faire en sorte que le toastify fonctionne aussi avec les dates (else if toussa toussa)
   * faire le chemin dans formdecisioncontrollers
   *
   *
   *
   *
   */

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
    "#1 Description de la Décision",
    "#2 Les détails de la décision",
    "#3 Impact sur l'organisation",
    "#4 Bénéfices",
    "#5 Risques",
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
        <ToastContainer
          theme="colored"
          type="warning"
          autoClose={2000}
          position="bottom-right"
          className="toast-container"
          toastClassName="dark-toast"
        />
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
            <div className="contenu Decision">
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
            </div>
          ) : (
            <div className="containerDate">
              {stepDeadlines.map((stepDeadlineH2, id) => (
                <DateStep
                  key={stepDeadlineH2}
                  id={id}
                  title={stepDeadlineH2}
                  dateValue={nativeDate[id]?.title}
                />
              ))}
            </div>
          )}
          <label>
            <Switch
              name="statut"
              onChange={handleChangeStatut}
              onClick={(e) => setStatut(e.target.value)}
              checked={statut === "Terminée"}
            />
            {statut === "Terminée" ? "Terminée" : "En Cours"}
          </label>
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
