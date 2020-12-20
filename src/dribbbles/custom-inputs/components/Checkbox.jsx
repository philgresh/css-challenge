import React from 'react';
import PropTypes from 'prop-types';
import './checkbox.scss';

const Checkbox = ({ id, name, isSwitch, isChecked, onClick }) => {
  return <input type="checkbox" name={name} id={id} />;
};

Checkbox.propTypes = {
  onClick: PropTypes.func,
  isSwitch: PropTypes.bool,
  isChecked: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.string,
};

Checkbox.defaultProps = {
  onClick: () => {},
  isSwitch: false,
  isChecked: false,
  name: '',
  id: '',
};

export default Checkbox;
