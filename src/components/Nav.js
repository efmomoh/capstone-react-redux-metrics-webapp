import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faCog } from '@fortawesome/free-solid-svg-icons';
import CityFilter from './City/CityFilter';
import './styles/Nav.css';

const Nav = ({ onFilterChange }) => (
  <header>
    <nav className="flex">
      <h1>AirTracker</h1>
      <p>Most Views</p>
      <div className="nav-icons flex">
        <FontAwesomeIcon
          className="fa-solid fa-microphone"
          icon={faMicrophone}
        />
        <FontAwesomeIcon className="fa-solid fa-gear" icon={faCog} />
      </div>
    </nav>
    <div className="filter flex">
      <CityFilter onFilterChange={onFilterChange} />
    </div>
  </header>
);

Nav.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Nav;
