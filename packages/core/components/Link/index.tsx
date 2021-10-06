import React, { Children } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

const Link = ({
  children,
  className: _className,
  activeClassName,
  ...props
}) => {
  const route = useRouter();
  const child = Children.only(children);
  const _childClassName = child.props.className || '';
  const styleClassName = `text-sm font-medium text-gray-500`;
  const childClassName = `${_childClassName} ${styleClassName} ${
    Array.isArray(_className) ? _className.join(' ') : _className
  }`.trim();

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const className = [props.href, props.as].includes(route?.asPath)
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
