import React from "react";
import { MenuData } from "./MenuData";
import "./menucategory.scss";

export default function MenuCategory() {
  return (
    <div>
      {MenuData.map((menu) => {
        console.log(MenuData);
        return (
          <div key={menu.id} className="menu-category-container">
            <div className={menu.backgroundColor}>
              <h2
                id={menu.scrollId}
                className="menu-category-container__hot-drinks--heading menu-category-container__cold-drinks--heading menu-category-container__pastries--heading"
              >
                {menu.category}
              </h2>

              <h3 className="menu-category-container__hot-drinks--type menu-category-container__cold-drinks--type menu-category-container__pastries--type">
                {menu.typeOne}
              </h3>

              <p className="menu-category-container__hot-drinks--description menu-category-container__cold-drinks--description menu-category-container__pastries--description">
                {menu.descriptionOne}
              </p>

              <p className="menu-category-container__hot-drinks--price menu-category-container__cold-drinks--price menu-category-container__pastries--price">
                {/* using ToFixed() method for number, to add a zero after the price decimal. */}
                {menu.price.toFixed(2)}
              </p>

              <h3 className="menu-category-container__hot-drinks--type menu-category-container__cold-drinks--type menu-category-container__pastries--type">
                {menu.typeTwo}
              </h3>

              <p className="menu-category-container__hot-drinks--description menu-category-container__cold-drinks--description menu-category-container__pastries--description">
                {menu.descriptionTwo}
              </p>

              <p className="menu-category-container__hot-drinks--price menu-category-container__cold-drinks--price menu-category-container__pastries--price">
                {/* using ToFixed() method for number, to add a zero after the price decimal. */}
                {menu.priceTwo.toFixed(2)}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
