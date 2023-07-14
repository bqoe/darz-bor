import React, { useEffect } from "react";
import "../styles/header.scss";

const Header = () => {
  useEffect(() => {
    let headerElement = document.querySelector("header");
    document.addEventListener("scroll", () => {
        let scroll = document.documentElement.scrollTop;
        if (scroll > 1) {
            headerElement.classList.add('background-header');
        } else {
            headerElement.classList.remove('background-header');
        }
    })
  })
  return (
    <>
      <header
        className="header-area header-sticky"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        <nav className="main-nav">
          <ul className="nav">
            <li><a href="index.html" className="active mb-3">Strona Główna</a></li>
            <li><a href="./historia.html">Historia</a></li>
            <li><a href="./prawo.html">Prawo</a></li>
            <li><a href="./kontakt.html">Kontakt</a></li>
          </ul>
        </nav>

        <div className="btn-group dropdown">
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></button>
            <ul className="dropdown-menu">
              <li><a className='' href="">Strona Główna</a></li>
              <li><a className='' href="">Historia</a></li>
              <li><a className='' href="">Prawo</a></li>
              <li><a className='' href="">Kontakt</a></li>
            </ul>
        </div>


      </header>
    </>
  )
}

export default Header;