import React from "react";
import frame56 from "../assets/img/Frame56.png";
import frame57 from "../assets/img/Frame57.png";
import frame58 from "../assets/img/Frame58.png";
import frame59 from "../assets/img/Frame59.png";
import { useState, useCallback, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Gallery = () => {
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
        const leftPosition = 35 + (index - 1 - currentIndex) * -25;
        if (leftPosition >= 35) {
          item.style.left = `${leftPosition}%`;
        } else {
          item.style.left = "35%";
        }
      });
    }
  }, [currentIndex]);

  return (
    <div>
      <div className="gallery">
        <h1>Gallery</h1>
        <div className="container">
          <div className={`carousel ${isAnimating ? "active" : ""}`}>
            <div className="list">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`item ${index === currentIndex ? "active" : ""}`}
                  style={{
                    backgroundImage: `url(${item.src})`,
                    // zIndex: index === currentIndex ? 1 : 0,
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
    </div>
  );
};

export default Gallery;
