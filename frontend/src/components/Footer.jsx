import "./Footer.css";

function Footer() {
  return (
    <footer
      className="footer -has-menus"
      style={{ backgroundColor: "#0c3944" }}
    >
      <div className="footer__inner">
        <div className="footer__section">
          <div className="footer__menus">
            <div className="footer__menu">
              <h2 className="footer__menu__title">Données</h2>
              <ul className="menu-footer">
                <li
                  id="menu-item-4049"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-4049 menu-item-depth-0"
                >
                  <a href="https://france.makesense.org/mentions-legales/">
                    Mentions légales
                  </a>
                </li>
              </ul>{" "}
            </div>
            <div className="footer__menu">
              <h2 className="footer__menu__title">Rejoindre l'équipe</h2>
              <ul className="menu-footer">
                <li
                  id="menu-item-4050"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4050 menu-item-depth-0"
                >
                  <a href="https://france.makesense.org/notre-projet/notre-tribu/">
                    En savoir plus sur nous
                  </a>
                </li>
              </ul>{" "}
            </div>
            <div className="footer__menu">
              <h2 className="footer__menu__title">Liens utiles</h2>
              <ul className="menu-footer">
                <li
                  id="menu-item-7627"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-7627 menu-item-depth-0"
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://france.makesense.org/wp-content/uploads/sites/6/2022/10/rapport-dimpact-2021-makesense-france.pdf"
                  >
                    Mesure d’impact 2021
                  </a>
                </li>
                <li
                  id="menu-item-6664"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6664 menu-item-depth-0"
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://drive.google.com/file/d/1g_jdBR3V70QXDHrwBfULa3TwTu6S4S6R/view?usp=sharing"
                  >
                    Rapport d’activité 2021
                  </a>
                </li>
                <li
                  id="menu-item-13319"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-13319 menu-item-depth-0"
                >
                  <a href="https://bit.ly/etude-transition-juste">
                    Rapport transition juste
                  </a>
                </li>
                <li
                  id="menu-item-11368"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11368 menu-item-depth-0"
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://commonssense.hop3team.com"
                  >
                    Catalogue de formation
                  </a>
                </li>
              </ul>{" "}
            </div>
          </div>
          <div className="footer__side">
            <a
              className="u-block"
              href="https://france.makesense.org"
              title="Go back to homepage"
            >
              <img
                width={300}
                src="https://france.makesense.org/wp-content/uploads/sites/6/2020/09/logo-makesense-light.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="footer__section">
          <ul className="social-links-size-large">
            <li>
              <a
                className="social-links__link"
                href="https://facebook.com/makesensefrance"
                target="_blank"
                title="Find us on Facebook"
                rel="noreferrer"
              >
                <svg width={35} viewBox="0 0 320 512">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                className="social-links__link"
                href="https://instagram.com/makesensefr"
                target="_blank"
                title="Find us on Instagram"
                rel="noreferrer"
              >
                <svg width={50} viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                className="social-links__link"
                href="https://twitter.com/makesense?lang=fr"
                target="_blank"
                title="Find us on Twitter"
                rel="noreferrer"
              >
                <svg width={50} viewBox="0 0 512 512">
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                className="social-links__link"
                href="https://www.youtube.com/channel/UC9AC_vydxKONO4EMQfsfMWQ"
                target="_blank"
                title="Find us on Youtube"
                rel="noreferrer"
              >
                <svg width={50} viewBox="0 0 576 512">
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                className="social-links__link"
                href="https://fr.linkedin.com/company/makesense"
                target="_blank"
                title="Find us on Linkedin"
                rel="noreferrer"
              >
                <svg width={50} viewBox="0 0 448 512">
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </a>
            </li>
          </ul>{" "}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
