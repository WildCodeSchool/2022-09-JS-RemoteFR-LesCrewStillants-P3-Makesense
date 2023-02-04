/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class CommentaireManager extends AbstractManager {
  constructor() {
    super({ table: "comment" });
  }

  // eslint-disable-next-line camelcase, no-unused-vars
  insert(comment) {
    return this.connection.query(
      `insert into ${this.table} (comment, user_id, decision_id) values (?, ?, ?)`,
      [comment.comment, comment.user_id, comment.decision_id]
    );
  }

  getCommentByDecision(decision_id) {
    return this.connection.query(
      `select * from comment where decision_id = ?`,
      [decision_id]
    );
  }
}
module.exports = CommentaireManager;
