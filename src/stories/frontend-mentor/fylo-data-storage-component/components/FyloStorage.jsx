import React from 'react';
import PropTypes from 'prop-types';
import CapacityBar from './CapacityBar';

const FyloStorage = ({ used, capacity }) => {
  const usedText = Math.floor(used);
  return (
    <div className="storage">
      <span className="used">
        You have used&nbsp;
        <strong>{usedText}&nbsp;GB</strong>&nbsp;of your storage.
      </span>
      <CapacityBar used={used} capacity={capacity} />
    </div>
  );
};

FyloStorage.propTypes = {
  used: PropTypes.number,
  capacity: PropTypes.number,
};

FyloStorage.defaultProps = {
  used: 815,
  capacity: 1000,
};

export default FyloStorage;
