import { useState } from "react";
import { Switch } from "@mui/material";
import instance from "../helpers/axios";
import "./AdminRegister.css";

// eslint-disable-next-line react/prop-types
export default function AdminRegister({ setShowModal, setUserAdded }) {
  // Pour le checkbox du role de mon user, je mets laveleur par défaut à "salarié"
  const [role, setRole] = useState("salarié");
  // Je mets à jour la valeur de mon role en fonction de ma checkbox
  const handleChangeRole = (e) => {
    setRole(e.target.checked ? "admin" : "salarié");
  };

  // Je crée un state pour récupérer les infos de mon user
  const [registerUser, setRegisterUser] = useState("");
  // Je gère l'actualisation des données de mon user dans le form en récupérant les valeurs des inputs
  const handleChangeRegister = (e) => {
    const { name, value } = e.target;
    setRegisterUser({ ...registerUser, [name]: value });
  };

  // Enfin On Submit j'envoie les données récupérées en front vers mon back pour save mon user
  const handleRegister = (e) => {
    e.preventDefault();
    instance
      .post("/register", registerUser)
      .then((res) => {
        console.warn(res);
        // ici j'enregistre qu'un user a bien été ajouté pour gérer le refresh de l'affichage de mes users dans AccueilAdmin (le state aprent est dans AccueilAdmin)
        setUserAdded(true);
      })
      .catch((err) => console.error(err));
  };
  // modal dont le state parent se trouve dans AccueilAdmin
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="modal" style={{ position: "absolute" }}>
      <button type="button" className="square" onClick={handleCloseModal}>
        {" "}
        X
      </button>
      <h1 className="adminRegisterTitle">
        Ajouter les informations d'un nouvel utilisateur
      </h1>
      <form
        htmlFor="signup"
        className="adminRegisterForm"
        onSubmit={handleRegister}
      >
        <label>
          Prénom
          <input
            type="text"
            name="firstname"
            placeholder="Prénom"
            onChange={handleChangeRegister}
            required
          />
        </label>
        <label>
          {" "}
          Nom
          <input
            type="text"
            name="lastname"
            placeholder="Nom"
            onChange={handleChangeRegister}
            required
          />
        </label>
        <label>
          {" "}
          Date de naissance
          <input
            type="date"
            data-date-format="YYY MM JJ"
            name="birthday"
            placeholder="AAAA/MM/JJ"
            onChange={handleChangeRegister}
            required
          />{" "}
        </label>
        <label>
          {" "}
          Role
          <Switch
            name="user_role"
            onClick={handleChangeRegister}
            onChange={handleChangeRole}
            checked={role === "admin"}
            value={role}
          />
          {role === "admin" ? "Admin" : "Salarié"}
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
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}
