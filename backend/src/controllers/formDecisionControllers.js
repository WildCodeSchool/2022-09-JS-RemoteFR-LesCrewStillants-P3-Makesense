const models = require("../models");

const decisionPost = (req, res) => {
  const { title } = req.body;
  const decision = {
    desc_start: req.body.data[0].data,
    details: req.body.data[1].data,
    impact: req.body.data[2].data,
    benefits: req.body.data[3].data,
    risk: req.body.data[4].data,
  };

  models.decision
    .insert({ title, decision })
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
      res.status(201).json({ success: "Date saved" });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const decisionGet = (req, res) => {
  models.decision
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = { decisionPost, timelinePost, decisionGet };
