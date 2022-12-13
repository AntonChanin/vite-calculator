const mathExpressionsParse = (expressions: string): number => {
  return Function(`'use strict'; return (${expressions})`)()
}

export default mathExpressionsParse;
