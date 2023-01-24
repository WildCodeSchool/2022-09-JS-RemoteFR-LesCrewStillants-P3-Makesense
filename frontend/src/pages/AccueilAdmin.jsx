import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import AdminRegister from "@components/AdminRegister";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import "../components/Admin.css";

function AccueilAdmin() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const users = [
    {
      id: 1,
      name: "Alex",
    },
    {
      id: 2,
      name: "Sophie",
    },
    {
      id: 3,
      name: "quentin",
    },
    {
      id: 4,
      name: "seb",
    },
    {
      id: 5,
      name: "malik",
    },
    {
      id: 6,
      name: "vivien",
    },
    {
      id: 7,
      name: "lana",
    },
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const results =
      event.target.value === ""
        ? []
        : users.filter((user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
    setSearchResults(results);
  };

  const numberOfPages =
    searchResults.length > 0
      ? Math.ceil(searchResults.length / itemsPerPage)
      : Math.ceil(users.length / itemsPerPage);

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <Header />
      <div className="AccueilAdmin">
        <div className="StatsAdmin">
          <h1>Décisions Prises</h1>
          <p>
            Ce mois-ci
            <span> Le mois dernier </span>
          </p>
          <p>
            <span className="chiffreDecision">12</span>
            <span className="chiffreDecision">5</span>
          </p>
        </div>
        <div className="ContainerAdmin">
          <button type="button" onClick={handleOpenModal} className="green">
            <h3> Ajouter un utilisateur </h3>
          </button>
          {showModal && (
            <AdminRegister showModal={showModal} setShowModal={setShowModal} />
          )}
          <input
            type="text"
            placeholder="Rechercher un utilisateur"
            onChange={handleSearch}
          />
          {searchResults.length > 0
            ? searchResults
                .slice(
                  (currentPage - 1) * itemsPerPage,
                  currentPage * itemsPerPage
                )
                .map((user) => (
                  <div key={user.id}>
                    <h3>
                      {user.name}
                      <button type="button" className="greenHover">
                        Modifier
                      </button>
                      <button type="button" className="pinkHover">
                        Supprimer
                      </button>
                    </h3>
                  </div>
                ))
            : users
                .slice(
                  (currentPage - 1) * itemsPerPage,
                  currentPage * itemsPerPage
                )
                .map((user) => (
                  <div className="Users" key={user.id}>
                    <h3>
                      {user.name}
                      <button type="button" className="greenHover">
                        Modifier
                      </button>
                      <button type="button" className="pinkHover">
                        Supprimer
                      </button>
                    </h3>
                  </div>
                ))}
          <div className="Pagination">
            <button
              type="button"
              className="square"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <FontAwesomeIcon
                className="ArrowLeft"
                style={{
                  color: "grey",
                  marginInline: "1rem",
                  paddingBlock: "1rem",
                }}
                icon={faArrowLeft}
              />
            </button>
            {Array.from({ length: numberOfPages }, (_, i) => (
              <span
                key={i}
                className={`PageNumber ${
                  currentPage === i + 1 ? "active" : ""
                }`}
                onClick={() => setCurrentPage(i + 1)}
                role="button"
                tabIndex={0}
                aria-hidden="true"
              >
                <button type="button" className="square">
                  {" "}
                  {i + 1}{" "}
                </button>
              </span>
            ))}
            <button
              type="button"
              className="square"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === numberOfPages}
            >
              <FontAwesomeIcon
                className="fab fa-react fa-1x"
                style={{
                  color: "grey",
                  marginInline: "1rem",
                  paddingBlock: "1rem",
                }}
                icon={faArrowRight}
              />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AccueilAdmin;
