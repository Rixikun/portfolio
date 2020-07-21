import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";

const MockCampaign = require("../img/MockCampaign.gif");
const NewJet = require("../img/NewJet.gif");
const OldJet = require("../img/OldJet.gif");
const accountabuddy = require("../img/accountabuddy_sample.gif");

const WorkCarousel = () => {
  return (
    <div className="carousel">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 maxMobile"
            src={MockCampaign}
            alt="Mock Campaign"
          />
          <Carousel.Caption>
            <h3>Mock Campaign</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={OldJet} alt="Jetsweat Before" />

          <Carousel.Caption>
            <h3>Jetsweat Fitness Before</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={NewJet} alt="Jetsweat After" />
          <Carousel.Caption>
            <h3>Jetsweat Fitness After</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 maxMobile"
            src={accountabuddy}
            alt="AccountaBuddy"
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
