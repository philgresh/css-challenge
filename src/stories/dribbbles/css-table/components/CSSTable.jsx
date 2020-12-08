import React from 'react'
import PropTypes from 'prop-types'

export const ASC = 'Ascending';
export const DESC = 'Descending';

const CSSTable = ({stageSort, csv}) => {
  return (
    <div>
      
    </div>
  )
}

CSSTable.propTypes = {
  stageSort: PropTypes.string.isRequired,
  csv: PropTypes.string.isRequired,
}

export default CSSTable
