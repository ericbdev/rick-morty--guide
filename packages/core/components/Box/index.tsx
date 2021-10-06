import React from 'react';
import cx from 'classnames';

const Box = ({ children, className, ...props }) => {
  return (
    <div {...props} className={cx(className)}>
      {children}
    </div>
  );
};

export default Box;
