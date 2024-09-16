import Navbar from "../navbar/Navbar";

import "./home.css";
import AboutBackground from "../../assets/img/Mask.png";

import VarietiesBackground from "../../assets/img/Maskdown.png";
import UpperImage from "../../assets/img/Maskupper.png";
import DownImage from "../../assets/img/Maskdown.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import About from "../About";
import Varieties from "../Varieties";
import Gallery from "../Gallery";
import Reviews from "../Reviews";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      <div className="main">
        <Navbar />
        <h1 className="firstH">Welcome To</h1>
        <h2 id="secondH">Suza Coffee Export</h2>
        <p>
          Today's good mood is sponsored by coffee search for your coffee now
        </p>

        <button>Explore</button>
      </div>

      <About />
      <div className="buttons">
        <button className="prev">
          <FaArrowRight />
        </button>
        <button className="next">
          <FaArrowLeft />
        </button>
      </div>
      <div className="beforeVarieties">
        <img src={VarietiesBackground} alt="" />
      </div>

      <Varieties />
      <div className="transvarieties">
        <img className="firstimg" src={AboutBackground} alt="" />
        <img className="secondimg" src={DownImage} alt="" />
      </div>

      <Gallery />
      <div className="transgallery">
        <img className="secondimg" src={UpperImage} alt="" />
      </div>

      <Reviews />
      <div>
        <img src={DownImage} alt="" className="transcostum" />
      </div>
      <Footer />
    </>
  );
};

export default Home;
