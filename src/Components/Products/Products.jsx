import React from "react";
import { Link } from "react-router-dom";
import { ProductData } from "./ProductData";
import "./products.scss";

export default function Products() {
  return (
    <div className="products-container">
      <div className="products-container__title-container">
        <h2 className="products-container__title">Our Products</h2>
      </div>

      <div className="products-container__cards-container">
        {ProductData.map((product) => {
          return (
            <div key={product.id} className="products-container__card">
              <img
                className="products-container__card-image"
                src={product.image}
                alt="coffee"
              />
              <div className="products-container__information">
                <div className="products-container__sub-information">
                  <h3 className="products-container__card-description">
                    {product.description}
                  </h3>
                  <p className="products-container__quantity">
                    {product.quantity}
                  </p>
                </div>
                <p className="products-container__card-price">
                  ${product.price}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="products-container__button-main">
        <div className="products-container__sub-container">
          <Link className="products-container__button-link" to="/menu">
            VIEW ALL
            <div className="products-container__button-border"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
