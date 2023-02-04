import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "html-react-parser";
import { AuthContext } from "../Context/AuthContext";
import instance from "../helpers/axios";

function Accordion() {
  const { id } = useParams();
  const [decision, setDecision] = useState("");
  useEffect(() => {
    instance
      .get(`/decisions/${id}`)
      .then((result) => {
        setDecision(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const [active, setActive] = useState([]);

  const handleToggle = (index) => {
    const newActive = [...active];
    newActive[index] = !newActive[index];
    setActive(newActive);
  };

  // eslint-disable-next-line camelcase
  const decision_id = +id;

  const { userID } = useContext(AuthContext);
  // eslint-disable-next-line camelcase
  const user_id = +userID;

  console.warn(user_id);
  console.warn(decision_id);

  const [comment, setComment] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.warn(comment);
    instance
      // eslint-disable-next-line camelcase
      .post(`/comment`, { comment, user_id, decision_id })
      .then((result) => {
        setComment(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="accordion">
      <h1> Décision : {decision.title}</h1>
      <div className={`accordion ${active[0] && "active"}`}>
        <div
          className="accordion__title"
          aria-hidden="true"
          onClick={() => handleToggle(0)}
        >
          <h2> Description </h2> <span className="accordion__icon" />
        </div>
        <div className="accordion__content">
          {ReactHtmlParser(decision.desc_start ? decision.desc_start : "")}
        </div>
      </div>

      <div className={`accordion ${active[1] && "active"}`}>
        <div
          className="accordion__title"
          aria-hidden="true"
          onClick={() => handleToggle(1)}
        >
          <h2> Détails</h2> <span className="accordion__icon" />
        </div>
        <div className="accordion__content">
          {ReactHtmlParser(decision.details ? decision.details : "")}
        </div>
      </div>

      <div className={`accordion ${active[2] && "active"}`}>
        <div
          className="accordion__title"
          aria-hidden="true"
          onClick={() => handleToggle(2)}
        >
          <h2> Impact sur l'organisation </h2>{" "}
          <span className="accordion__icon" />
        </div>
        <div className="accordion__content">
          {ReactHtmlParser(decision.impact ? decision.impact : "")}
        </div>
      </div>
      <div className={`accordion ${active[3] && "active"}`}>
        <div
          className="accordion__title"
          aria-hidden="true"
          onClick={() => handleToggle(3)}
        >
          <h2> Bénéfices </h2> <span className="accordion__icon" />
        </div>
        <div className="accordion__content">
          {ReactHtmlParser(decision.benefits ? decision.benefits : "")}
        </div>
      </div>

      <div className={`accordion ${active[4] && "active"}`}>
        <div
          className="accordion__title"
          aria-hidden="true"
          onClick={() => handleToggle(4)}
        >
          <h2> Risques </h2> <span className="accordion__icon" />
        </div>
        <div className="accordion__content">
          {ReactHtmlParser(decision.risk ? decision.risk : "")}
        </div>
      </div>

      <div className={`accordion ${active[5] && "active"}`}>
        <div
          className="accordion__title"
          aria-hidden="true"
          onClick={() => handleToggle(5)}
        >
          <h2> Comments </h2> <span className="accordion__icon" />
        </div>
        <div className="accordion__content">
          {/* Ici il faut afficher le resultat de getAll comments */}
        </div>
      </div>
      <h2>Ajouter un commentaire</h2>
      <textarea
        name="comment"
        placeholder="Ecrivez votre comment ici"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        cols="30"
        rows="10"
      />
      <br />
      <button type="button" value="Publier" onClick={handleSubmit}>
        Publier
      </button>
    </div>
  );
}

export default Accordion;
