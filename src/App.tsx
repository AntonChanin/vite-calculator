import React, { useState } from 'react';

import Output from './components/Output';
import Keyboard from './components/Keyboard';
import ButtonProps from './type/Button';
import toMathExpression from './utils/toMathExpression';
import toSavedFormat from './utils/toSavedFormat';
import mathExpressionsParse from './utils/mathExpressionsParse';
import './App.css';
import './styles.less';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [result, setResult] = useState(NaN);
  const [currentExpression, setCurrentExpression] = useState<string[]>([]);
  const [mathSymbol, setMathSymbol] = useState(true);
  
  const updateExpression = (change: string) => () => {
    setCurrentExpression([...currentExpression, change]);
  };

  const positiveNegative = () => {
    setMathSymbol(!mathSymbol);
    const numbersOfExpression = toMathExpression(currentExpression);
    const lastNumber = numbersOfExpression.length - 1;
    const lastSymbol = numbersOfExpression[lastNumber];
    numbersOfExpression[lastNumber] = `${mathSymbol ? '+' : '-'}(${lastSymbol})`;
    setCurrentExpression(toSavedFormat(numbersOfExpression));
  };

  const toEqual = () => setResult(
    mathExpressionsParse(
      currentExpression
        .join()
        .replaceAll('_', ' ')
        .replaceAll(',', '')
    )
  );

  const clearExpression = () => setCurrentExpression([]);

  const keyboard: ButtonProps[] = [
    { value: 'AC', onClick: clearExpression },
    { value: '+/-', onClick: positiveNegative },
    { value: '%', onClick: updateExpression('_%_') },
    { value: '÷', onClick: updateExpression('_/_'), variant: 'secodary' },
    { value: '7', onClick: updateExpression('7') },
    { value: '8', onClick: updateExpression('8') },
    { value: '9', onClick: updateExpression('9') },
    { value: '×', onClick: updateExpression('_*_'), variant: 'secodary' },
    { value: '4', onClick: updateExpression('4') },
    { value: '5', onClick: updateExpression('5') },
    { value: '6', onClick: updateExpression('6') },
    { value: '−', onClick: updateExpression('_-_'), variant: 'secodary' },
    { value: '1', onClick: updateExpression('1') },
    { value: '2', onClick: updateExpression('2') },
    { value: '3', onClick: updateExpression('3') },
    { value: '+', onClick: updateExpression('_+_'), variant: 'secodary' },
    { value: '0', onClick: updateExpression('0') },
    { value: '.', onClick: updateExpression('.') },
    { value: '' },
    { value: '=', onClick: toEqual, variant: 'fill' },
    { value: theme === 'light' ? '🌞' : '🌙', onClick: () => setTheme(theme === 'light' ? 'dark' : 'light') }
  ];

  return (
    <div className="App">
      <div className={`layout theme_${theme}`}>
        <Output value={result} expression={currentExpression} />
        <Keyboard config={keyboard} />
      </div>
    </div>
  );
};

export default App;
