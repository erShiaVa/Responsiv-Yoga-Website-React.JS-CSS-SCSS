import React from 'react';
import "./hero.scss";
//import { images } from "../../images";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__background"></div>
        <div className='hero__container'>
          <div className="hero__heading">
              <h1 className="hero__heading-main">Explore the life<br /> of yoga</h1>
              <p className="hero__heading-sub">Be your own master and balance your life</p>
          </div>
      </div>
    </div>
  )
}

export default Hero