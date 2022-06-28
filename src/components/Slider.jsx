import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import pic1 from "../assets/img/slider1.jpg";
import pic2 from "../assets/img/slider2.jpg";
import pic3 from "../assets/img/slider3.jpg";

function Slider( { } ) {
  return (
    <div className="wrapper">
      <div className="slider">
        <Carousel autoPlay={1} infiniteLoop={1}>
          <div>
            <img src={pic1} />
          </div>
          <div>
            <img src={pic2} />
          </div>
          <div>
            <img src={pic3} />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Slider;