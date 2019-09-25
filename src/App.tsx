import React from 'react';
import logo from './logo.svg';
import './App.css';

interface Props {
  num: number;
  cont: any;
}

const App: React.FC<Props> = ({ num, cont }) =>
  <div className="App">
    <header className="App-header">
      <h1>{num}</h1>
      <button onClick={() => cont(num + 1)}>Click Me!</button>
    </header>
  </div>

export default App;
