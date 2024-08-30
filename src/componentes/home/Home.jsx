import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import { useCallback, useEffect, useRef } from "react";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";

import "./home.css";
import AboutBackground from "../../assets/img/Mask.png";
import CardsImage1 from "../../assets/img/Group 10.png";
import CardsImage2 from "../../assets/img/Group 13.png";
import CardsImage3 from "../../assets/img/Group14.png";
import CardsImage4 from "../../assets/img/Group 15.png";
import VarietiesBackground from "../../assets/img/Maskdown.png";
import UpperImage from "../../assets/img/Maskupper.png";
import DownImage from "../../assets/img/Maskdown.png";
import {
  FaArrowRight,
  FaArrowLeft,
  // FaRegStar,
  FaStar, //filled star
  FaPinterest,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { FaMobileScreenButton, FaSquareInstagram } from "react-icons/fa6";
import { BiSolidEnvelope } from "react-icons/bi";
import { useState } from "react";
import Vector from "../../assets/img/Vector.png";
import Blackman from "../../assets/img/blackman.png";
import Women from "../../assets/img/women.png";
import Glassman from "../../assets/img/glassman.png";
import Logo from "../../assets/img/SUZA PNG MO 1 (1).png";
import frame56 from "../../assets/img/Frame56.png";
import frame57 from "../../assets/img/Frame57.png";
import frame58 from "../../assets/img/Frame58.png";
import frame59 from "../../assets/img/Frame59.png";
import frame60 from "../../assets/img/Frame60.png";

const Home = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const items = [
    {
      id: 1,
      src: frame56,
      title: "preparing for packaging",
      description:
        "At our cafe, we take pride in providing our customers with the best coffee around. Our carefull take pride in providing our customers with the best coffee around. Our carefull",
    },
    {
      id: 2,
      src: frame57,
      title: "preparing for packaging",
      description:
        "At our cafe, we take pride in providing our customers with the best coffee around. Our carefull take pride in providing our customers with the best coffee around. Our carefull",
    },
    {
      id: 3,
      src: frame58,
      title: "preparing for packaging",
      description:
        "At our cafe, we take pride in providing our customers with the best coffee around. Our carefull take pride in providing our customers with the best coffee around. Our carefull",
    },
    {
      id: 4,
      src: frame59,
      title: "preparing for packaging",
      description:
        "At our cafe, we take pride in providing our customers with the best coffee around. Our carefull take pride in providing our customers with the best coffee around. Our carefull",
    },
    {
      id: 5,
      src: frame60,
      title: "preparing for packaging",
      description:
        "At our cafe, we take pride in providing our customers with the best coffee around. Our carefull take pride in providing our customers with the best coffee around. Our carefull",
    },
  ];

  const timeAutoNext = 2000;
  const timeRunning = 1000;
  const autoSlideTimeout = useRef();

  const showSlider = useCallback(
    (direction) => {
      if (isAnimating) return;

      setIsAnimating(true);
      if (direction === "next") {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      } else {
        setCurrentIndex(
          (prevIndex) => (prevIndex - 1 + items.length) % items.length
        );
      }

      setTimeout(() => setIsAnimating(false), timeRunning);
    },
    [isAnimating, items.length]
  );

  useEffect(() => {
    autoSlideTimeout.current = setTimeout(() => {
      showSlider("next");
    }, timeAutoNext);

    return () => clearTimeout(autoSlideTimeout.current);
  }, [currentIndex, showSlider]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      const carouselItems = carousel.getElementsByClassName("item");
      const itemsArray = Array.from(carouselItems);

      itemsArray.forEach((item, index) => {
        // item.style.left = `${50 + (index - currentIndex) * 13}%`;
        const leftPosition = 35 + (index - 1 - currentIndex) * -20;
        if (leftPosition >= 35) {
          item.style.left = `${leftPosition}%`;
        } else {
          item.style.left = "35%";
        }
      });
    }
  }, [currentIndex]);

  const [active, setActive1] = useState("0");
  const handleSlideChange = (swiper) => {
    setActive1(swiper.activeIndex);
  };

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
      <div className="about">
        <div>
          <img src={AboutBackground} alt="" />
          <h1 className="aboutH">About Us</h1>
        </div>

        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mainstory"
        >
          <SwiperSlide>
            <div className="story1">
              <div className="story">
                <h1>Our Story</h1>
                <p>
                  Suza is an online coffee store that offers the widest
                  selection of specialty coffees and teas from around the world.
                  From medium-dark roast single origin to flavored espresso
                  beans, they offer a variety of ethically sourced products to
                  tantalize any customer’s palate. For those looking for unique
                  brewing equipment, Eliza also carries a full range of quality
                  espresso makers, grinders, brewers, French presses and more.
                  On top of all that, their baristas are highly trained
                  professionals who know exactly how to make the...
                </p>
                <span>
                  <Link to="Story" className="span">
                    More
                  </Link>
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="story2">
              <div className="story">
                <h1>Our Story</h1>
                <p>
                  Suza is an online coffee store that offers the widest
                  selection of specialty coffees and teas from around the world.
                  From medium-dark roast single origin to flavored espresso
                  beans, they offer a variety of ethically sourced products to
                  tantalize any customer’s palate. For those looking for unique
                  brewing equipment, Eliza also carries a full range of quality
                  espresso makers, grinders, brewers, French presses and more.
                  On top of all that, their baristas are highly trained
                  professionals who know exactly how to make the...
                </p>
                <span>
                  <Link to="Story" className="span">
                    More
                  </Link>
                </span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="story3">
              <div className="story">
                <h1>Factory</h1>
                <p>
                  Suza is an online coffee store that offers the widest
                  selection of specialty coffees and teas from around the world.
                  From medium-dark roast single origin to flavored espresso
                  beans, they offer a variety of ethically sourced products to
                  tantalize any customer’s palate. For those looking for unique
                  brewing equipment, Eliza also carries a full range of quality
                  espresso makers, grinders, brewers, French presses and more.
                  On top of all that, their baristas are highly trained
                  professionals who know exactly how to make the...
                </p>
                <span>
                  <Link to="Story" className="span">
                    More
                  </Link>
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
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
      <div className="varieties">
        <h1> Coffee Varieties</h1>
        <div className="allcards">
          <div className="cards">
            <div className="row">
              <img src={CardsImage1} alt="" />
              <p>
                At our cafe, we take pride in providing our customers with the
                best coffee around. Our carefull take pride in providing our
                customers with the best coffee around. Our..
              </p>
            </div>

            <p className="dark">
              <span>Arabica</span> Dark Roast
            </p>
            <span className="more">More</span>
          </div>

          <div className="cards">
            <div className="row">
              <img src={CardsImage2} alt="" />
              <p>
                At our cafe, we take pride in providing our customers with the
                best coffee around. Our carefull take pride in providing our
                customers with the best coffee around. Our..
              </p>
            </div>
            <p className="dark">
              <span>House Blend</span> Dark Roast
            </p>
            <span className="more">More</span>
          </div>
          <div className="cards">
            <div className="row">
              <img src={CardsImage3} alt="" />
              <p>
                At our cafe, we take pride in providing our customers with the
                best coffee around. Our carefull take pride in providing our
                customers with the best coffee around. Our..
              </p>
            </div>
            <p className="dark">
              <span>Robusta</span> Dark Roast
            </p>
            <span className="more">More</span>
          </div>
          <div className="cards">
            <div className="row">
              <img src={CardsImage4} alt="" />
              <p>
                At our cafe, we take pride in providing our customers with the
                best coffee around. Our carefull take pride in providing our
                customers with the best coffee around. Our..
              </p>
            </div>
            <p className="dark">
              <span>Indian</span> Dark Roast
            </p>
            <span className="more">More</span>
          </div>
        </div>
      </div>
      <div className="transvarieties">
        <img className="firstimg" src={AboutBackground} alt="" />
        <img className="secondimg" src={DownImage} alt="" />
      </div>
      <div className="gallery">
        <h1>Gallery</h1>
        <div className="container">
          <div className={`carousel ${isAnimating ? "animating" : ""}`}>
            <div className="list">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`item ${index === currentIndex ? "active" : ""}`}
                  style={{
                    backgroundImage: `url(${item.src})`,
                    zIndex: index === currentIndex ? 1 : 0,
                  }}
                >
                  <div className="content">
                    <div className="title">{item.title}</div>
                    <div className="des">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="thumbnail" ref={carouselRef}>
              {items.map((item, index) => (
                <div
                  key={index}
                  className="item"
                  style={{
                    backgroundImage: `url(${item.src})`,
                  }}
                >
                  <div className="content">
                    <div className="title">Name Slider</div>
                    <div className="description">Description</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="btn">
          <button>See More</button>
        </div>
        <div className="arrows">
          <button
            className="prev"
            onClick={() => {
              showSlider("prev");
            }}
            disabled={isAnimating}
          >
            <FaArrowRight />
          </button>
          <button
            className="next"
            onClick={() => {
              showSlider("next");
            }}
            disabled={isAnimating}
          >
            <FaArrowLeft />
          </button>
        </div>
      </div>
      <div className="transgallery">
        <img className="secondimg" src={UpperImage} alt="" />
      </div>

      <div className="customerReview">
        <h1>Customer Review</h1>

        <Swiper
          onSlideChange={handleSlideChange}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={10}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwipe swipeer"
        >
          <div className="allcustom">
            <SwiperSlide className="newCustomer" style={{ marginTop: "30%" }}>
              New Customer
            </SwiperSlide>
            <SwiperSlide
              className={active === 0 ? "swipeer1Active" : "swipeer1"}
            >
              <div className="customer1">
                <div className="vectors">
                  <img src={Vector} alt="" />
                  <img src={Vector} alt="" />
                </div>
                <img className="profileImage" src={Blackman} alt="" />
                <h2>Tyler Student</h2>
                <div className="icons">
                  <FaStar className="icon1" />
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                </div>
                <p>
                  I love spending my downtime in a cozy coffee shop, surrounded
                  by the sweet aroma of freshly brewed drinks and pastries.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className={active === 1 ? "swipeer2Active" : "swipeer2"}
            >
              <div className="customer2">
                <div className="vectors">
                  <img src={Vector} alt="" />
                  <img src={Vector} alt="" />
                </div>
                <img className="profileImage" src={Glassman} alt="" />
                <h2>Tyler Student</h2>
                <div className="icons">
                  <FaStar className="icon1" />
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                </div>
                <p>
                  I love spending my downtime in a cozy coffee shop, surrounded
                  by the sweet aroma of freshly brewed drinks and pastries.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className={active === 2 ? "swipeer3Active" : "swipeer3"}
            >
              <div className="customer3 active">
                <div className="vectors">
                  <img className="vector" src={Vector} alt="" />
                  <img className="vector" src={Vector} alt="" />
                </div>
                <img className="profileImage" src={Blackman} alt="" />
                <h2>Tyler Student</h2>
                <div className="icons">
                  <FaStar className="icon1" />
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                </div>
                <p>
                  I love spending my downtime in a cozy coffee shop, surrounded
                  by the sweet aroma of freshly brewed drinks and pastries.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide
              className={active === 3 ? "swipeer4Active" : "swipeer4"}
            >
              <div className="customer4">
                <div className="vectors">
                  <img src={Vector} alt="" />
                  <img src={Vector} alt="" />
                </div>
                <img className="profileImage" src={Women} alt="" />
                <h2>Tyler Student</h2>
                <div className="icons">
                  <FaStar className="icon1" />
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                </div>
                <p>
                  I love spending my downtime in a cozy coffee shop, surrounded
                  by the sweet aroma of freshly brewed drinks and pastries.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide
              className={active === 4 ? "swipeer5Active" : "swipeer5"}
            >
              <div className="customer5">
                <div className="vectors">
                  <img src={Vector} alt="" />
                  <img src={Vector} alt="" />
                </div>
                <img className="profileImage" src={Blackman} alt="" />
                <h2>Tyler Student</h2>
                <div className="icons">
                  <FaStar className="icon1" />
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                </div>
                <p>
                  I love spending my downtime in a cozy coffee shop, surrounded
                  by the sweet aroma of freshly brewed drinks and pastries.
                </p>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
      <div>
        <img src={DownImage} alt="" className="transcostum" />
      </div>

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
    </>
  );
};

export default Home;
