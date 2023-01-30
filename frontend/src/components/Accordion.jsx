import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "html-react-parser";
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
  const [commentaire, setCommentaire] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    useEffect(() => {
      instance
        .post(`/commentaire`)
        .then((result) => {
          setCommentaire(result.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }, [commentaire]);
    useEffect(() => {
      instance
        .get(`/commentaire`)
        .then((result) => {
          setCommentaire(result.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }, [commentaire]);
  };
  console.warn(commentaire);

  const [active, setActive] = useState([]);

  const handleToggle = (index) => {
    const newActive = [...active];
    newActive[index] = !newActive[index];
    setActive(newActive);
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
          <h2> Commentaires </h2> <span className="accordion__icon" />
        </div>
        <div className="accordion__content">
          {/* Ici il faut afficher le resultat de getAll comments */}
        </div>
      </div>
      <h2>Ajouter un commentaire</h2>
      <textarea
        name="commentaire"
        placeholder="Ecrivez votre commentaire ici"
        value={commentaire}
        onChange={(e) => setCommentaire(e.target.value)}
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
