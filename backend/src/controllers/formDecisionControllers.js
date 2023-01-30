const models = require("../models");

const decisionPost = (req, res) => {
  // eslint-disable-next-line camelcase
  const { title, user_id } = req.body;
  const decision = {
    desc_start: req.body.data[0].data,
    details: req.body.data[1].data,
    impact: req.body.data[2].data,
    benefits: req.body.data[3].data,
    risk: req.body.data[4].data,
  };

  models.decision
    // eslint-disable-next-line camelcase
    .insert({ title, decision, user_id })
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
const decisionGetByID = (req, res) => {
  models.decision
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = { decisionPost, timelinePost, decisionGet, decisionGetByID };
