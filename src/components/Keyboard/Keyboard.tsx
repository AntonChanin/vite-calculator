import React, { FC } from 'react';

import Button from '../Button';
import ButtonProps from '../../type/Button';
import uuid from '../../utils/uuid';
import './Keyboard.less';

type Props = {
  config: ButtonProps[];
};

const Keyboard: FC<Props> = ({ config }) => {

  return (
    <div className="keyboard">
      {
        config.map(
          ({ value, variant = 'default',  onClick }) => (
            <Button
              key={uuid()}
              variant={variant}
              onClick={onClick}
              value={value}
            />
          )
        )
      }
    </div>
  );
};

export default Keyboard;
