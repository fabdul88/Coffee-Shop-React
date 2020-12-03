import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import BeanLogo from "../../assets/logobeans.png";

export default function Navbar() {
  return (
    <div className="nav-container">
      <nav className="nav-container__main-nav">
        <div className="nav-container__logo-container">
          <Link className="nav-container__logo-link" to="/">
            <img
              className="nav-container__main-logo"
              src={BeanLogo}
              alt="coffee"
            />
          </Link>

          <h2 className="nav-container__nav-name">nitro</h2>
        </div>

        <ul className="nav-container__menu">
          <li className="nav-container__menu-item">
            <Link className="nav-container__menu-item-link" to="./">
              ABOUT
            </Link>
          </li>
          <li className="nav-container__menu-item nav-container__center-menu">
            <Link className="nav-container__menu-item-link" to="/menu">
              MENU
            </Link>
          </li>
          <li className="nav-container__menu-item">
            <Link
              className="nav-container__menu-item-active nav-container__menu-item-link"
              to="/menu"
            >
              SHOP NOW
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
