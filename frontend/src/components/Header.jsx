import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { AuthContext } from "../Context/AuthContext";

function Header() {
  const { userRole, handleUserAuth } = useContext(AuthContext);
  useEffect(() => {
    handleUserAuth();
  }, [userRole]);

  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/");
    localStorage.clear();
  };

  const adminLink =
    userRole === "admin" ? (
      <Link to="/accueil-admin">
        <span className="smallDarkBean"> </span>
        Espace Admin
      </Link>
    ) : null;

  return (
    <header className="header -no-topbar-xs">
      <div className="header__main-content">
        <div className="header__main-content__inner">
          <a
            className="header__home-link"
            href="https://france.makesense.org"
            title="Go back to homepage"
          >
            <img
              className="header"
              src="https://france.makesense.org/wp-content/uploads/sites/6/2020/09/logo-makesense-dark.png"
              alt="makesense"
            />
          </a>
          <nav className="header__main-content__nav">
            <div className="header__main-content__nav__menu-wrapper">
              <ul className="menu-header" style={{ color: "#196c84" }}>
                <li
                  id="menu-item-1560"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1560 menu-item-depth-0"
                >
                  <Link to="/decisions">
                    Nouvelle décision
                    <span className="menu-item-bean" aria-hidden="true" />
                  </Link>
                </li>
                <li
                  id="menu-item-2736"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2736 menu-item-depth-0"
                >
                  <span className="smallDarkBean"> </span>
                  <Link to="/accueil-salarie">
                    Décisions
                    <span className="menu-item-bean" aria-hidden="true" />
                  </Link>
                </li>
                <li
                  id="menu-item-2736"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2736 menu-item-depth-0"
                >
                  {adminLink}
                </li>
                <li
                  id="menu-item-2736"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-5574 menu-item-depth-0"
                >
                  <span className="smallDarkBean"> </span>
                  <Link to="/profil">
                    Mon Profil
                    <span className="menu-item-bean" aria-hidden="true" />
                  </Link>
                </li>
                <li
                  id="menu-item-2736"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2736 menu-item-depth-0"
                >
                  <span className="smallDarkBean"> </span>
                  <Link to="/" onClick={handleLogOut}>
                    Déconnexion
                    <span className="menu-item-bean" aria-hidden="true" />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
