import React from 'react';
import './App.css';
import { useAppSelector } from './ts-utils/hooks';
import { Start, Game, Results } from './components/index'

function App() {
  const { start, results } = useAppSelector((state) => state.start);

  return (
    <div className="App">
      {!start && <Start />}
      {start && !results && <Game />}
      {results && <Results />}
    </div>
  );
}

export default App;
