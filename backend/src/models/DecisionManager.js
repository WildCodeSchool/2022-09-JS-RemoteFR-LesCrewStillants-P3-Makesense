/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class DecisionManager extends AbstractManager {
  constructor() {
    super({ table: "decision" });
  }

  insert({ title, decision, user_id }) {
    return this.connection.query(
      `insert into ${this.table} (title, desc_start, details, impact, benefits, risk, user_id) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        title,
        decision.desc_start,
        decision.details,
        decision.impact,
        decision.benefits,
        decision.risk,
        user_id,
      ]
    );
  }

  getAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  getDecisionByUser(user_id) {
    return this.connection.query(
      `
select * from decision where user_id = ?`,
      [user_id]
    );
  }
}

module.exports = DecisionManager;
