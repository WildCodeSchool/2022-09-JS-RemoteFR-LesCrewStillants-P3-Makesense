const models = require("../models");

const decisionPost = (req, res) => {
  const decision = {
    title: req.body.title,
    desc_start: req.body[0].data,
    details: req.body[1].data,
    impact: req.body[2].data,
    benefits: req.body[3].data,
    risk: req.body[4].data,
  };

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
