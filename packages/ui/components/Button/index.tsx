import React from 'react';

import Element from '@wiki/components/Element';

interface IPropsButton {
  children?: any;
  as?: string;
  className?: string | Array<string>;
  onClick?: (event: MouseEvent) => void;
}

const Button = ({
  children,
  as = 'button',
  className,
  ...rest
}: IPropsButton) => (
  <Element {...rest} className={[].concat('cursor-pointer', className)} as={as}>
    {children}
  </Element>
);

export default Button;
