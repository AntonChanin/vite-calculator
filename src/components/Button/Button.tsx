import React, { FC } from 'react';

import ButtonProps from '../../type/Button';
import './Button.less';

type Props = ButtonProps;

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
