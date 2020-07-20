import React from "react";
import { Navigation } from "./index";
import { Parallax } from "react-parallax";
import AOS from "aos";
import "aos/dist/aos.css";

const bg_beach = require("../img/bg_beach.webp");
const bg_beach_vertical = require("../img/bg_beach_vertical.jpg");
const bg_cube = require("../img/bg_cube.jpg");
const bg_pastel_fractals = require("../img/bg_pastel_fractals.jpg");
const cat = require("../img/Cat.jpg");
const egg = require("../img/egg.png");

const Home = () => {
  return (
    <div className="home">
      <header>
        <Parallax
          bgImage={bg_cube}
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
              <h2>Lin's Portfolio</h2>
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
            <img src={cat} />
          </div>
          <div data-aos="fade-left" data-aos-easing="ease-out-quart">
            <h3>About me</h3>
            <p>
              I'm Lin, a web developer that's just starting out and located in
              New York, NY. I enjoy creating responsive layouts and intuitive
              UI.
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
            <img src={egg} />
          </div>
          <div data-aos="fade-right" data-aos-easing="ease-out-quart">
            <h3> My work</h3>
            <p>
              Experienced in: JavaScript, Node, React, Redux, HTML, CSS, SCSS,
              Express, Sequelize
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </p>
          </div>
        </section>
        <section className="card" data-aos="fade-in">
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
            <h3>Contact me</h3>
            <p>email: linyianxia@gmail.com</p>
          </div>
        </section>
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
