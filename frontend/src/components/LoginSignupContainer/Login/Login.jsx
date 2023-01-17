import { useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../../helpers/axios";
import "./Login.css";

function Login() {
  const [loginUser, setLoginUser] = useState("");
  const navigate = useNavigate();

  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setLoginUser({ ...loginUser, [name]: value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    instance.post("/login", loginUser).then((res) => {
      if (res.data === "admin") {
        navigate("/accueil-admin");
      } else {
        navigate("/accueil-salarie");
      }
    });
  };

  return (
    <div className="login">
      <form htmlFor="login" onSubmit={handleLogin}>
        <input type="text" placeholder="Matricule" required />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChangeLogin}
          required
        />
        <input
          type="password"
          name="pw"
          placeholder="Mot de passe"
          onChange={handleChangeLogin}
        />
        <button type="submit">Connexion</button>
      </form>
    </div>
  );
}

export default Login;
