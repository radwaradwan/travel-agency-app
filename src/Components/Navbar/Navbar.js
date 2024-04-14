import React, { useState } from "react";
import "../../assets/css/MainStyle.css";
import styles from "./Navbar.module.css";
import logo from "../../assets/img/logo.svg";
import dollar from "../../assets/img/dollar.svg";
import England from "../../assets/img/England.svg";
import fav from "../../assets/img/fav.svg";
import Phone from "../../assets/img/Phone.svg";
import Photo from "../../assets/img/Photo.svg";
import ques from "../../assets/img/ques.svg";
import search from "../../assets/img/search.svg";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="w-100 d-flex align-items-md-center">
          <a className="navbar-brand me-5 ms-3 ms-md-5 order-2 order-md-0" href="##">
            <img src={logo} alt="logo" className={styles.logo} />
          </a>
          <button className="navbar-toggler order-1 order-md-0" type="button" onClick={toggleNavbar}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${showNavbar ? "show" : ""}`}>
            <form className={`mx-md-5 col-md-6 d-flex position-relative ${styles.search}`}>
              <input className="form-control me-2 flex-grow-1" type="search" />
              <img src={search} alt="search" className={styles.customSearch} />
            </form>
            <ul className={`navbar-nav  ${styles.navItems}`}>
              <li className="nav-item">
                <a className="nav-link" href="##">
                  <img src={England} alt="logo" className="me-2" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="##">
                  <img src={dollar} alt="logo" className="me-2" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="##">
                  <img src={ques} alt="logo" className="me-2" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="##">
                  <img src={fav} alt="logo" className="me-2" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="##">
                  <img src={Phone} alt="logo" className="me-2" />
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex order-3 order-md-0 ms-5 ms-md-0">
              <a className="nav-link" href="##">
                <img src={Photo} alt="logo" className="me-2" />
              </a>
              <div className={styles.profile}>
                <p className={styles.yourAccount}>Your Account</p>
                <p className={`lh-1 m-0 ${styles.accountName}`}>Anna Carinna</p>
                </div>
          </div>
        </div>
        
      </div>
    </nav>
  );
}

export default Navbar;
