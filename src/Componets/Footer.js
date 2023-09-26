import React, { Component } from "react";
import { BiLogoVk } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-line"></div>
        <span className="logo">VINERA</span>
        <a className="delivery">Условия доставки и возврата товара</a>
        <div className="footer-icon">
          <BiLogoVk className="vk-icon" />
          <FaInstagram className="instagram-icon" />
        </div>
      </footer>
    );
  }
}

export default Footer;
