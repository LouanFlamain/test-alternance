import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <nav
        className="navbar has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <button className="button is-info mt-auto mb-auto ml-3">
            Test-Entretien
          </button>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">Marques</a>

            <a
              className="navbar-item"
              href="https://www.needen.fr/gildan-gn180-heavyweight-t-53850/c23-blanc"
              target="_blank"
            >
              Gildan
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Catégorie</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">Homme</a>
                <a className="navbar-item">Femme</a>
                <a className="navbar-item">Enfant</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
