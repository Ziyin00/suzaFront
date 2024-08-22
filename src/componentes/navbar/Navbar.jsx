import { Link } from "react-router-dom";
import Logo from "../../assets/img/SUZA PNG MO 1 (1).png";
import "./navbar.css";
import { useState } from "react";
const Navbar = () => {
  const [active, setActive] = useState("nav_menu");
  const [toggleIcon, setToggleIcon] = useState("burger-menu");
  const navToggle = () => {
    setActive((prev) =>
      prev === "nav_menu" ? "nav_menu nav_active" : "nav_menu"
    );
    setToggleIcon((prev) =>
      prev === "burger-menu" ? "burger-menu toggle" : "burger-menu"
    );
  };

  return (
    <>
      <div>
        <header>
          <picture>
            <img src={Logo} alt="" />
          </picture>

          <nav>
            <ul className={active}>
              <li className="nav_item">
                <Link to="/" className="links">
                  Home
                </Link>
                <Link to="/AboutUs" className="links">
                  About Us
                </Link>
                <Link to="/Varieties" className="links">
                  Varieties
                </Link>
                <Link to="/Gallery" className="links">
                  Gallery
                </Link>
                <Link to="/Reviews" className="links">
                  Reviews
                </Link>
                <Link to="/Contact" className="links">
                  Contact Us
                </Link>
              </li>
            </ul>

            <div onClick={navToggle} className={toggleIcon}>
              <div className="burger_class1"></div>
              <div className="burger_class2"></div>
              <div className="burger_class3"></div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;
