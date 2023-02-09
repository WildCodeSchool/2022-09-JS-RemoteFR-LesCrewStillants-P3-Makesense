import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
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
      .then(() => {
        e.target.reset();
        toast("Utilisateur enregistré !", {
          position: "bottom-right",
          type: "success",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .catch(() => {
        toast("Vérifier vos informations !", {
          position: "bottom-right",
          type: "error",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  return (
    <div className="signup">
      <ToastContainer
        theme="colored"
        autoClose={2000}
        position="bottom-right"
        className="toast-container"
        toastClassName="dark-toast"
      />
      <h1>S'inscrire</h1>
      <form className="signupForm" htmlFor="signup" onSubmit={handleRegister}>
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
