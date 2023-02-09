import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "html-react-parser";
import { AuthContext } from "../Context/AuthContext";
import instance from "../helpers/axios";

function Accordion() {
  const { id } = useParams();
  const [decision, setDecision] = useState("");
  const [commentPosted, setCommentPosted] = useState(false);

  useEffect(() => {
    instance
      .get(`/decisions/${id}`)
      .then((result) => {
        setDecision(result.data);
        setCommentPosted(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id, commentPosted]);

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

  const date = new Date().toISOString().slice(0, 10);

  const [comment, setComment] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    instance
      // eslint-disable-next-line camelcase
      .post(`/comment`, { comment, date, user_id, decision_id })
      .then(() => {
        setComment("");
        setCommentPosted(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    instance
      .get(`/comments/${id}`)
      .then((result) => {
        setAllComments(result.data);
        setCommentPosted(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [commentPosted]);
  return (
    <div className="accordion">
      <h1> {decision.title}</h1>
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
          {allComments.map((comments) => (
            <div key={comments.id}>
              <h3>
                <i>
                  {comments.firstname} {comments.lastname}{" "}
                </i>
                , le {comments.date} :
              </h3>
              <p style={{ margin: "1rem" }}>{comments.comment}</p>
            </div>
          ))}
          <h3 style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <b>Ajouter un commentaire :</b>
          </h3>
          <textarea
            name="comment"
            placeholder="Ecrivez votre comment ici"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            cols="30"
            rows="10"
          />{" "}
          <br />
          <button
            type="button"
            value="Publier"
            className="green"
            onClick={handleSubmit}
          >
            Publier
          </button>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
