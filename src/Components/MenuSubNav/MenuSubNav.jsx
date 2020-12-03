import React from "react";
import { Link as Scroll } from "react-scroll";
import "./menusubnav.scss";

export default function MenuSubNav() {
  return (
    <nav id="sub-nav" className="sub-navigation">
      <ul className="sub-navigation__menu">
        <li className="sub-navigation__menu-item">
          <span className="sub-navigation__left-border"></span>
          <Scroll className="sub-navigation__link" to="hot" smooth={true}>
            Hot Drinks
          </Scroll>
        </li>
        <li className="sub-navigation__menu-item">
          <span className="sub-navigation__left-border"></span>
          <Scroll className="sub-navigation__link" to="cold" smooth={true}>
            Cold Drinks
          </Scroll>
        </li>
        <li className="sub-navigation__menu-item">
          <span className="sub-navigation__left-border"></span>
          <Scroll className="sub-navigation__link" to="pastry" smooth={true}>
            Pastries
          </Scroll>
        </li>
      </ul>
    </nav>
  );
}
