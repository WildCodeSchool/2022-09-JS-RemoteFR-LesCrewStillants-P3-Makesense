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
      <h1>S'inscire</h1>
      <form htmlFor="signup" onSubmit={handleRegister}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChangeRegister}
          required
        />
        <input
          type="password"
          name="pw"
          placeholder="Mot de passe"
          onChange={handleChangeRegister}
          required
        />
        <input type="password" placeholder="Confirmer mot de passe" required />
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

export default Signup;
