const toSavedFormat = (value: string[]) => value
  .map((value) => [' + ', ' - ', ' / ', ' * ', ' % ']
  .includes(value) ? `_${value}_` : value);

export default toSavedFormat;