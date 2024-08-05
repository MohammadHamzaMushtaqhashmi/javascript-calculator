import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import './App.css';

const App = () => {
  const [input, setInput] = useState('0');
  const [lastInput, setLastInput] = useState(null);
  const [isNewCalculation, setIsNewCalculation] = useState(false);

  const handleButtonClick = (content) => {
    if (['+', '-', '*', '/'].includes(content)) {
      if (isNewCalculation) {
        setIsNewCalculation(false);
      }
      if (['+', '-', '*', '/'].includes(lastInput)) {
        setInput(input.slice(0, -1) + content);
      } else {
        setInput(input + content);
      }
    } else if (content === '=') {
      try {
        const result = eval(input);
        setInput(String(result));
        setIsNewCalculation(true);
      } catch (error) {
        setInput('Error');
        setIsNewCalculation(true);
      }
    } else if (content === 'C') {
      resetCalculator();
    } else if (content === '.') {
      const parts = input.split(/[\+\-\*\/]/);
      const lastPart = parts[parts.length - 1];
      if (!lastPart.includes('.')) {
        setInput(input + content);
      }
    } else {
      if (isNewCalculation) {
        setInput(content);
        setIsNewCalculation(false);
      } else {
        setInput(input === '0' ? content : input + content);
      }
    }
    setLastInput(content);
  };

  const resetCalculator = () => {
    setInput('0');
    setLastInput(null);
    setIsNewCalculation(false);
  };

  return (
    <>
    <div className="calculator">
      <Display value={input} />
      <div className="buttons">
        <Button content="C" onClick={handleButtonClick} id="clear" className="operator" />
        <Button content="/" onClick={handleButtonClick} id="divide" className="operator" />
        <Button content="7" onClick={handleButtonClick}  id="seven" />
        <Button content="8" onClick={handleButtonClick}  id="eight" />
        <Button content="9" onClick={handleButtonClick} id="nine" />
        <Button content="*" onClick={handleButtonClick} id="multiply" className="operator" />
        <Button content="4" onClick={handleButtonClick} id="four" />
        <Button content="5" onClick={handleButtonClick} id="five" />
        <Button content="6" onClick={handleButtonClick} id="six" />
        <Button content="-" onClick={handleButtonClick} id="subtract" className="operator" />
        <Button content="1" onClick={handleButtonClick} id="one" />
        <Button content="2" onClick={handleButtonClick} id="two" />
        <Button content="3" onClick={handleButtonClick} id="three"  />
        <Button content="+" onClick={handleButtonClick} id="add" className="operator" />
        <Button content="0" onClick={handleButtonClick} id="zero" style={{ gridColumn: 'span 2' }} />
        <Button content="." onClick={handleButtonClick} id="decimal" />
        <Button content="=" onClick={handleButtonClick} id="equals" className="operator"/>
      </div>
    </div>
    <p style={{ color: 'white', textAlign: 'center', fontFamily: 'monospace' }}>
      Designed and Coded by HaMza
    </p>
    </>
  );
};

export default App;


