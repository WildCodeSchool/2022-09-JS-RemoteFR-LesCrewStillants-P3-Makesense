const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  findByEmail(email) {
    return this.connection.query(
      `select * from ${this.table} where email = ?`,
      [email]
    );
  }

  findByMatricule(user) {
    return this.connection.query(
      `update ${this.table} set email = ?, pw =? where matricule=?`,
      [user.email, user.pw, user.matricule]
    );
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (firstname, lastname, birthday, user_role, matricule) values (?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.birthday,
        user.user_role,
        user.matricule,
      ]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set firstname = ?, lastname= ?, birthday = ?, user_role = ?, email = ?, pw= ?, matricule = ? where id = ?`,
      [
        user.firstname,
        user.lastname,
        user.birthday,
        user.user_role,
        user.email,
        user.pw,
        user.matricule,
        user.id,
      ]
    );
  }
}

module.exports = UserManager;
