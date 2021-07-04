import React, { Children } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

const Link = ({ children, activeClassName, ...props }) => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const _childClassName = child.props.className || '';
  const styleClassName = `px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white`;
  const childClassName = `${_childClassName} ${styleClassName}`.trim();

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const className = [props.href, props.as].includes(asPath)
    ? `${childClassName} ${activeClassName}`.trim()
    : childClassName;

  return (
    <NextLink {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </NextLink>
  );
};

export default Link;
