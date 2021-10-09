import React, { useState, useEffect } from 'react';
import axios from 'axios';

import DogFactCard from './Card';
import './components.css';

const Home = () => {
  const [fact, setFact] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reflesh, setReflesh] = useState(false);

  const getARandom = async () => {
    setLoading(true);
    const data = await axios.get('http://localhost:5000/dogFacts');
    setLoading(false);
    return data;
  };

  useEffect(() => {
    getARandom().then((response) => {
      return (response.data);
    }).then((response) => {
      const id = Math.floor(Math.random() * response.length);
      const fact = response[id];
      const result = ({ id, fact });
      return result;
    }).then((response) => {
      setReflesh(false);
      setFact(response.fact)
    });
  }, [reflesh]);

  return (
    <div className='home' >
      <div className='home-text'>
        {!loading ? <DogFactCard fact={fact} /> : '... Carregando'}
      </div>
      <button
        onClick={() => setReflesh(true)}
        disabled={loading}
        className='home-button'

      >
        Refresh
      </button>
    </div>
  );
}

export default Home;