import React from 'react';
import PropTypes from 'prop-types';
import CapacityBar from './CapacityBar';
import RemainingBubble from './RemainingBubble';

const FyloStorage = ({ used, capacity }) => {
  const usedText = Math.floor(used);
  const remaining = Math.floor(capacity - usedText);
  return (
    <div className="storage">
      <span className="used">
        You have used&nbsp;
        <strong>{usedText}&nbsp;GB</strong>&nbsp;of your storage.
      </span>
      <RemainingBubble remaining={remaining} />
      <CapacityBar used={used} capacity={capacity} />
    </div>
  );
};

FyloStorage.propTypes = {
  used: PropTypes.number.isRequired,
  capacity: PropTypes.number.isRequired,
};

export default FyloStorage;
