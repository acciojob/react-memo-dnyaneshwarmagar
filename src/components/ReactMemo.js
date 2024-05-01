// ReactMemo.js
import React, { useState, memo } from 'react';

const ReactMemo = memo(({ skills, handleSkillSubmit }) => {
  const [skill, setSkill] = useState('');

  const handleChange = (e) => {
    setSkill(e.target.value);
  };

  const handleSubmit = () => {
    if (skill.trim() !== '') {
        handleSkillSubmit(skill);
        setSkill('');
    }
  };

  return (
    <div>
      <h3>React.memo Example</h3>
      <input type="text" value={skill} onChange={handleChange} />
      <button id="skill-btn" onClick={handleSubmit}>Submit</button>
      <ul id="item-jumbotron">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
});

export default ReactMemo;
