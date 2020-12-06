import React from "react";
import { Link } from "react-router-dom";
import "./process.scss";
import PlantingIcon from "../../assets/planting-icon.png";
import CoffeeBeansIcon from "../../assets/2-coffee-beans-icon.png";
import CoffeeCupIcon from "../../assets/coffee-cup-icon.png";
import ColdBrewBackground from "../../assets/coldbrewbackground.png";
import TiltedCan from "../../assets/tiltedcan.png";

export default function Process() {
  return (
    <div className="coffee-process-container">
      <div className="coffee-process-container__flex">
        <div className="coffee-process-container__sub-container">
          <h2 className="coffee-process-container__heading">We're Different</h2>
          <p className="coffee-process-container__description">
            We grow and roast our own beans. Every bean, every cup, every step
            of the way, we strive for excellence.
          </p>
          {/* coffee Process Icons container */}
          <div className="coffee-process-container__icon-container">
            <img
              className="coffee-process-container__left-icon"
              src={PlantingIcon}
              alt="Planting Icon"
            />
            <img
              className="coffee-process-container__center-icon"
              src={CoffeeBeansIcon}
              alt="Coffee Beans Icon"
            />
            <img
              className="coffee-process-container__right-icon"
              src={CoffeeCupIcon}
              alt="Coffee Cup"
            />
          </div>
          {/* coffee process "Learn More" button Section  */}

          <div className="coffee-process-container__learn-more-container">
            <Link className="coffee-process-container__link" to="/menu">
              LEARN MORE
              <div className="coffee-process-container__button-border"></div>
            </Link>
          </div>
        </div>

        {/* Background and Tilted can Section */}
        <div className="coffee-process-container__tilted-can-container">
          <img
            className="coffee-process-container__background-image coffee-process-container__background-image-animation"
            src={ColdBrewBackground}
            alt="Cold Brew Background"
          />
          <div className="coffee-process-container__border"></div>
          <img
            className="coffee-process-container__tilted-can "
            src={TiltedCan}
            alt="Tilted Can"
          />
        </div>
      </div>
    </div>
  );
}
