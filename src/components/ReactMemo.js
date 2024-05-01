import React from 'react';

const ReactMemo = () => {
  const Component = ({ data }) => {
    return <p>Data: {data}</p>;
  };

  const MemoizedComponent = React.memo(Component);

  return (
    <div>
      <h2>React.memo Example</h2>
      <MemoizedComponent data="Memoized Data" />
    </div>
  );
};

export default ReactMemo;