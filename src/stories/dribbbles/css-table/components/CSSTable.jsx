import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TitleBar from './TitleBar';
import useCSV from './useCSV';

const CSSTable = ({ csv }) => {
  const { data, sortAsc, onChangeSort } = useCSV(csv);

  return (
    <div className="css-table">
      <TitleBar sortAsc={sortAsc} source={csv} onClick={onChangeSort} />
    </div>
  );
};

CSSTable.propTypes = {
  csv: PropTypes.string.isRequired,
};

export default CSSTable;
