import React, { Children } from 'react';
import { useRouter } from 'next/router';

import Link from '@components/Link';

const NavItem = ({ children, ...props }) => {
  const className = "px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white";

  return (
    <Link
      {...{ children, className, activeClassName: 'bg-gray-700', ...props }}
    />
  );
};

export default NavItem;
