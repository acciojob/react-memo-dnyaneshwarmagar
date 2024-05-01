// App.js
import React, { useState } from 'react';
import UseMemo from './UseMemo';
import ReactMemo from './ReactMemo';

function App() {
  const [counter, setCounter] = useState(0);
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    setTodos([...todos, 'New todo']);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleCustomTaskSubmit = (task) => {
    setTodos([...todos, task]);
  };

  return (
    <div id="main" className="App">
      <h2>Task Manager</h2>
      <button id="add-todo-btn" onClick={handleAddTodo}>Add Todo</button>
      <button id="incr-cnt" onClick={handleIncrement}>Increment</button>
      <UseMemo />
      <ReactMemo todos={todos} onCustomTaskSubmit={handleCustomTaskSubmit} />
      <p>Counter: {counter}</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
