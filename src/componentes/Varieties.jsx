import React from "react";
import CardsImage1 from "../assets/img/Group 10.png";
import CardsImage2 from "../assets/img/Group 13.png";
import CardsImage3 from "../assets/img/Group14.png";
import CardsImage4 from "../assets/img/Group 15.png";
const Varieties = () => {
  return (
    <div>
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
    </div>
  );
};

export default Varieties;
