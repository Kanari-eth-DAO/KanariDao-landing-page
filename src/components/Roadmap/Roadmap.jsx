import React from 'react';
import { ReactSVG } from 'react-svg';
import clouds from '../../assets/images/roadmap-background-clouds.svg';
import ellipseRight from '../../assets/images/roadmap-ellipse-right.svg';
import ellipseLeft from '../../assets/images/roadmap-ellipse-left.svg';

const Roadmap = () => (
  <section id="roadmap" className="roadmap">
    <div className="roadmap__background">
      <ReactSVG
        className="roadmap__background-ellipse-left"
        src={ellipseLeft}
      />
      <ReactSVG
        className="roadmap__background-ellipse-right"
        src={ellipseRight}
      />
      <ReactSVG className="roadmap__background-clouds" src={clouds} />
    </div>
    <div className="roadmap__container">
      <h2 className="roadmap__title">KanariDao Roadmap</h2>

      <ul className="roadmap__list">
        <li className="roadmap__item">
          <h3 className="roadmap__item-title">Bootstrap the community</h3>
          <p className="roadmap__item-text">
            Set up all the nessesary tools for our community to grow and express
            it self.
          </p>
        </li>
        <li className="roadmap__item">
          <h3 className="roadmap__item-title">Start building</h3>
          <p className="roadmap__item-text">
            Start working on products and ideas and realise them to our members.
          </p>
        </li>
        <li className="roadmap__item">
          <h3 className="roadmap__item-title">Grow the community</h3>
          <p className="roadmap__item-text">
            Grow the community and give them access to governace of the DAO.
          </p>
        </li>
        <li className="roadmap__item">
          <h3 className="roadmap__item-title">Lets build all together!</h3>
          <p className="roadmap__item-text">
            We want to be a decentralized team that make decisions all together!
          </p>
        </li>
      </ul>
    </div>
  </section>
);

export default Roadmap;
