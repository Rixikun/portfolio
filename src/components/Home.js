import React from "react";
import { Navigation } from "./index";
import { Parallax } from "react-parallax";

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
          bgImage={bg_pastel_fractals}
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
      <main>
        <section>
          <h3>About me</h3>
          <div className="card">
            <img src={egg} />
          </div>
        </section>
        <section>
          <h3> My work</h3>
          <div className="card">
            <img src={egg} />
          </div>
        </section>
        <section>
          <h3>Contact me</h3>
          <div className="card">
            <img src={egg} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
