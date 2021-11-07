import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const NavBar = () => {
  useEffect(() => {
    let sidenav = document.querySelector("#mobile-demo");
    M.Sidenav.init(sidenav, {});
  });

  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">
            <p className="remove-margin">
              <i className="material-icons">camera_alt</i>ANPR
            </p>
          </a>
          <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Home</a>
            </li>
            <li>
              <a href="badges.html">Github</a>
            </li>
            <li>
              <a href="collapsible.html">Google Colab</a>
            </li>
            <li>
              <a href="mobile.html">Mobile</a>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <a href="sass.html">Home</a>
        </li>
        <li>
          <a href="badges.html">Github</a>
        </li>
        <li>
          <a href="collapsible.html">Google Colab</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
