const models = require("../models");

const commentPost = (req, res) => {
  console.warn(req.body);

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
// const commentGet = (req, res) => {
//   const { comment } = req.body.comment;

//   models.comment
//     .insert({ comment })
//     .then(() => {
//       res.status(201).json({ success: "Success" });
//     })
//     .catch((err) => {
//       console.error(err);
//       res.sendStatus(500);
//     });
// };

module.exports = {
  commentPost,
  // commentGet,
};
