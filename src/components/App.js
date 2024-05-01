// App.js
import React, { useState } from 'react';
import UseMemo from './UseMemo';
import ReactMemo from './ReactMemo';

function App() {
  const [counter, setCounter] = useState(0);
  const [todos, setTodos] = useState([]);
  const [skills, setSkills] = useState([]);


  const handleAddTodo = () => {
    const newTodo = `New Todo`;
    setTodos([...todos, newTodo]);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleCustomTaskSubmit = (task) => {
    setTodos([...todos, task]);
  };

  const handleSkillSubmit = (skill) => {
    setSkills([...skills, skill]);
  };

  return (
    <div id="main" className="App">
      <h2>Task Manager</h2>
      <button id="add-todo-btn" onClick={handleAddTodo}>Add Todo</button>
      <button id="incr-cnt" onClick={handleIncrement}>0</button>
      <UseMemo />
      <ReactMemo skills={skills} handleSkillSubmit={handleSkillSubmit} />
      <p>Count: {counter}</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} id={`todo-${index}`}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
