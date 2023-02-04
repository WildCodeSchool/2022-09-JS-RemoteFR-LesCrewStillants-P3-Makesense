/* eslint-disable camelcase */
const models = require("../models");

const commentPost = (req, res) => {
  models.comment
    .insert(req.body)
    .then(() => {
      res.status(201).json({ success: "Success" });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getAllCommentsByDecisionID = (req, res) => {
  const { id } = req.params;
  models.comment
    .getAllCommentsByDecision(id)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  commentPost,
  getAllCommentsByDecisionID,
};
