


import React, { useState } from 'react';
import UseMemo from './UseMemo';
import ReactMemo from './ReactMemo';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [counter, setCounter] = useState(0);
  const [customTask, setCustomTask] = useState('');

  const handleAddTodo = () => {
    setTasks([...tasks, 'New todo']);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleCustomTaskChange = (e) => {
    setCustomTask(e.target.value);
  };

  const handleCustomTaskSubmit = () => {
    if (customTask.length > 5) {
      setTasks([...tasks, customTask]);
      setCustomTask('');
    } else {
      alert('Task must be more than 5 characters long.');
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div id="main">
      <button id="add-todo-btn" onClick={handleAddTodo}>Add todo</button>
      
      <button id="increment-btn" onClick={handleIncrement}>{counter}</button>
      <input
        id="skill-input"
        type="text"
        value={customTask}
        onChange={handleCustomTaskChange}
        placeholder="Enter custom task"
      />
      <button onClick={handleCustomTaskSubmit} id="skill-btn">Add Skill</button>
      <div id="item-jumbotron">
      {tasks.map((task, index) => (
    <div key={index}>{task}</div>
  ))}
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button id={`todo-${index}`} onClick={() => handleRemoveTask(index)}>New Todo</button>
          </li>
        ))}
      </ul>

      <p>Counter value: {counter}</p>
      <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
      <UseMemo />
      <ReactMemo />
    </div>
  );
};

export default App;