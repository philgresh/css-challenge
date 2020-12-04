import React from 'react';
import PropTypes from 'prop-types';

const RemainingBubble = ({ remaining }) => (
  <div className="remaining">
    <span className="text">{remaining}</span>
  </div>
);

RemainingBubble.propTypes = {
  remaining: PropTypes.number.isRequired,
};

export default RemainingBubble;
