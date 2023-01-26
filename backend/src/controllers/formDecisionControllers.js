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
  const timeline = {
    start: req.body.nativeDate[0].date,
    dl_1: req.body.nativeDate[1].date,
    first_decision: req.body.nativeDate[2].date,
    dl_2: req.body.nativeDate[3].date,
    final_decision: req.body.nativeDate[4].date,
  };
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

module.exports = { decisionPost, timelinePost };
