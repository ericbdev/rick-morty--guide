import React from 'react';
import cx from 'classnames';

const Text = ({ children, className, ...props }) => {
  return (
    <span {...props} className={cx(className)}>
      {children}
    </span>
  );
};

export const Richtext = ({ children, className, ...props }) => {
  return (
    <div {...props} className={cx(className)}>
      {children}
    </div>
  );
};

export default Text;
