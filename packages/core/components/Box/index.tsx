import React from 'react';

import Element from '@wiki/components/Element';

interface IPropsBox {
  children?: any;
  as?: string;
  className?: string | Array<string>;
}

const Box = ({ children, as = 'div', className, ...rest }: IPropsBox) => (
  <Element {...rest} as={as} className={className}>
    {children}
  </Element>
);

export default Box;
