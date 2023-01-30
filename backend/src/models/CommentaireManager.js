const AbstractManager = require("./AbstractManager");

class CommentaireManager extends AbstractManager {
  constructor() {
    super({ table: "comment" });
  }

  // eslint-disable-next-line camelcase, no-unused-vars
  insert({ date, comment, user_id, decision_id }) {
    return this.connection.query(
      `insert into ${this.table} (id, date, comment, type, user_id, decision_id) values (?, ?, ?, ?, ?, ?)`,
      [comment.date, comment.comment, comment.user_id, comment.decision_id]
    );
  }
}

module.exports = CommentaireManager;
// Id, date, comment, type, user_id, decision_id
