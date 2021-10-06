import React from 'react';

import Element from '@wiki/components/Element';

const Button = ({ children, as = 'button', ...rest }) => (
  <Element {...rest} className={['cursor-pointer', rest?.className || '']}>
    {children}
  </Element>
);

export default Button;
