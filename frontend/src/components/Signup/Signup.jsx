import { useState } from "react";
import instance from "../../helpers/axios";
import "./Signup.css";

function Signup() {
  const [registerUser, setRegisterUser] = useState("");

  const handleChangeRegister = (e) => {
    const { name, value } = e.target;
    setRegisterUser({ ...registerUser, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    instance
      .post("/signup", registerUser)
      .then((res) => console.warn(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="signup">
      <h1>S'inscrire</h1>
      <form htmlFor="signup" onSubmit={handleRegister}>
        <label>
          {" "}
          Email
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChangeRegister}
            required
          />
        </label>
        <label>
          {" "}
          Mot de passe
          <input
            type="password"
            name="pw"
            placeholder="Mot de passe"
            onChange={handleChangeRegister}
            required
          />
        </label>
        <label>
          {" "}
          Confirmer mot de passe
          <input
            type="password"
            placeholder="Confirmer mot de passe"
            required
          />
        </label>
        <label>
          {" "}
          Matricule
          <input
            type="text"
            name="matricule"
            placeholder="Matricule"
            onChange={handleChangeRegister}
            required
          />
        </label>

        <button type="submit" className="greenHover">
          Inscription
        </button>
      </form>
    </div>
  );
}

export default Signup;
