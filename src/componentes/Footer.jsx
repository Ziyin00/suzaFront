import React from "react";
import { Link } from "react-router-dom";

import { FaPinterest, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

import { FaMobileScreenButton, FaSquareInstagram } from "react-icons/fa6";
import { BiSolidEnvelope } from "react-icons/bi";

import Logo from "../assets/img/SUZA PNG MO 1 (1).png";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="allfooter">
          <div className="footer4">
            <div className="adress">
              <FaMapMarkerAlt />
              <p>Addis Ababa ,Ethiopia</p>
            </div>
            <div className="adress">
              <BiSolidEnvelope />
              <p>Suzacoffee@Coffee.Com</p>
            </div>
            <div className="adress">
              <FaMobileScreenButton />
              <p>+1-222-34-SUZA</p>
            </div>
          </div>
          <div className="footer">
            <div className="footer1">
              <img src={Logo} alt="" />
              <p>Suza Coffee Export</p>
              <div>
                <FaPinterest className="social" />
                <FaLinkedin className="social" />
                <FaSquareInstagram className="social" />
              </div>
            </div>

            <div className="footer2">
              <ul>
                <li>
                  <h3>Important links</h3>
                  <Link className="link">Home</Link>
                  <Link className="link">About</Link>
                  <Link className="link">Our Story</Link>
                  <Link className="link">Menu</Link>
                  <Link className="link">Locations</Link>
                  <Link className="link">Support</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer3">
            <p>Developed By Ziyin Ab.</p>
            <p>&copy; Copyright 2024 Suza Coffee All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
