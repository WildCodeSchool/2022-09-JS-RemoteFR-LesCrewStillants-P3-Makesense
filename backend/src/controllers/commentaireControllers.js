const models = require("../models");

const commentairePost = (req, res) => {
  const { commentaire } = req.body.commentaire;

  models.decision
    .insert({ commentaire })
    .then(() => {
      res.status(201).json({ success: "Success" });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const commentaireGet = (req, res) => {
  const { commentaire } = req.body.commentaire;

  models.decision
    .insert({ commentaire })
    .then(() => {
      res.status(201).json({ success: "Success" });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = { commentairePost, commentaireGet };
