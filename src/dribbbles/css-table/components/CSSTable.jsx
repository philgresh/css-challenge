import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TitleBar from './TitleBar';
import TableBody from './TableBody';
import useCSV from './useCSV';
import './css-table.scss';

const CSSTable = ({ csv }) => {
  const { state, onChangeSort } = useCSV(csv);

  if (!state) return <div className="css-table" />;

  const { orderAsc } = state;

  return (
    <div className="css-table">
      <TitleBar orderAsc={orderAsc} source={csv} onClick={onChangeSort} />
      <TableBody state={state} />
    </div>
  );
};

CSSTable.propTypes = {
  csv: PropTypes.string.isRequired,
};

export default CSSTable;
