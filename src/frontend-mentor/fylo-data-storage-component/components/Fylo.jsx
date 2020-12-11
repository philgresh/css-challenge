import React from 'react';
import PropTypes from 'prop-types';
import FyloActions from './FyloActions';
import FyloStorage from './FyloStorage';
import '../../../assets/bg-desktop.png';
import './fylo.scss';

const Fylo = ({ used, capacity }) => {
  return (
    <div className="fylo">
      <div className="container">
        <FyloActions />
        <FyloStorage used={used} capacity={capacity} />
      </div>
    </div>
  );
};

Fylo.propTypes = {
  used: PropTypes.number,
  capacity: PropTypes.number,
};

Fylo.defaultProps = {
  used: 815,
  capacity: 1000,
};

export default Fylo;
