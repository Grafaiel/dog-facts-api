import { React, useEffect, useState } from 'react';

import './styles.css'

function App() {
  const [info, setInfo] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    setInfo({});
    if (text) {
      fetch(
        `https://random.dog/woof.json`
      )
        .then((response) => response.json)
        .then((response) => {
          setInfo(response);
        });
    }
  }, [text]);

  return (
    <div >
        <h1> Facts About Dogs</h1>
        
    </div>
  );
}

export default App;