import { useState } from "react";
import instance from "../../helpers/axios";
import "./Signup.css";

function Signup() {
  const [registerUser, setRegisterUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChangeRegister = (e) => {
    const { name, value } = e.target;
    setRegisterUser({ ...registerUser, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    instance
      .post("/register", registerUser)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="signup">
      <form htmlFor="signup" onSubmit={handleRegister}>
        <input
          id="signup"
          type="password"
          placeholder="Matricule"
          onChange={handleChangeRegister}
          required
        />
        <input
          id="signup"
          type="email"
          placeholder="Email"
          onChange={handleChangeRegister}
          required
        />
        <input
          id="signup"
          type="password"
          placeholder="Mot de passe"
          onChange={handleChangeRegister}
          required
        />
        <input
          id="signup"
          type="password"
          placeholder="Confirmer mot de passe"
          onChange={handleChangeRegister}
          required
        />
        <button type="submit">Inscription</button>
      </form>
    </div>
  );
}

export default Signup;
