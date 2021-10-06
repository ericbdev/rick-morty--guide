// https://www.benmvp.com/blog/forwarding-refs-polymorphic-react-component-typescript/
import React from 'react';
import cx from 'classnames';

// Source: https://github.com/emotion-js/emotion/blob/master/packages/styled-base/types/helper.d.ts
// A more precise version of just React.ComponentPropsWithoutRef on its own
export type PropsOf<
  C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<C, React.ComponentPropsWithoutRef<C>>;

type AsProp<C extends React.ElementType> = {
  /**
   * An override of the default HTML tag.
   * Can also be another React component.
   */
  as?: C | string;
  className?: string | Array<string>;
};

/**
 * Allows for extending a set of props (`ExtendedProps`) by an overriding set of props
 * (`OverrideProps`), ensuring that any duplicates are overridden by the overriding
 * set of props.
 */
export type ExtendableProps<
  ExtendedProps = {},
  OverrideProps = {}
> = OverrideProps & Omit<ExtendedProps, keyof OverrideProps>;

/**
 * Allows for inheriting the props from the specified element type so that
 * props like children, className & style work, as well as element-specific
 * attributes like aria roles. The component (`C`) must be passed in.
 */
export type InheritableElementProps<
  C extends React.ElementType,
  Props = {}
> = ExtendableProps<PropsOf<C>, Props>;

/**
 * A more sophisticated version of `InheritableElementProps` where
 * the passed in `as` prop will determine which props can be included
 */
export type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = {}
> = InheritableElementProps<C, Props & AsProp<C>>;

/**
 * Utility type to extract the `ref` prop from a polymorphic component
 */
export type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>['ref'];
/**
 * A wrapper of `PolymorphicComponentProps` that also includes the `ref`
 * prop for the polymorphic component
 */
export type PolymorphicComponentPropsWithRef<
  C extends React.ElementType,
  Props = {}
> = PolymorphicComponentProps<C, Props> & { ref?: PolymorphicRef<C> };

interface Props {
  children: React.ReactNode | React.Component | string;
}

type ElementProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, Props>;

export type ElementComponentType = <C extends React.ElementType = 'span'>(
  props: ElementProps<C>
) => React.ReactElement | null;

const Element: ElementComponentType = React.forwardRef(
  <C extends React.ElementType = 'span'>(
    { as, children, className, ...other }: ElementProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || 'span';
    const classes = typeof className === 'string' ? className : cx(className);

    return (
      <Component {...other} className={classes} ref={ref}>
        {children}
      </Component>
    );
  }
);

export default Element;
