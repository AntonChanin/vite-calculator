import { useState } from 'react';

import mathExpressionsParse from './utils/mathExpressionsParse';
import './App.css';
import './styles.less';

function App() {
  const [result, setResult] = useState(NaN);
  const [currentExpression, setCurrentExpression] = useState<string[]>([]);
  const [mathSymbol, setMathSymbol] = useState(true);
  
  const updateExpression = (change: string) => () => {
    setCurrentExpression([...currentExpression, change]);
  }

  const keyboard: { value: string, variant?: 'default' | 'fill' | 'secodary', onClick?():void }[] = [
    { value: 'AC', onClick: () => setCurrentExpression([]) },
    {
      value: '+/-',
      onClick: () => {
        setMathSymbol(!mathSymbol);
        const numbersOfExpression = currentExpression
          .join('')
          .split('_')
          .map((value) => ['+', '-', '/', '*', '%'].includes(value) ? ` ${value} ` : value);
        const lastNumber = numbersOfExpression[numbersOfExpression.length - 1];
        numbersOfExpression[numbersOfExpression.length - 1] = `${mathSymbol ? '+' : '-'}(${lastNumber})`;
        setCurrentExpression(numbersOfExpression.map((value) => [' + ', ' - ', ' / ', ' * ', ' % '].includes(value) ? `_${value}_` : value));
      }
    },
    { value: '_%_' },
    { value: '_/_', variant: 'secodary' },
    { value: '7' },
    { value: '8' },
    { value: '9' },
    { value: '_*_', variant: 'secodary' },
    { value: '4' },
    { value: '5' },
    { value: '6' },
    { value: '_-_', variant: 'secodary' },
    { value: '1' },
    { value: '2' },
    { value: '3' },
    { value: '_+_', variant: 'secodary' },
    { value: '0' },
    { value: '.' },
    { value: '' },
    { value: '=', variant: 'fill',
      onClick: () =>  {
        setResult(mathExpressionsParse(currentExpression.join().replaceAll('_', ' ').replaceAll(',', '')));
      }
    },
  ];

  return (
    <div className="App">
      <div className={`layout theme_${'light'}`}>
        <div className="exeInput">
          <span>{`${result}` !== 'NaN' ? result : 'Error'}</span>
          <span>{currentExpression.join('').replaceAll('_', ' ')}</span>
          </div>
        <div className="calcKeyboard">
          {
            keyboard.map(
              ({ value, variant = 'default',  onClick }, index) => (
                <button
                  className={`calcButton calcButton_${variant} ${value ? '' : 'hidden'}`.trimEnd()}
                  onClick={onClick ?? updateExpression(value)}
                  key={index}
                >
                  {value.replaceAll('_', ' ')}
                </button>
              )
            )
          }
        </div>
      </div>
    </div>
  );
};

export default App;
