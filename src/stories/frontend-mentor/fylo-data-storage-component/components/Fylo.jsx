import React from 'react';
import FyloActions from './FyloActions';
import FyloStorage from './FyloStorage';
import '../../../assets/bg-desktop.png';

const Fylo = (props) => {
  return (
    <div className="fylo">
      <FyloActions />
      <FyloStorage />
    </div>
  );
};

export default Fylo;
