import { useState } from "react";
import instance from "../helpers/axios";

export default function AccueilAdmin() {
  const [registerUser, setRegisterUser] = useState("");

  const handleChangeRegister = (e) => {
    const { name, value } = e.target;
    setRegisterUser({ ...registerUser, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    instance
      .post("/register", registerUser)
      .then((res) => console.warn(res.data))
      .catch((err) => console.error(err));
  };
  return (
    <div className="signup">
      <form htmlFor="signup" onSubmit={handleRegister}>
        <input
          type="text"
          name="firstname"
          placeholder="Prénom"
          onChange={handleChangeRegister}
          required
        />
        <input
          type="text"
          name="lastname"
          placeholder="Nom"
          onChange={handleChangeRegister}
          required
        />
        <input
          type="date"
          data-date-format="YYY MM JJ"
          name="birthday"
          placeholder="AAAA/MM/JJ"
          onChange={handleChangeRegister}
          required
        />
        <input
          type="text"
          name="user_role"
          placeholder="role"
          onChange={handleChangeRegister}
          required
        />
        <input
          type="text"
          name="matricule"
          placeholder="Matricule"
          onChange={handleChangeRegister}
          required
        />
        <button type="submit">Inscription</button>
      </form>
    </div>
  );
}
