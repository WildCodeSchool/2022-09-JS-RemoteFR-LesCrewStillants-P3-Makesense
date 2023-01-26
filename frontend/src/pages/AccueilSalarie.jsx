import "@components/AccueilSalarie.css";
import Header from "@components/Header";
import Footer from "@components/Footer";
import ReactHtmlParser from "html-react-parser";
import { useState, useEffect } from "react";
import instance from "../helpers/axios";

export default function AccueilSalarie() {
  const [decisionsEnCours, setDecisionsEnCours] = useState([]);

  useEffect(() => {
    instance
      .get("/decision")
      .then((result) => {
        setDecisionsEnCours(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="AccueilSalarie">
        <div className="BgDecision">
          <div className="Decisions">
            <h1>Mes Décisions</h1>
            {decisionsEnCours.reverse().map((decision) => (
              <div key={decision.id} className="DecisionsCard">
                <div className="DecisionContainer">
                  <div className="cardDecision">
                    <h2>{decision.title}</h2>
                    <p>
                      {" "}
                      postée par <br />
                      {decision.user_id} user.firstname user.lastname <br />
                      le {decision.date} date ?
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="ligne" />
      <div className="BgDecision">
        <div className="Decisions">
          <h1>Décisions en cours</h1>
          {decisionsEnCours.reverse().map((decision) => (
            <div key={decision.id} className="DecisionsCard">
              <div className="DecisionContainer">
                <div className="cardDecision">
                  <h2>{decision.title}</h2>
                  {ReactHtmlParser(decision.desc_start)}
                  {ReactHtmlParser(decision.details)}
                <div className="card">
                  <h1>{decision.title}</h1>
                  <p>{decision.desc_final}</p>
                  <p>{decision.details}</p>

                  <p>{decision.status}</p>
                  <p>{decision.user_id}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="ligne" />
      <div className="BgDecision">
        <div className="Decisions">
          <h1>Décisions prises</h1>
          {decisionsEnCours.reverse().map((decision) => (
            <div key={decision.id} className="DecisionsCard">
              <div className="DecisionContainer">
                <div className="cardDecision">
                  <h2>{decision.title}</h2>
                  <p>{decision.desc_final}</p>
                  <p>{decision.details}</p>
                  <p>{decision.status}</p>
                  <p>{decision.user_id}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
