import React from "react";
import { Navigation, Works, Contact, About, WorkCarousel } from "./index";
import { Parallax } from "react-parallax";
import AOS from "aos";
import "aos/dist/aos.css";

const bg_starry = require("../img/bg_starry.png");
const profile_bodyshot = require("../img/Profile_Fingerlakes.png");
const hand = require("../img/illustration_hand.jpg");

const Home = () => {
  return (
    <div className="home">
      <header data-aos="zoom-out" data-aos-easing="ease-out-sine">
        <Parallax
          bgImage={bg_starry}
          strength={800}
          renderLayer={(percent) => (
            <div className="banner">
              <h2
                style={{
                  opacity: `${4 - percent * 5.5}`,
                }}
              >
                Welcome
              </h2>
            </div>
          )}
        >
          <div style={{ height: "80vh" }}></div>
        </Parallax>
      </header>
      <main className="container">
        <div className="sectionContainer">
          <div className="verticalLine"></div>
          <section className="card" data-aos="fade-in">
            <div
              className="img__container"
              data-aos="fade-right"
              data-aos-easing="ease-out-quart"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <img src={profile_bodyshot} />
            </div>
            <div data-aos="fade-left" data-aos-easing="ease-out-quart">
              <h2 data-aos="flip-up" data-aos-easing="ease-out-sine">
                About me
              </h2>
              <p>
                <About />
              </p>
            </div>
          </section>
          <section className="card" data-aos="fade-in">
            <div
              className="img__container"
              data-aos="fade-left"
              data-aos-easing="ease-out-quart"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <WorkCarousel />
            </div>
            <div data-aos="fade-right" data-aos-easing="ease-out-quart">
              <h2 data-aos="flip-up" data-aos-easing="ease-out-sine">
                My work
              </h2>
              <p className="works">
                <Works />
              </p>
            </div>
          </section>
          <section className="card" data-aos="fade-in">
            <div
              className="img__container"
              data-aos="fade-right"
              data-aos-easing="ease-out-quart"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <img src={hand} />
            </div>
            <div data-aos="fade-left" data-aos-easing="ease-out-quart">
              <h2 data-aos="flip-up" data-aos-easing="ease-out-sine">
                Contact me
              </h2>
              <p>
                <a href="mailto:linyianxia@gmail.com">
                  <i className="fa fa-envelope-o"></i> linyianxia@gmail.com
                </a>
              </p>
            </div>
          </section>
        </div>
        <Contact />
      </main>
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      {AOS.init({
        offset: 400,
        duration: 1000,
      })}
    </div>
  );
};

export default Home;
