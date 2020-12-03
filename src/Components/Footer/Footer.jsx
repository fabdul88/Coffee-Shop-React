import React from "react";
import "./footer.scss";
import LogoBeans from "../../assets/logobeans.png";
import Facebook from "../../assets/facebook.png";
import Yelp from "../../assets/yelp.png";
import Instagram from "../../assets/instagram.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <img
        className="footer-container__left-bean"
        src={LogoBeans}
        alt="coffee beans"
      />
      <div className="footer-container__sub-container">
        {/* Footer Address Container Section  */}
        <div className="footer-container__address-container">
          <h3 className="footer-container__address-container-heading">
            Address
          </h3>
          <p className="footer-container__address-container-location">
            503 Broadway Penthouse
          </p>
          <p className="footer-container__address-container-location">
            New York
          </p>
        </div>
        {/* Footer Hours Container  */}
        <div className="footer-container__hours-container">
          <h3 className="footer-container__hours-container-heading">Hours</h3>
          <p className="footer-container__hours-container-information">
            <span className="footer-container__hours-container-day">
              Monday - Friday:
            </span>
            9am - 7pm
          </p>
          <p className="footer-container__hours-container-information">
            <span className="footer-container__hours-container-day">
              Saturday - Sunday:
            </span>
            10am - 5pm
          </p>
        </div>
        {/* Footer Social Container Section  */}
        <div className="footer-container__footer-social">
          <img
            className="footer-container__right-bean"
            src={LogoBeans}
            alt="logobeans"
          />
          <h3 className="footer-container__footer-social-heading">Social</h3>
          <a
            className="footer-container__footer-social-link"
            href="http://www.facebook.com"
          >
            {/* Footer Social Icon Left */}
            <img
              className="footer-container__footer-social-link-icon"
              src={Facebook}
              alt="facebook"
            />
          </a>
          <a
            className="footer-container__footer-social-link"
            href="http://www.yelp.com"
          >
            {/* Footer Social Icon Center  */}
            <img
              className="footer-container__footer-social-link-icon"
              src={Yelp}
              alt="yelp"
            />
          </a>
          <a
            className="footer-container__footer-social-link"
            href="http://www.instagram.com"
          >
            {/* Footer Social Icon Right */}
            <img
              className="footer-container__footer-social-link-icon"
              src={Instagram}
              alt="instagram"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
