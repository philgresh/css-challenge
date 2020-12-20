import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';

const CustomInputs = ({ backgroundColor }) => {
  const [state, setState] = useState({
    checkboxes: {
      0: true,
      1: false,
      2: true,
    },
    switches: {
      0: true,
      1: false,
      2: true,
    },
  });

  const onClick = (e) => {
    const { id, type } = e.target;
    if (type === 'checkbox') {
      const prevCheckboxState = state.checkboxes[id];
      setState((prevState) => ({
        ...prevState,
        checkboxes: {
          ...prevState.checkboxes,
          [id]: !prevCheckboxState,
        },
      }));
    }
  };

  const checkboxes = Object.keys(state.checkboxes);
  const switches = Object.keys(state.switches);

  return (
    <div>
      {checkboxes.map((id) => {
        const checked = state.checkboxes[id];
        return (
          <Checkbox
            backgroundColor={backgroundColor}
            id={id}
            name={`check-${id}`}
            isChecked={checked}
            onClick={onClick}
          />
        );
      })}
      {switches.map((id) => {
        const checked = state.checkboxes[id];
        return (
          <Checkbox
            backgroundColor={backgroundColor}
            id={id}
            name={`check-${id}`}
            isChecked={checked}
            onClick={onClick}
          />
        );
      })}
    </div>
  );
};

CustomInputs.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
};

export default CustomInputs;
