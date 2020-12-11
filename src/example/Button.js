import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './button.scss';

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary,
  backgroundColor,
  color,
  size,
  label,
  className,
  ...props
}) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  const classes = clsx(
    'storybook-button',
    `storybook-button--${size}`,
    mode,
    className
  );

  const colorStyles = {};
  if (backgroundColor) colorStyles['backgroundColor'] = backgroundColor;
  if (color) colorStyles['color'] = color;

  return (
    <button type="button" className={classes} style={colorStyles} {...props}>
      {label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  color: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
  className: '',
  id: '',
};
