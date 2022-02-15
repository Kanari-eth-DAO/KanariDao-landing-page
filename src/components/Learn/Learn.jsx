import React from 'react';
import { ReactSVG } from 'react-svg';
import circle from '../../assets/images/leran-background-circle.svg';
import ellipse from '../../assets/images/leran-background-ellipse.svg';

const Learn = () => (
  <section id="learn" className="learn">
    <div className="learn__information">
      <h2 className="learn__title">KanariDAO: Next Gen Organization</h2>
      <p className="learn__text">
        KanariDAO has goal to create a community that share informations and creates new products.
      </p>
      <p className="learn__text">
        Now, you have the power to have common ownership throw our DAO.
      </p>

      <p className="learn__text">
        All the profits from the products or the assets of the DAO go back to the community.
      </p>

      <p className="learn__text">
        Let's unlock the opportunities of the web3 technoligy.
      </p>
    </div>
    <div className="learn__picture">
      <img
        className="learn__img"
        src="./images/learn-kats-gourp.png"
        alt="nearkats group"
      />
      <ReactSVG className="learn__background-circle" src={circle} />
      <ReactSVG className="learn__background-ellipse" src={ellipse} />
    </div>
  </section>
);

export default Learn;
