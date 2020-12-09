import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileAlt,
  faSortUp,
  faSortDown,
  faBolt,
} from '@fortawesome/free-solid-svg-icons';

const TitleBar = ({ source, sortAsc, onClick }) => {
  const SortIcon = () =>
    sortAsc ? (
      <FontAwesomeIcon icon={faSortUp} />
    ) : (
      <FontAwesomeIcon icon={faSortDown} />
    );

  return (
    <div>
      <h1>Stage</h1>
      <div className="header">
        <div className="source">
          <FontAwesomeIcon icon={faFileAlt} color="#00b59d" />
          <span>from&nbsp;{source}</span>
        </div>
        <button className="sort" type="button" onClick={onClick}>
          <FontAwesomeIcon icon={faBolt} color="purple" />
          Hiring Stage
          <SortIcon />
        </button>
      </div>
    </div>
  );
};

TitleBar.propTypes = {
  source: PropTypes.string.isRequired,
  sortAsc: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TitleBar;
