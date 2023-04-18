import React, { useState , useEffect } from 'react';

const App = () => {
  const [name, setName] = useState('World');

  useEffect(() => {
    console.log('test');
  }, []);

  return <h1>Hello {name}!</h1>;
};

export default App;