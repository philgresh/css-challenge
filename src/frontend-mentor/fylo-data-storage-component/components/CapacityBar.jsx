import React from 'react';
import PropTypes from 'prop-types';

const MIN_METER_VALUE = 8;

const CapacityBar = ({ used, capacity }) => {
  const width = Math.max((used / capacity) * 100, MIN_METER_VALUE);

  return (
    <div class="meter">
      <span style={{ width: width + '%' }} />
      <div className="ranges">
        <span>0</span>
        <span>{capacity}</span>
      </div>
    </div>
  );
};

CapacityBar.propTypes = {
  used: PropTypes.number.isRequired,
  capacity: PropTypes.number.isRequired,
};

export default CapacityBar;
