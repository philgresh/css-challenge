import React from 'react';
import PropTypes from 'prop-types';
import './shape.scss';

/**
 * Primary UI component for user interaction
 */
const Shape = ({
  primary,
  backgroundColor,
  color,
  size,
  children,
  className,
  comment,
  link,
  ...props
}) => {
  const cn = `shape-${className}`;

  return (
    <div>
      <div className={cn} {...props}>
        {children}
      </div>
      {link && comment && <a href={link}>{comment}</a>}
    </div>
  );
};

Shape.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  className: PropTypes.string,
  comment: PropTypes.string,
  link: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
};

Shape.defaultProps = {
  backgroundColor: null,
  color: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
  className: '',
  comment: '',
  link: '',
  id: '',
};

export default Shape;
