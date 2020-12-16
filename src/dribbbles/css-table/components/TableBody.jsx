import React, { memo } from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';
import TableHeader from './TableHeader';
import { STAGE_ORDER } from './useCSV';

const TableBody = memo(({ state: { rows, stages, orderAsc } }) => {
  let sortedStages = [...STAGE_ORDER];
  if (!orderAsc) sortedStages.reverse();
  sortedStages = sortedStages.map((stage) => ({
    stage,
    numApps: (stages[stage] || []).length,
  }));

  return (
    <div className="body">
      <TableHeader />
      {sortedStages.map(({ stage, numApps }) => (
        <TableRow key={stage} stage={stage} numApps={numApps} />
      ))}
    </div>
  );
}, propsAreEqual);

function propsAreEqual(prevProps, nextProps) {
  return prevProps.state.orderAsc === nextProps.state.orderAsc;
}

TableBody.propTypes = {
  state: PropTypes.shape({
    orderAsc: PropTypes.bool,
    stages: PropTypes.shape({
      [PropTypes.oneOf(STAGE_ORDER)]: PropTypes.arrayOf(PropTypes.string),
    }),
    rows: PropTypes.shape({
      [PropTypes.string]: PropTypes.shape({
        row: PropTypes.string,
        company: PropTypes.string,
        position: PropTypes.string,
        stage: PropTypes.oneOf(STAGE_ORDER),
      }),
    }),
  }).isRequired,
};

export default TableBody;
