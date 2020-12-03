import React from "react";
import { Link } from "react-router-dom";
import "./hero.scss";
import HeroImage from "../../assets/coffeebeans-hero.png";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-container__sub-container">
        <div className="hero-container__hero-info-container">
          <h1 className="hero-container__title">Nitro Coffee</h1>

          <p className="hero-container__definition">
            Coffee is a brewed drink prepared from roasted coffee beans, the
            seeds of berries from certain Coffee species.
          </p>
          {/* Header "Shop Now" Link and Button   */}
          <div className="hero-container__shop-container">
            <Link className="hero-container__link" to="/menu">
              SHOP NOW
              <div className="hero-container__button-border"></div>
            </Link>
          </div>
        </div>
        {/* Header Hero-Image container */}
        <div className="hero-container__image-container">
          <img className="hero-container__image" src={HeroImage} alt="coffee" />
        </div>
      </div>
    </div>
  );
}
