import React from 'react';

import Link from '@wiki/components/Link';

const NavItem = ({ children, href, ...props }) => {
  const className = [
    'px-3',
    'py-2',
    'rounded-md',
    'text-sm',
    'font-medium',
    'text-gray-300',
    'hover:bg-gray-700',
    'hover:text-white',
  ];

  return (
    <Link
      {...{
        children,
        className,
        classNameActive: 'bg-gray-800',
        href,
        ...props,
      }}
    />
  );
};

export default NavItem;
