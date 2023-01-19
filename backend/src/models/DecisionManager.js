const AbstractManager = require("./AbstractManager");

class DecisionManager extends AbstractManager {
  constructor() {
    super({ table: "decision" });
  }

  insert(decision) {
    return this.connection.query(
      `insert into ${this.table} (title, details, impact, benefits, risk, desc_start) values (?, ?, ?, ?, ?, ?)`,
      [
        decision.title,
        decision.title,
        decision.title,
        decision.details,
        decision.impact,
        decision.benefits,
        decision.risk,
        decision.desc_start,
      ]
    );
  }
}
module.exports = DecisionManager;
