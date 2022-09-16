import React from "react";
import "../sass/abstracts/_variables.scss";
import "../sass/base/_base.scss";
import "../sass/components/_nav.scss";

function Header() {
  return (
    <>
      <header>
        <nav>
          <div className="title-container">
            <div className="logo-img__container">
              <img src="src/images/logo.png" className="logo-img" />
            </div>
            <h1>Premiere</h1>
          </div>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Featured</a>
            </li>
            <li>
              <a>Genres</a>
            </li>
            <li>
              <a>My Starred</a>
            </li>
          </ul>
          <div className="icon-container">
            <ion-icon name="search"></ion-icon>
            <ion-icon name="person-circle"></ion-icon>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
