import React from "react";
import "./menucategory.scss";

export default function MenuCategory() {
  return (
    <div class="menu-category-container">
      <div class="menu-category-container__hot-drinks">
        <h2 id="hot" class="menu-category-container__hot-drinks--heading">
          Hot drinks
        </h2>

        <h3 class="menu-category-container__hot-drinks--type">In-house Brew</h3>

        <p class="menu-category-container__hot-drinks--description">
          Our in-house medium roast is a classic balance between sweet vanilla,
          nutty hazelnut, and a smooth low acidity to bring everything together.
        </p>

        <p class="menu-category-container__hot-drinks--price">$2.99</p>

        <h3 class="menu-category-container__hot-drinks--type">Espresso</h3>

        <p class="menu-category-container__hot-drinks--description">
          A balance between bold and smooth, powerful and sweet, our signature
          espresso blend is a complex flavor profile. It features strong notes
          of semi-sweet chocolate and caramel, with mild acidity and a bright
          floral finish.
        </p>

        <p class="menu-category-container__hot-drinks--price">$4.99</p>
      </div>

      <div class="menu-category-container__cold-drinks">
        <h2 id="cold" class="menu-category-container__cold-drinks--heading">
          Cold drinks
        </h2>

        <h3 class="menu-category-container__cold-drinks--type">Cold Brew</h3>

        <p class="menu-category-container__cold-drinks--description">
          Our bright and delicious coffee blend, brewed over ice to give you a
          cold coffee freshness with all the flavor of our amazing in-house
          coffee.
        </p>

        <p class="menu-category-container__cold-drinks--price">$3.99</p>

        <h3 class="menu-category-container__cold-drinks--type">
          Iced Chai Latte
        </h3>

        <p class="menu-category-container__cold-drinks--description">
          A creamy drink with a kick, this drink features spicy chai tea blended
          with your choice of milk and poured over ice.
        </p>

        <p class="menu-category-container__cold-drinks--price">$6.99</p>
      </div>

      <div class="menu-category-container__pastries">
        <h2 id="pastry" class="menu-category-container__pastries--heading">
          Pastries
        </h2>

        <h3 class="menu-category-container__pastries--type">
          Bacon Oatmeal Raisin Cookie
        </h3>

        <p class="menu-category-container__pastries--description">
          An infused bacon, sugar and egg mixture is folded into a perfect blend
          of oats, flour, raisins and cinnamon to create a soft and chewy
          textured cookie.
        </p>

        <p class="menu-category-container__pastries--price">$3.50</p>

        <h3 class="menu-category-container__pastries--type">
          Blueberry, Lemon and Thyme Muffin
        </h3>

        <p class="menu-category-container__pastries--description">
          Tart and sweet, this classic blueberry and lemon combination comes
          with an earthy twist.
        </p>

        <p class="menu-category-container__pastries--price">$2.50</p>
      </div>
    </div>
  );
}
