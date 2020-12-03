import { v4 as uuidv4 } from "uuid";

export const MenuData = [
  {
    id: uuidv4(),
    scrollId: "hot",
    category: "Hot Drinks",
    typeOne: "In-house Brew",
    descriptionOne:
      "Our in-house medium roast is a classic balance between sweet vanilla, nutty hazelnut, and a smooth low acidity to bring everything together.",
    price: 2.99,
    typeTwo: "Espresso",
    descriptionTwo:
      "A balance between bold and smooth, powerful and sweet, our signature espresso blend is a complex flavor profile. It features strong notes of semi-sweet chocolate and caramel, with mild acidity and a bright floral finish.",
    priceTwo: 4.99,
    backgroundColor: "menu-category-container__hot-drinks",
  },
  {
    id: uuidv4(),
    scrollId: "cold",
    category: "Cold Drinks",
    typeOne: "Cold Brew",
    descriptionOne:
      "Our bright and delicious coffee blend, brewed over ice to give you a cold coffee freshness with all the flavor of our amazing in-house coffee.",
    price: 3.99,
    typeTwo: "Iced Chai Latte",
    descriptionTwo:
      "A creamy drink with a kick, this drink features spicy chai tea blended with your choice of milk and poured over ice.",
    priceTwo: 6.99,
    backgroundColor: "menu-category-container__cold-drinks",
  },
  {
    id: uuidv4(),
    scrollId: "pastry",
    category: "Pastries",
    typeOne: "Bacon Oatmeal Raisin Cookie",
    descriptionOne:
      "An infused bacon, sugar and egg mixture is folded into a perfect blend of oats, flour, raisins and cinnamon to create a soft and chewy textured cookie.",
    price: 3.5,
    typeTwo: "Blueberry, Lemon and Thyme Muffin",
    descriptionTwo:
      "Tart and sweet, this classic blueberry and lemon combination comes with an earthy twist.",
    priceTwo: 2.5,
    backgroundColor: "menu-category-container__pastries",
  },
];
