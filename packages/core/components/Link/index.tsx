import React, { useMemo, Children } from 'react';
import cx from 'classnames';
import { useRouter } from 'next/router';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import { PolymorphicComponentProps } from '@wiki/components/Element';

interface ILinkProps extends NextLinkProps {
  classNameActive?: string;
}

type LinkProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  ILinkProps
>;

const Link = <C extends React.ElementType = 'a'>({
  children,
  href,
  className: classNameBase,
  classNameActive,
  ...props
}: LinkProps<C>) => {
  const router = useRouter();
  const child = Children.only(children);

  const isActive = useMemo(() => {
    // pages/index.js will be matched via props.href
    // pages/about.js will be matched via props.href
    // pages/[slug].js will be matched via props.as
    return [href, props?.as].includes(router?.asPath);
  }, [href, props?.as, router?.asPath]);

  const className = useMemo(() => {
    const child = Children.only(children);
    const classNameChild = child?.props?.className || '';

    return cx([
      'cursor-pointer',
      classNameBase,
      classNameChild,
      isActive && classNameActive,
    ]);
  }, [classNameBase, child?.props?.className, isActive]);

  return (
    <NextLink href={href} {...props}>
      {React.cloneElement(child, {
        className,
      })}
    </NextLink>
  );
};

export default Link;
