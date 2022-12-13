import { useState } from 'react';
import './App.css';
import './styles.less';
import mathExpressionsParse from './utils/mathExpressionsParse';

function App() {
  const [result, setResult] = useState(NaN);
  const [currentExpression, setCurrentExpression] = useState('');
  const [mathSymbol, setMathSymbol] = useState(true);
  

  const updateExpression = (change: string) => () => {
    setCurrentExpression(`${currentExpression}${change}`) ;
  }

  const keyboard: { value: string, variant?: 'default' | 'fill' | 'secodary', onClick?():void }[] = [
    { value: 'AC', onClick: () => setCurrentExpression('') },
    {
      value: '+/-',
      onClick: () => {
        setMathSymbol(!mathSymbol);
        setCurrentExpression(`${mathSymbol ? '+' : '-'}(${currentExpression})`);
      }
    },
    { value: '%' },
    { value: ' / ', variant: 'secodary' },
    { value: '7' },
    { value: '8' },
    { value: '9' },
    { value: ' * ', variant: 'secodary' },
    { value: '4' },
    { value: '5' },
    { value: '6' },
    { value: ' - ', variant: 'secodary' },
    { value: '1' },
    { value: '2' },
    { value: '3' },
    { value: ' + ', variant: 'secodary' },
    { value: '0' },
    { value: '.' },
    { value: '' },
    { value: '=', variant: 'fill',
      onClick: () =>  {
        setResult(mathExpressionsParse(currentExpression));
      }
    },
  ];

  return (
    <div className="App">
      <div className={`layout theme_${'light'}`}>
        <div className="exeInput">
          <span>{`${result}` !== 'NaN' ? result : 'Error'}</span>
          <span>{currentExpression}</span>
          </div>
        <div className="calcKeyboard">{
          keyboard.map(
            ({ value, variant = 'default',  onClick }) => (
              <button className={`calcButton calcButton_${variant} ${value ? '' : 'hidden'}`.trimEnd()} onClick={onClick ?? updateExpression(value)}>
                {value}
              </button>
            )
          )
        }</div>
      </div>
    </div>
  );
};

export default App;
