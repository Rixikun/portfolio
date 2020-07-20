import React from "react";
import { Navigation } from "./index";
import AOS from "aos";
import "aos/dist/aos.css";

import cat from "../img/Cat.jpg";
import egg from "../img/egg.png";
import bg_cube from "../img/bg_cube.jpg";
import bg_beach from "../img/bg_beach.webp";
import bg_beach_vertical from "../img/bg_beach_vertical.jpg";
import bg_pastel_fractals from "../img/bg_pastel_fractals.jpg";

const Home = () => {
  AOS.init();
  return (
    <div className="home">
      <header className="main-header">
        <Navigation />
        Lin Xia
        <p>Lorem dolor adipisicing quis ullamco commodo.</p>
      </header>

      <main className="container">
        <section className="card">
          <img src={egg} alt="" />
          <div>
            <h3>card egg</h3>
            <p>
              Tempor dolor cupidatat occaecat excepteur in deserunt. Commodo
              cillum ipsum magna commodo proident nisi. Consectetur velit
              aliquip est velit laborum ex. Exercitation consectetur eiusmod
              nisi dolor ut nostrud ut ipsum in. Do elit voluptate amet in aute
              eiusmod consectetur in.
            </p>
            <a href="#" className="btn">
              Buy Now
            </a>
          </div>
        </section>

        <section className="card" data-aos="fade-left">
          <img src={cat} alt="" />
          <div>
            <h3>card 1</h3>
            <p>
              Tempor dolor cupidatat occaecat excepteur in deserunt. Commodo
              cillum ipsum magna commodo proident nisi. Consectetur velit
              aliquip est velit laborum ex. Exercitation consectetur eiusmod
              nisi dolor ut nostrud ut ipsum in. Do elit voluptate amet in aute
              eiusmod consectetur in.
            </p>
            <a href="#" className="btn">
              Buy Now
            </a>
          </div>
        </section>

        <section className="card" data-aos="fade-right">
          <img src={bg_beach} alt="" />
          <div>
            <h3>card 2</h3>
            <p>
              Tempor dolor cupidatat occaecat excepteur in deserunt. Commodo
              cillum ipsum magna commodo proident nisi. Consectetur velit
              aliquip est velit laborum ex. Exercitation consectetur eiusmod
              nisi dolor ut nostrud ut ipsum in. Do elit voluptate amet in aute
              eiusmod consectetur in.
            </p>
            <a href="#" className="btn">
              Buy Now
            </a>
          </div>
        </section>

        <section className="card" data-aos="fade-left">
          <img src={bg_beach_vertical} alt="" />
          <div>
            <h3>card 3</h3>
            <p>
              Tempor dolor cupidatat occaecat excepteur in deserunt. Commodo
              cillum ipsum magna commodo proident nisi. Consectetur velit
              aliquip est velit laborum ex. Exercitation consectetur eiusmod
              nisi dolor ut nostrud ut ipsum in. Do elit voluptate amet in aute
              eiusmod consectetur in.
            </p>
            <a href="#" className="btn">
              Buy Now
            </a>
          </div>
        </section>

        <section className="card" data-aos="fade-right">
          <img src={bg_pastel_fractals} alt="" />
          <div>
            <h3>card 4</h3>
            <p>
              Tempor dolor cupidatat occaecat excepteur in deserunt. Commodo
              cillum ipsum magna commodo proident nisi. Consectetur velit
              aliquip est velit laborum ex. Exercitation consectetur eiusmod
              nisi dolor ut nostrud ut ipsum in. Do elit voluptate amet in aute
              eiusmod consectetur in.
            </p>
            <a href="#" className="btn">
              Buy Now
            </a>
          </div>
        </section>

        <section className="card" data-aos="fade-left">
          <img src={bg_cube} alt="" />
          <div>
            <h3>card 5</h3>
            <p>
              Tempor dolor cupidatat occaecat excepteur in deserunt. Commodo
              cillum ipsum magna commodo proident nisi. Consectetur velit
              aliquip est velit laborum ex. Exercitation consectetur eiusmod
              nisi dolor ut nostrud ut ipsum in. Do elit voluptate amet in aute
              eiusmod consectetur in.
            </p>
            <a href="#" className="btn">
              Buy Now
            </a>
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
