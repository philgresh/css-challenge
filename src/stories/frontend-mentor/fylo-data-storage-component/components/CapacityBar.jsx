import React from 'react';
import PropTypes from 'prop-types';

const CapacityBar = ({ used, capacity }) => {
  const width = used / capacity * 100;

  return (
    <div class="meter">
      <span style={{ width: width + '%' }}> </span>
    </div>
  );
};

CapacityBar.propTypes = {
  used: PropTypes.number.isRequired,
  capacity: PropTypes.number.isRequired,
};

export default CapacityBar;
