import React, { FC } from 'react';

import './Output.less';

type Props = {
  value: number;
  expression: string[];
};

const Output:FC<Props> = ({ value, expression }) => (
  <div className="output">
    <span>{`${value}` !== 'NaN' ? value : 'Error'}</span>
    <span>{expression.join('').replaceAll('_', ' ')}</span>
  </div>
);

export default Output;
