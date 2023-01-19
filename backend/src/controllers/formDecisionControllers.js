const models = require("../models");

const decisionPost = (req, res) => {
  const decision = req.body;
  models.decision
    .insert(decision)
    .then(() => {
      res.status(201).json({ success: "Decision saved" });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const timelinePost = (req, res) => {
  const timeline = req.body;
  models.timeline
    .insert(timeline)
    .then(() => {
      res.status(201).json({ success: "date saved" });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = { decisionPost, timelinePost };
