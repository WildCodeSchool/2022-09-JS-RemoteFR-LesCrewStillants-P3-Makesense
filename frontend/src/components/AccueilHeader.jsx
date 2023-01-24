import React from "react";
import "./AcceuilHeader.css";

export default function AccueilHeader() {
  return (
    <div className="header__main-content__inner">
      <a
        className="header__home-link"
        href="https://makesense.org"
        title="Go back to homepage"
      >
        <img
          src="https://makesense.org/wp-content/uploads/sites/4/2020/09/logo-makesense-dark.png"
          alt="makesense Global"
        />
      </a>

      <ul>
        <li>
          <a href="https://makesense.org/notre-histoire/">Notre histoire</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="https://makesense.org/notre-vision/">Notre vision</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="https://makesense.org/nos-missions/" aria-current="page">
            Nos missions
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="https://makesense.org/notre-tribu/">Notre équipe</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="https://makesense.org/manifeste/">Notre manifeste</a>
        </li>
      </ul>
    </div>
  );
}
