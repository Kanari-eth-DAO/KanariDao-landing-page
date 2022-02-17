import React, { useContext } from 'react';
import GenerateSoldOut from './GenerateSoldOut';
import GenerateBlock from './GenerateBlock';
import { appStore } from '../../state/app';

const Generate = () => {
  const { state } = useContext(appStore);
  const { soldOut } = state.app;

  return (
    <section className="generate" id="generate">
      <div className="generate__container">
        <div className="generate__information">
          <h2 className="generate__title">Why bother?</h2>
          <p className="generate__text">
            Be part of a strong community that has a lot of things to offer.
          </p>
          <p className="generate__list-title">KaranariDAO offers:</p>
          <ul className="generate__list">
            <li className="generate__list-item">
              Special Access to discord group
            </li>
            <li className="generate__list-item">Discounts on stuff</li>
            <li className="generate__list-item">Early access to products</li>
            <li className="generate__list-item">
              Access to private information
            </li>
            <li className="generate__list-item">
              Learning resources about web3
            </li>
            <li className="generate__list-item">
              and who knows what else in the future...
            </li>
          </ul>
        </div>

        <div className="generate__block">
          {soldOut ? <GenerateSoldOut /> : <GenerateBlock />}
          <div>
            <img
              className="generate__img"
              src="./images/generate-background.png"
              alt="generate kats"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Generate;
