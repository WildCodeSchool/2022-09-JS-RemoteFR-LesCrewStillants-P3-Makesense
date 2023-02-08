/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class CommentaireManager extends AbstractManager {
  constructor() {
    super({ table: "comment" });
  }

  // eslint-disable-next-line camelcase, no-unused-vars
  insert(comment) {
    return this.connection.query(
      `insert into ${this.table} (date, comment, user_id, decision_id) values (?, ?, ?, ?)`,
      [comment.date, comment.comment, comment.user_id, comment.decision_id]
    );
  }

  getAllCommentsByDecision(id) {
    return this.connection.query(
      `select comment.id, DATE_FORMAT(comment.date, "%d-%m-%Y") date, comment.comment, comment.user_id, user.firstname, user.lastname from comment inner join user on user.id = user_id where comment.decision_id= ?`,
      [id]
    );
  }
}
module.exports = CommentaireManager;
