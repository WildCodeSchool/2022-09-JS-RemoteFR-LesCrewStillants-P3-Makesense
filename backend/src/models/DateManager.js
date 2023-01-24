const AbstractManager = require("./AbstractManager");

class DecisionManager extends AbstractManager {
  constructor() {
    super({ table: "timeline" });
  }

  insert(timeline) {
    return this.connection.query(
      `insert into ${this.table} (start, dl_1, first_decision, dl_2, final_decision) values (?, ?, ?, ?, ?)`,
      [
        timeline.start,
        timeline.dl_1,
        timeline.first_decision,
        timeline.dl_2,
        timeline.final_decision,
      ]
    );
  }
}
module.exports = DecisionManager;
