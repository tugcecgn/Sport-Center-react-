import React from "react";
import "./Part4.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <img
          src="./src/assets/images/logo.png"
          alt="logo"
          className="logo-img"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
          illum esse dignissimos voluptate neque molestiae quae impedit nihil
          minima similique consequatur, aut facilis perspiciatis magnam quos
          dolore labore architecto animi?
        </p>
        <div className="links">
          <div className="information">
            <h4>Information</h4>
            <a href="#">About us</a>
            <a href="#">classes</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>
          <div className="information">
            <h4>Helpfull Links</h4>
            <a href="#">Services</a>
            <a href="#">Supports</a>
            <a href="#">Terms & Candition</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
