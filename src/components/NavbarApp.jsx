import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/navbar.css";
import logo from "../assets/nerd.png";
import CartApp from "./CartApp";
const NavbarApp = () => {
  return (
    <nav className="navbar navbar-expand-lg menu-principal navbar-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img className="menu-principal__logo" src={logo} alt="logo" /> Shop
          Geek
        </Link>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/"
                style={({ isActive }) =>
                  isActive ? { textDecoration: "underline" } : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/about"
                style={({ isActive }) =>
                  isActive ? { textDecoration: "underline" } : undefined
                }
              >
                About
              </NavLink>
            </li>
          </ul>
          <div>
            <button className="btn btn-outline-light me-2">Login</button>
            <CartApp />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarApp;
