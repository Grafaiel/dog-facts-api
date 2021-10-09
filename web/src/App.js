import { React} from 'react';
import Home from './components/Home';

function App() {
  return (
    <div className='app' >
      <header className='app-header'>
        <h1 className='home-h1'> Fatos Curiosos Sobre Chachorros </h1>
      </header>
        <Home />
    </div>
  );
}

export default App;