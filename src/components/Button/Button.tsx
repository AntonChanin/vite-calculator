import React, { FC } from 'react';

import './Button.less';

type Props = {
  value: string;
  variant?: 'default' | 'fill' | 'secodary';
  onClick?(): void;
};

const Button: FC<Props> = ({
  value, variant = 'default', onClick
}) => (
  <button
    className={`calcButton calcButton_${variant} ${value ? '' : 'hidden'}`.trimEnd()}
    onClick={onClick}
  >
    {value}
  </button>
);

export default Button;
