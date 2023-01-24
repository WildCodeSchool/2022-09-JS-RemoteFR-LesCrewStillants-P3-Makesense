const AbstractManager = require("./AbstractManager");

class DecisionManager extends AbstractManager {
  constructor() {
    super({ table: "decision" });
  }

  insert({ title, decision }) {
    return this.connection.query(
      `insert into ${this.table} (title, desc_start, details, impact, benefits, risk) values (?, ?, ?, ?, ?, ?)`,
      [
        title,
        decision.desc_start,
        decision.details,
        decision.impact,
        decision.benefits,
        decision.risk,
      ]
    );
  }
}
module.exports = DecisionManager;
