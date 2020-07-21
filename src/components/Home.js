import React from "react";
import { Navigation, Works, Contact, About, WorkCarousel } from "./index";
import { Parallax } from "react-parallax";
import AOS from "aos";
import "aos/dist/aos.css";

const bg_beach = require("../img/bg_beach.webp");
const bg_beach_vertical = require("../img/bg_beach_vertical.jpg");
const bg_cube = require("../img/bg_cube.jpg");
const bg_pastel_fractals = require("../img/bg_pastel_fractals.jpg");
const bg_droplets = require("../img/bg_droplets.jpg");
const cat = require("../img/Cat.jpg");
const egg = require("../img/egg.png");
const accountabuddy = require("../img/accountabuddy_sample.gif");
const profile = require("../img/profile_cropped.png");

const Home = () => {
  return (
    <div className="home">
      <header data-aos="zoom-out" data-aos-easing="ease-out-sine">
        <Parallax
          bgImage={bg_droplets}
          strength={800}
          bgImageStyle={{
            width: "100vw",
          }}
          renderLayer={(percent) => (
            <div
              className="banner"
              style={{
                transform: `scale(${percent * 5})`,
              }}
            >
              <h2
                style={{
                  filter: `blur(${-1 + percent * 2.4}px)`,
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
        <div className="verticalLine"></div>
        <section className="card" data-aos="fade-in">
          <div
            className="img__container"
            data-aos="fade-right"
            data-aos-easing="ease-out-quart"
            data-aos-duration="1200"
            data-aos-delay="500"
          >
            <img src={profile} />
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
            data-aos-delay="500"
          >
            <img src={accountabuddy} id="accountabuddy" />
          </div>
          <div data-aos="fade-right" data-aos-easing="ease-out-quart">
            <h2 data-aos="flip-up" data-aos-easing="ease-out-sine">
              My work
            </h2>
            <p>
              <Works />
            </p>
          </div>
        </section>
        <section id="lastCard" className="card" data-aos="fade-in">
          <div
            className="img__container"
            data-aos="fade-right"
            data-aos-easing="ease-out-quart"
            data-aos-duration="1200"
            data-aos-delay="500"
          >
            <img src={bg_beach_vertical} />
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
