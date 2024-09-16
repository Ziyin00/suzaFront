import React from "react";
import "./review.css";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useState } from "react";
import Vector from "../assets/img/Vector.png";
import Blackman from "../assets/img/blackman.png";
import Women from "../assets/img/women.png";
import Glassman from "../assets/img/glassman.png";
import { FaStar } from "react-icons/fa";
const Reviews = () => {
  const [active, setActive] = useState(1);

  const handleSlideChange = (swiper) => {
    setActive(swiper.activeIndex + 1);
  };
  return (
    <div>
      <div className="customerReview">
        <h1>Customer Review</h1>

        <Swiper
          onSlideChange={handleSlideChange}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={1}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          // breakpoints={{
          //   600: {
          //     slidesPerView: 2,
          //     spaceBetween: 10,
          //   },
          //   900: {
          //     slidesPerView: 3,
          //     spaceBetween: 10,
          //   },
          // }}
          className="mySwipe swipeer"
        >
          <div className="allcustom">
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
              className={` ${active === 1 ? "swipeer2Active" : "swipeer2"}`}
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
    </div>
  );
};

export default Reviews;
