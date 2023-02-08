import "../components/AccueilSalarie.css";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import instance from "../helpers/axios";

export default function AccueilSalarie() {
  const [decisions, setDecisions] = useState([]);
  // Je récupère l'id de mon user connecté qui vient du token(voir AuthContext)
  const { userID, userRole } = useContext(AuthContext);
  const id = +userID;
  // eslint-disable-next-line no-unused-vars
  const [hasFetchedData, setHasFetchedData] = useState(false);
  const [deletedDecision, setDeletedDecicion] = useState(false);
  const [archivedDecision, setArchivedDecicion] = useState(false);

  useEffect(() => {
    if (!hasFetchedData) {
      instance
        .get("/decisions-users")
        .then((result) => {
          setDecisions(result.data);
          setHasFetchedData(false);
          setDeletedDecicion(false);
          setArchivedDecicion(false);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [hasFetchedData, deletedDecision, archivedDecision]);

  const handleArchivedDecision = (decisionID) => {
    // eslint-disable-next-line no-alert, no-restricted-globals
    const isArchived = confirm("Archiver la décision ?");
    if (isArchived) {
      instance.put(`/decision/${decisionID}`);
      setArchivedDecicion(true);
    }
  };

  // Je filtre toutes mes décisions pour les trier

  const decisionsEnCours = decisions.filter(
    (decision) => decision.statut === "En cours"
  );
  const decisionsPrises = decisions.filter(
    (decision) => decision.statut === "Terminée"
  );
  const mesDecisionsByID = decisions.filter(
    (decision) => decision.user_id === id
  );
  const handleDeleteDecision = (decisionID) => {
    // eslint-disable-next-line no-alert, no-restricted-globals
    const isDelete = confirm("Supprimer la décision ?");
    if (isDelete) {
      instance.delete(`/decision/${decisionID}`);
      setDeletedDecicion(true);
    }
  };

  return (
    <>
      <Header />
      <div className="AccueilSalarie">
        <div className="BgDecision">
          <div className="Decisions">
            <h1>Mes décisions</h1>
            {mesDecisionsByID.map((maDecision) => (
              <div key={maDecision.id} className="DecisionsCard">
                <div className="DecisionContainer">
                  <Link to={`/decisions/${maDecision.id}`}>
                    <div className="cardDecision">
                      <h2>{maDecision.title || ""}</h2>
                      <p>
                        {" "}
                        postée par {maDecision.firstname || ""}{" "}
                        {maDecision.lastname || ""}
                      </p>
                      <p> statut : {maDecision.statut}</p>
                    </div>
                  </Link>
                  {/* ici c'est les boutons modif et suppr qui s'affichent en fonction du role et de l'id} */}
                  {maDecision.user_id === id || userRole === "admin" ? (
                    <div>
                      <button
                        style={{ marginLeft: "2rem" }}
                        type="button"
                        className="greenHover"
                        onClick={() => handleArchivedDecision(maDecision.id)}
                      >
                        {" "}
                        Archiver{" "}
                      </button>
                      <button
                        type="button"
                        className="pink"
                        onClick={() => handleDeleteDecision(maDecision.id)}
                      >
                        {" "}
                        Supprimer{" "}
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
            <hr className="ligne" />
            <h1>Décisions en Cours</h1>
            {decisionsEnCours.reverse().map((decisionEnCours) => (
              <div key={decisionEnCours.id} className="DecisionsCard">
                <div className="DecisionContainer">
                  <Link to={`/decisions/${decisionEnCours.id}`}>
                    <div className="cardDecision">
                      <h2>{decisionEnCours.title}</h2>
                      <p>
                        {" "}
                        postée par {decisionEnCours.firstname}{" "}
                        {decisionEnCours.lastname}
                      </p>
                      <p> statut : {decisionEnCours.statut}</p>
                    </div>
                  </Link>
                  {decisionEnCours.user_id === id ||
                  (userRole === "admin" && decisionEnCours.statut) ? (
                    <div>
                      <button
                        style={{ marginLeft: "2rem" }}
                        type="button"
                        className="greenHover"
                        onClick={() =>
                          handleArchivedDecision(decisionEnCours.id)
                        }
                      >
                        {" "}
                        Archiver{" "}
                      </button>
                      <button
                        type="button"
                        className="pink"
                        onClick={() => handleDeleteDecision(decisionEnCours.id)}
                      >
                        {" "}
                        Supprimer{" "}
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="ligne" />
      <div className="BgDecision">
        <div className="Decisions">
          <h1>Décisions prises</h1>
          {decisionsPrises.reverse().map((decisionPrise) => (
            <div key={decisionPrise.id} className="DecisionsCard">
              <div className="DecisionContainer">
                <Link to={`/decisions/${decisionPrise.id}`}>
                  <div className="cardDecision">
                    <h2>{decisionPrise.title}</h2>
                    <p>
                      {" "}
                      postée par {decisionPrise.firstname}{" "}
                      {decisionPrise.lastname}
                    </p>
                    <p> statut : {decisionPrise.statut}</p>
                  </div>
                </Link>
                {decisionPrise.user_id === id || userRole === "admin" ? (
                  <div>
                    <button
                      style={{ marginLeft: "2rem" }}
                      type="button"
                      className="pink"
                      onClick={() => handleDeleteDecision(decisionPrise.id)}
                    >
                      {" "}
                      Supprimer{" "}
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
