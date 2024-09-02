import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/img/SUZA PNG MO 1 (1).png";
import "./navbar.css";
import { useState } from "react";
const Navbar = () => {
  // const [isActive, setIsActive] = useState(true);
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
  const { pathname } = useLocation();
  const subpage = pathname.split("/")?.[1];
  // console.log(subpage);

  const Linkness = (type = null) => {
    let classes = " links";
    if (type === subpage) {
      classes += " active";
    } else {
      classes += " ";
    }
    return classes;
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
                <Link to="/" className={Linkness("")}>
                  Home
                </Link>
                <Link to="/AboutUs" className={Linkness("AboutUs")}>
                  About Us
                </Link>
                <Link to="/Varieties" className={Linkness("Varieties")}>
                  Varieties
                </Link>
                <Link to="/Gallery" className={Linkness("Gallery")}>
                  Gallery
                </Link>
                <Link to="/Reviews" className={Linkness("Reviews")}>
                  Reviews
                </Link>
                <Link to="/Contact" className={Linkness("Contact")}>
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
