import React from 'react';

const HEADERS = Object.freeze([
  { title: 'Row', className: 'row' },
  { title: 'Company', className: 'company' },
  { title: 'Position', className: 'position' },
  { title: 'Hiring Stage', className: 'stage' },
]);

const TableHeader = () =>
  HEADERS.map(({ title, className }) => (
    <div className={`headers ${className}`}>{title}</div>
  ));

export default TableHeader;
