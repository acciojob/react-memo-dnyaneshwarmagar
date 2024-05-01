// ReactMemo.js
import React, { useState, memo } from 'react';

const ReactMemo = memo(({ todos, onCustomTaskSubmit }) => {
  const [customTask, setCustomTask] = useState('');

  const handleChange = (e) => {
    setCustomTask(e.target.value);
  };

  const handleSubmit = () => {
    if (customTask.trim() !== '') {
      onCustomTaskSubmit(customTask);
      setCustomTask('');
    }
  };

  return (
    <div>
      <h3>React.memo Example</h3>
      <input type="text" value={customTask} onChange={handleChange} />
      <button id="skill-btn" onClick={handleSubmit}>Submit</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
});

export default ReactMemo;
