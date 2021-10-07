import React from 'react';

import Link, { ILinkProps } from '@wiki/components/Link';
interface INavItemProps extends ILinkProps {
  children?: any;
  className?: string | Array<string>;
}

const NavItem = ({ children, href, className, ...props }: INavItemProps) => {
  return (
    <Link
      {...{
        children,
        classNameActive: 'bg-gray-800',
        href,
        ...props,
      }}
      className={[].concat(
        className
          ? className
          : [
              'px-3',
              'py-2',
              'rounded-md',
              'text-sm',
              'font-medium',
              'text-gray-300',
              'hover:bg-gray-700',
              'hover:text-white',
            ]
      )}
    />
  );
};

export default NavItem;
