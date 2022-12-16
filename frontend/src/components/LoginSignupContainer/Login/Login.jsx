import "./Login.css";

function Login() {
  return (
    <div className="login">
      <form>
        <input type="password" placeholder="Matricule" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Mot de passe" />
        <button type="submit">Connexion</button>
      </form>
    </div>
  );
}

export default Login;
