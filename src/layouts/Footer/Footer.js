import React, { useContext, memo } from 'react';
import { appStore } from '../../state/app';
import Navigation from '../../components/Navigation';
import SocialLinks from '../../components/SocialLinks';

const Footer = () => {
  const { state } = useContext(appStore);
  const { wallet } = state || {};

  return wallet ? (
    <footer className="footer">
      <div className="footer__container">
        <Navigation className="footer__navigation" signedIn={wallet.signedIn} />
        <SocialLinks className="footer__social" />

        <p className="footer__text">
          KanariDao is build on top of web3 stack that create trust
        </p>
        <p className="footer__copyright ">
          ©2022 KanariDao. All Rights Reserved.
        </p>
      </div>
    </footer>
  ) : (
    <></>
  );
};

export default memo(Footer);
