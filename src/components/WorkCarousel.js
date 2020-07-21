import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";

const cat = require("../img/Cat.jpg");
const egg = require("../img/egg.png");
const accountabuddy = require("../img/accountabuddy_sample.gif");

const WorkCarousel = () => {
  return (
    <div className="carousel">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={egg} alt="First slide" />
          <Carousel.Caption>
            <h3>Mock Campaign</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={cat} alt="Third slide" />

          <Carousel.Caption>
            <h3>Jetsweat Fitness</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={accountabuddy}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>AccountaBuddy</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default WorkCarousel;
