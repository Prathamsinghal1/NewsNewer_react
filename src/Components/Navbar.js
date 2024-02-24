import React, { Component } from "react";
import style from "./Navbar.module.css";
import { IoNewspaperOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];
  countries = [
    {
      country: "India",
      code: "in",
    },
    {
      country: "Netherlands",
      code: "nl",
    },
    {
      country: "South Africa",
      code: "za",
    },
    {
      country: "Australia",
      code: "au",
    },
    {
      country: "Hong Kong",
      code: "hk",
    },
    {
      country: "New Zealand",
      code: "nz",
    },
    {
      country: "South Korea",
      code: "kr",
    },
    {
      country: "Switzerland",
      code: "ch",
    },
    {
      country: "Brazil",
      code: "br",
    },
    {
      country: "Taiwan",
      code: "tw",
    },
    {
      country: "Ireland",
      code: "ie",
    },
    {
      country: "Thailand",
      code: "th",
    },
    {
      country: "Canada",
      code: "ca",
    },
    {
      country: "Israel",
      code: "il",
    },
    {
      country: "Portugal",
      code: "pt",
    },
    {
      country: "Turkey",
      code: "tr",
    },
    {
      country: "China",
      code: "cn",
    },
    {
      country: "Italy",
      code: "it",
    },
    {
      country: "UAE",
      code: "ae",
    },
    {
      country: "Colombia",
      code: "co",
    },
    {
      country: "Japan",
      code: "jp",
    },
    {
      country: "Russia",
      code: "ru",
    },
    {
      country: "Ukraine",
      code: "ua",
    },
    {
      country: "Saudi Arabia",
      code: "sa",
    },
    {
      country: "United Kingdom",
      code: "gb",
    },
    {
      country: "United States",
      code: "us",
    },
    {
      country: "Malaysia",
      code: "my",
    },
    {
      country: "Singapore",
      code: "sg",
    },
    {
      country: "France",
      code: "fr",
    },
    {
      country: "Germany",
      code: "de",
    },
  ];

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
              <li className={style.apply}>
                <a className={`nav-link ${style.colorWhite}`} href="/about">
                  <b>About</b>
                </a>
              </li>
              {this.categories.map((name) => {
                return (
                  <li>
                    <Link
                      to={`/${name}`}
                      className={`nav-link ${style.colorWhite}`}
                    >
                      {name.charAt(0).toUpperCase() + name.slice(1)}
                    </Link>
                  </li>
                );
              })}
              <li className={`${style.righter} nav-item dropdown`}>
                  <a className={`nav-link dropdown-toggle ${style.colorWhite}`} href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <b>Country</b>
                  </a>
                  <ul className={`dropdown-menu ${style.dropdown}`}>
                    {this.countries.map((name)=>{
                      return <li><button onClick={(event)=>this.props.handleOnClick(event,name.code)} className={` ${style.element} dropdown-item`} >{name.country}</button></li>
                    })}
                  </ul>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
