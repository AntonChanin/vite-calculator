const toMathExpression = (value: string[]) => value
  .join('')
  .split('_')
  .map((value) => ['+', '-', '/', '*', '%'].includes(value) ? ` ${value} ` : value);

export default toMathExpression;