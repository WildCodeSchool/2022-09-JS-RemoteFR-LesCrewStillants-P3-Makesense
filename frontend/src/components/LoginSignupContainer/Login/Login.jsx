import { useState } from "react";
import instance from "../../../helpers/axios";
import "./Login.css";

function Login() {
  const [loginUser, setLoginUser] = useState({
    email: "jane@doe.com",
    password: "azerty",
  });
  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setLoginUser({ ...loginUser, [name]: value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    instance
      .post("/login", loginUser)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err.response.data));
  };

  return (
    <div className="login">
      <form htmlFor="login" onSubmit={handleLogin}>
        <input
          type="password"
          placeholder="Matricule"
          onChange={handleChangeLogin}
        />
        <input type="email" placeholder="Email" onChange={handleChangeLogin} />
        <input
          type="password"
          placeholder="Mot de passe"
          onChange={handleChangeLogin}
        />
        <button type="submit">Connexion</button>
      </form>
    </div>
  );
}

export default Login;
