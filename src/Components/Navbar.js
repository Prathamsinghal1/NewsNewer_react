import React, { Component } from "react";
import style from "./Navbar.module.css";
import { IoNewspaperOutline } from "react-icons/io5";

export class Navbar extends Component {
  render() {
    return (
      <nav className={`navbar navbar-expand-lg ${style.dark}`}>
        <div className="container-fluid">
          <p className={` ${style.icon}`}>
            <IoNewspaperOutline size={45} />
          </p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className={style.apply}>
                <a className={`nav-link ${style.colorWhite}`} href="/">
                  <b>Home</b>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
