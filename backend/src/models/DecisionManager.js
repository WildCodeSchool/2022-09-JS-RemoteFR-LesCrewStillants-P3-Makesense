/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class DecisionManager extends AbstractManager {
  constructor() {
    super({ table: "decision" });
  }

  insert({ title, decision, user_id, statut }) {
    return this.connection.query(
      `insert into ${this.table} (title, desc_start, details, impact, benefits, risk, user_id, statut) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        title,
        decision.desc_start,
        decision.details,
        decision.impact,
        decision.benefits,
        decision.risk,
        user_id,
        statut,
      ]
    );
  }

  getAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  getAllDecisionAndUser() {
    return this.connection.query(
      `
      select decision.id, decision.title, decision.statut,decision.user_id, firstname, lastname, desc_start, details, impact, benefits, risk

from decision
inner join user on decision.user_id = user.id group by decision.id`
    );
  }

  putDecisionStatut(id) {
    return this.connection.query(
      `update ${this.table} set statut = "Terminée" where id= ?`,
      [id]
    );
  }

  countDecisionEnCours() {
    return this.connection.query(`
    select count(*) as decisionEnCours from decision where statut = 'En cours'`);
  }

  countDecisionPrises() {
    return this.connection.query(`
    select count(*) as decisionPrise from decision where statut = 'Terminée'`);
  }
}

module.exports = DecisionManager;
