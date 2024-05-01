// UseMemo.js
import React, { useState, useMemo } from 'react';

function UseMemo() {
  const [inputValue, setInputValue] = useState('');

  const isInputValid = useMemo(() => {
    return inputValue.length > 5;
  }, [inputValue]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h3>UseMemo Example</h3>
      <input type="text" id="skill-input" value={inputValue} onChange={handleChange} />
      {isInputValid ? <p>Input is valid</p> : <p>Input is not valid</p>}
    </div>
  );
}

export default UseMemo;
