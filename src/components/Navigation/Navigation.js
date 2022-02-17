import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navigation = ({ className }) => (
  <nav className={`navigation ${className || ''}`}>
    <ul className="navigation__list">
      <li className="navigation__list-item">
        <Link to="/#learn" className="navigation__link">
          Learn
        </Link>
      </li>
      <li className="navigation__list-item">
        <Link to="/#faq" className="navigation__link">
          FAQ
        </Link>
      </li>
      <li className="navigation__list-item">
        <Link to="/#roadmap" className="navigation__link">
          Roadmap
        </Link>
      </li>
    </ul>
  </nav>
);

Navigation.propTypes = {
  className: PropTypes.string,
};

Navigation.defaultProps = {
  className: '',
};

export default Navigation;
