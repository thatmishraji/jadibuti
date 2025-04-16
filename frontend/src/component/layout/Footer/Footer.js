import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2024 &copy; Mishrajii</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com" target="_blank">
          Instagram
        </a>
        <a href="http://youtube.com" target="_blank">
          Youtube
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          Facebook
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B919725936432&text&type=phone_number&app_absent=0"
          target="_blank"
        >
          What's App
        </a>
      </div>
    </footer>
  );
};

export default Footer;
