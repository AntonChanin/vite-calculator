import React, { FC } from 'react';

import Button from '../Button';
import uuid from '../../utils/uuid';
import './Keyboard.less';

type Props = {
  config: { value: string, variant?: 'default' | 'fill' | 'secodary', onClick?():void }[];
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
