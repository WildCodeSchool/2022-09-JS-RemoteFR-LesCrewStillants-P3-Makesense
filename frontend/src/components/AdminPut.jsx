import { useState, useEffect } from "react";
import { Switch } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";
import instance from "../helpers/axios";
import "./AdminRegister.css";

// eslint-disable-next-line react/prop-types
export default function AdminPut({ setUserPut }) {
  const [initialUser, setInitialUser] = useState("");
  const { id } = useParams();
  useEffect(() => {
    instance
      .get(`/users/${id}`)
      .then((result) => {
        setInitialUser(result.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, [id]);

  const handleAdminChanges = (e) => {
    const { name, value } = e.target;
    setInitialUser({ ...initialUser, [name]: value });
  };

  const [role, setRole] = useState("salarié");
  // Je mets à jour la valeur de mon role en fonction de ma checkbox
  const handleChangeRole = (e) => {
    setRole(e.target.checked ? "admin" : "salarié");
  };

  // Enfin On Submit j'envoie les données récupérées en front vers mon back pour save mon user
  const handlePutRegister = (e) => {
    e.preventDefault();
    instance
      .put(`/users/${id}`, initialUser)
      .then((res) => {
        console.warn(res);
        // ici j'enregistre qu'un user a bien été ajouté pour gérer le refresh de l'affichage de mes users dans AccueilAdmin (le state aprent est dans AccueilAdmin)

        toast("Utilisateur modifié !", {
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
        setUserPut(true);
        setInitialUser("");
      })
      .catch((err) => console.warn(err));
  };

  return (
    <div className="modal" style={{ position: "absolute" }}>
      <ToastContainer
        theme="colored"
        autoClose={2000}
        position="bottom-right"
        className="toast-container"
        toastClassName="dark-toast"
      />
      <Link to="/accueil-admin">
        <button type="button" className="square">
          {" "}
          X
        </button>
      </Link>

      <h1 className="adminRegisterTitle">
        Modifier les informations de l'utilisateur
      </h1>
      <form
        htmlFor="signup"
        className="adminRegisterForm"
        onSubmit={handlePutRegister}
      >
        <input
          type="text"
          name="firstname"
          value={initialUser.firstname || ""}
          placeholder="Prénom"
          onChange={handleAdminChanges}
          required
        />
        <input
          type="text"
          name="lastname"
          value={initialUser.lastname || ""}
          placeholder="Nom"
          onChange={handleAdminChanges}
          required
        />
        <input
          type="date"
          name="date"
          value={initialUser.date || ""}
          placeholder={new Date(initialUser.birthday).toLocaleDateString(
            "fr-FR"
          )}
          onChange={handleAdminChanges}
          required
        />
        <label>
          <Switch
            name="user_role"
            onClick={handleAdminChanges}
            onChange={handleChangeRole}
            checked={role === "admin"}
            value={role}
          />
          Role : {role === "admin" ? "Salarié" : "Admin"}
        </label>

        <input
          type="text"
          name="matricule"
          placeholder="Matricule"
          onChange={handleAdminChanges}
          value={initialUser.matricule || ""}
          required
        />
        <button type="submit" value="submit">
          {" "}
          Modifier{" "}
        </button>
      </form>
    </div>
  );
}
