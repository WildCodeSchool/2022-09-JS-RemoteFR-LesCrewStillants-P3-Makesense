import { useState, useEffect, useContext } from "react";
import Header from "@components/Header";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import instance from "../helpers/axios";
import { AuthContext } from "../Context/AuthContext";
import "../components/AdminRegister.css";

// eslint-disable-next-line react/prop-types
export default function Profil() {
  const [initialUser, setInitialUser] = useState("");
  const { userID } = useContext(AuthContext);
  const id = +userID;
  const [userPut, setUserPut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    instance
      .get(`/users/${id}`)
      .then((result) => {
        setInitialUser(result.data);
        setUserPut(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id, userPut]);

  const handleAdminChanges = (e) => {
    const { name, value } = e.target;
    setInitialUser({ ...initialUser, [name]: value });
  };

  //  On Submit j'envoie les données récupérées en front vers mon back pour save mon user
  const handlePutRegister = (e) => {
    e.preventDefault();
    instance

      .put(`/user/${id}`, initialUser)
      .then((res) => {
        console.warn(res);
        setUserPut(true);
        // ici j'enregistre qu'un user a bien été ajouté pour gérer le refresh de l'affichage de mes users dans AccueilAdmin (le state aprent est dans AccueilAdmin)
        toast("Profil modifié !", {
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
      .catch((err) => console.error(err));
  };
  return (
    <>
      <Header />
      <button
        onClick={() => navigate(-1)}
        type="button"
        className="pink"
        style={{ alignSelf: "center", margin: "1rem" }}
      >
        {" "}
        Retour{" "}
      </button>
      <div className="modal">
        <h1 className="adminRegisterTitle"> Mettre à jour mes informations</h1>

        <ToastContainer
          theme="colored"
          autoClose={2000}
          position="bottom-right"
          className="toast-container"
          toastClassName="dark-toast"
        />
        <form
          htmlFor="signup"
          className="adminRegisterForm"
          onSubmit={handlePutRegister}
        >
          <label>
            Prénom
            <input
              type="text"
              name="firstname"
              value={initialUser.firstname || ""}
              placeholder="Prénom"
              onChange={handleAdminChanges}
              required
            />
          </label>
          <label>
            {" "}
            Nom
            <input
              type="text"
              name="lastname"
              value={initialUser.lastname || ""}
              placeholder="Nom"
              onChange={handleAdminChanges}
              required
            />
          </label>
          <label>
            {" "}
            Date de naissance
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
          </label>
          <label>
            {" "}
            Email
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleAdminChanges}
              value={initialUser.email || ""}
              required
            />
          </label>
          <button
            style={{ alignSelf: "center", margin: "1rem" }}
            type="submit"
            value="submit"
            className="green"
          >
            {" "}
            Modifier{" "}
          </button>
        </form>
      </div>
    </>
  );
}
