import React from 'react';
import { ReactSVG } from 'react-svg';
import bgEllipse from '../../assets/images/hero-ellipse.svg';
import bgCloud1 from '../../assets/images/hero-cloud1.svg';
import bgCloud2 from '../../assets/images/hero-cloud2.svg';
import bgCloud3 from '../../assets/images/hero-cloud3.svg';

const Hero = () => (
  <div className="hero">
    <div className="hero__container">
      <div className="hero__background">
        <ReactSVG className="hero__background-ellipse" src={bgEllipse} />
        <ReactSVG className="hero__background-cloud1" src={bgCloud1} />
        <ReactSVG className="hero__background-cloud2" src={bgCloud2} />
        <ReactSVG className="hero__background-cloud3" src={bgCloud3} />
      </div>
      <div className="hero__information">
        <h1 className="hero__title">
          <span className="hero__title_red">KanariDAO</span> is the next Gen‘
          <span className="hero__title_red">DAO</span>’
        </h1>
        {/* <p className="hero__text">
          Now you can access unique products and information</p>
        <p className="hero__text hero__text_red">Product Launches soon</p> */}
      </div>
    </div>
  </div>
);

export default Hero;
