import React from "react";
import { Link as Scroll } from "react-scroll";
import "./menusubnav.scss";

export default function MenuSubNav() {
  return (
    <nav id="sub-nav" class="sub-navigation">
      <ul class="sub-navigation__menu">
        <li class="sub-navigation__menu-item">
          <span class="sub-navigation__left-border"></span>
          <Scroll class="sub-navigation__link" to="hot" smooth={true}>
            Hot Drinks
          </Scroll>
        </li>
        <li class="sub-navigation__menu-item">
          <span class="sub-navigation__left-border"></span>
          <Scroll class="sub-navigation__link" to="cold" smooth={true}>
            Cold Drinks
          </Scroll>
        </li>
        <li class="sub-navigation__menu-item">
          <span class="sub-navigation__left-border"></span>
          <Scroll class="sub-navigation__link" to="pastry" smooth={true}>
            Pastries
          </Scroll>
        </li>
      </ul>
    </nav>
  );
}
