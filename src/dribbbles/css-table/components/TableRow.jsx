import React from 'react';
import PropTypes from 'prop-types';
import { STAGE_ORDER } from './useCSV';

const TableRow = ({ stage, numApps }) => {
  return (
    <>
      <div className="row"></div>
      <div className="company">
        <span>{stage}</span>
        <span className="pill">{numApps}</span>
      </div>
      <div className="position"></div>
      <div className="stage"></div>
    </>
  );
};

TableRow.propTypes = {
  stage: PropTypes.oneOf(STAGE_ORDER),
  numApps: PropTypes.number,
};

export default TableRow;
