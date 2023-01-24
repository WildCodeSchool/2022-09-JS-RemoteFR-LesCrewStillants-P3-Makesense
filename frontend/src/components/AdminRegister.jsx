import { useState } from "react";
import instance from "../helpers/axios";
import "./AdminRegister.css";

// eslint-disable-next-line react/prop-types
export default function AdminRegister({ setShowModal }) {
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

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="modal" style={{ position: "absolute" }}>
      <button type="button" className="square" onClick={handleCloseModal}>
        {" "}
        X
      </button>
      <h1>Ajouter les informations d'un nouvel utilisateur</h1>
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
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}
