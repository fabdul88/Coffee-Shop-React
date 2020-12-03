import { v4 as uuidv4 } from "uuid";
import CoffeeBeans from "../../assets/coffeebeans.png";
import ColdBrew from "../../assets/coldbrew.png";
import InHouse from "../../assets/inhousebrew.png";

export const ProductData = [
  {
    id: uuidv4(),
    image: CoffeeBeans,
    description: "Coffee Beans",
    quantity: "pack of 3",
    price: 19,
  },
  {
    id: uuidv4(),

    image: ColdBrew,
    description: "Cold Brew",
    quantity: "1 can",
    price: 5,
  },
  {
    id: uuidv4(),
    image: InHouse,
    description: "In-house Brew",
    quantity: "1 cup",
    price: 3,
  },
];
