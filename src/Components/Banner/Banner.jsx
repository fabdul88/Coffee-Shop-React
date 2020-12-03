import React from "react";
import "./banner.scss";

export default function Banner() {
  return (
    <div className="banner-container">
      <p className="banner-container__information banner-container__animation">
        Get 20% off your first order with code:
        <span className="banner-container__discount-code">First Nitro</span>
      </p>
    </div>
  );
}
