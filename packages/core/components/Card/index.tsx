import React, {FC} from 'react';
import cx from 'classnames';

interface ICardProps {
  className?: string | Array<string>;
}

const Card:FC<ICardProps> = (props) => {
  return (
    <div
      {...props}
      className={cx(props?.className || '', [
        'container',
        'bg-white',
        'rounded-xl',
        'shadow-md',
        'p-4',
        'border',
        'border-gray-100',
      ])}
    />
  );
};

export default Card;
