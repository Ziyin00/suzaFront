import React from "react";
import AboutBackground from "../assets/img/Mask.png";
import "./about.css";
import { Link } from "react-router-dom";

import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
const About = () => {
  return (
    <div>
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
    </div>
  );
};

export default About;
