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
    <div className="container">
      <div className={cn} {...props}>
        {children}
      </div>
      {link && comment && <a href={link}>{comment}</a>}
    </div>
  );
};

Shape.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  className: PropTypes.string,
  comment: PropTypes.string,
  link: PropTypes.string,
  id: PropTypes.string,
};

Shape.defaultProps = {
  className: '',
  comment: '',
  link: '',
  id: '',
};

export default Shape;
