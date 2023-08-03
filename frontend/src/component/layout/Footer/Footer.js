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

        <p>Copyrights 2023 &copy; mesudhakar</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/savage_prince_04/?igshid=ZmZhODViOGI%3D">Instagram</a>
        <a href="https://www.youtube.com/watch?v=68PeJytepWk">Youtube</a>
        <a href="https://www.facebook.com/photo/?fbid=107942827353085&set=a.107939164020118">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
