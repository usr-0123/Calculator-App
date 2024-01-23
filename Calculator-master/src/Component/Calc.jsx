import { useState } from 'react';
import './Calc.css';

function Calc() {
  const [result, setResult] = useState('');
 
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const handleClear = () => {
    setResult('');
  };

  const handleDelete = () => {
    setResult(result.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };
    return (
        <div className="calculator">
          <input type="text" value={result} className="input-field"/>
    
          <div className="calculator-keypad">
            
            <button name="7" onClick={handleClick}>7</button>
            <button name="8" onClick={handleClick}>8</button>
            <button name="9" onClick={handleClick}>9</button>
            <button className="delete" onClick={handleDelete}>DEL</button>

            <button name="4" onClick={handleClick}>4</button>
            <button name="5" onClick={handleClick}>5</button>
            <button name="6" onClick={handleClick}>6</button>
            <button name="+" onClick={handleClick}>+</button>

            <button name="1" onClick={handleClick}>1</button>
            <button name="2" onClick={handleClick}>2</button>
            <button name="3" onClick={handleClick}>3</button>
            <button name="-" onClick={handleClick}>-</button>

            <button name="." onClick={handleClick}>.</button>
            <button name="0" onClick={handleClick}>0</button>
            <button name="/" onClick={handleClick}>/</button>
            <button name="*" onClick={handleClick}>x</button>

            <button className="reset" name="C" onClick={handleClear}>RESET</button>
            <button className="calculate" onClick={handleCalculate}> = </button>
        </div>
    </div>
      )
}

export default Calc
