import './App.css';
import Intervalo from './components/Intervalo';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';

function App() {
  return (
    <div className='App'>
      <h4>Exercício React-Redux (Simples)</h4>
      <div className='linha'>
        <Intervalo 
          min={1} 
          max={10}
        />
      </div>
      <div className='linha'>
        <Media min={1} max={10} />
        <Soma min={1} max={10} />
        <Sorteio min={1} max={10} />
      </div>
    </div>
  );
}

export default App;
