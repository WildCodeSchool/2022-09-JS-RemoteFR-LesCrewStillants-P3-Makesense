import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
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
                  <Link to="/decision">
                    Parcourir les décisons
                    <span className="menu-item-bean" aria-hidden="true" />
                  </Link>
                </li>
                <li
                  id="menu-item-2736"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2736 menu-item-depth-0"
                >
                  <Link to="/accueilsalarie">
                    Mes décisions
                    <span className="menu-item-bean" aria-hidden="true" />
                  </Link>
                </li>
                <li
                  id="menu-item-5574"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-5574 menu-item-depth-0"
                >
                  <a href="https://www.google.fr/">
                    Notifications
                    <span className="menu-item-bean" aria-hidden="true" />
                  </a>
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
