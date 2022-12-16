import "./Signup.css";

function Signup() {
  return (
    <div className="signup">
      <form>
        <input type="password" placeholder="Matricule" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Mot de passe" />
        <input type="password" placeholder="Confirmer mot de passe" />
        <button type="submit">Inscription</button>
      </form>
    </div>
  );
}

export default Signup;
