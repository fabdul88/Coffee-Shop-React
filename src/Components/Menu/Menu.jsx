import React from "react";
import MenuCategory from "../MenuCategory/MenuCategory";
import MenuHero from "../MenuHero/MenuHero";
import MenuSubNav from "../MenuSubNav/MenuSubNav";
// import MenuCategory from "../MenuCategory/MenuCategory";

export default function Menu() {
  return (
    <div>
      <MenuHero />
      <MenuSubNav />
      <MenuCategory />
    </div>
  );
}
