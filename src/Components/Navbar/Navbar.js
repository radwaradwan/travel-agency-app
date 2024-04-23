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
import dashboard from '../../assets/img/dashboard.svg'
import home from '../../assets/img/home.svg'
import { NavLink } from "react-router-dom";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="w-100 d-md-flex align-items-md-center">
          <a className="navbar-brand me-5 ms-md-5 order-1" href="##">
            <img src={logo} alt="logo" className={styles.logo} />
          </a>
          <button className={`navbar-toggler ${styles.navToggler}`}type="button" onClick={toggleNavbar}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse order-3 ${showNavbar ? "show" : ""}`}>
            
            <ul className={`navbar-nav d-flex flex-row my-3  ${styles.navItems}`}>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  <img src={home} alt="logo" className={`me-2 ${styles.home} `} />
                </NavLink>
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
              <li className="nav-item">
                <a className="nav-link" href="##">
                  <img src={England} alt="logo" className="me-2" />
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Dashboard">
                  <img src={dashboard} alt="logo" className={`me-2 ${styles.dashboard} `} />
                </NavLink>
              </li>
              <li className="nav-item d-flex align-items-center">
                <a className="nav-link" href="##">
                  <img src={Photo} alt="logo" className="me-md-2 " />
                </a>
                <div className={styles.profile}>
                  <p className={styles.yourAccount}>Your Account</p>
                  <p className={` m-0 ${styles.accountName}`}>Anna Carinna</p>
                </div>
              </li>
            </ul>
          </div>
          <form className={`me-md-5 ms-md-4 col-md-4 d-flex order-2 position-relative ${styles.search}`}>
              <input className="form-control me-2 flex-grow-1" type="search" />
              <img src={search} alt="search" className={styles.customSearch} />
          </form>
        </div>
        
      </div>
    </nav>
  );
}

export default Navbar;
