import React, { useState, useMemo } from 'react';

const UseMemo = () => {
  const [count, setCount] = useState(0);

  const dynamicContent = useMemo(() => {
    return 1000000000 + count;
  }, [count]);
  return (
    <div id="calc">
      <h2>UseMemo Example</h2>
      <p id="incr-cnt">Counter: {count}</p>
      <p>{<p>{dynamicContent}</p>}</p>
      
      <button onClick={() => setCount(count + 1)} id="incr-btn">+<b>{count}</b></button>
    </div>
  );
};

export default UseMemo;