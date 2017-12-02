import React from 'react';

const App = ({ facts }) => {
  const factsNode = facts.map((fact, i) => {
    return (
      <li key={i}>{fact.text}</li>
    );
  });

  return (
    <ul>
      {factsNode}
    </ul>
  );
};

export default App;