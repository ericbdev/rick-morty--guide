import React from 'react';
import Element from '@wiki/components/Element';

interface IPropsText {
  children?: any;
  as?: string;
  className?: string | Array<string>;
}

const Text = ({ children, as = 'span', ...rest }: IPropsText) => (
  <Element {...rest} as={as}>
    {children}
  </Element>
);

const Richtext = ({ children, as = 'div', className, ...rest }: IPropsText) => (
  <Element {...rest} as={as} className={[].concat('prose', className)}>
    {children}
  </Element>
);

export { Richtext };
export default Text;
