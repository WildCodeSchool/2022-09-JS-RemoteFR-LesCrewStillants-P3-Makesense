import { useNavigate } from "react-router-dom";
import { useState } from "react";
import jwtDecode from "jwt-decode";
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

    instance
      .post("/login", loginUser, { withCredentials: true })
      .then((res) => {
        const { token } = res.data;
        const user = jwtDecode(token);
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        if (user.user_role === "admin") {
          navigate("/accueil-admin");
        } else {
          navigate("/accueil-salarie");
        }
      })
      .catch((err) => console.error(err));
  };

  // save user dans le context pour que tout le monde (app)
  // puisse y accéder.

  /*
   * user {
   *  email: "antho@admin.com",
   *  sub: 5,
   *  role: "admin"
   * }
   *
   * J'ai mon user, quoi qu'il arrive je navigate("/accueil-salarie")
   *
   * Maintenant, si user a le rôle admin j'ai un button en plus sur la nav
   */
  return (
    <div className="login">
      <h1>Se connecter</h1>
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
