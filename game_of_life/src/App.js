import React, {Component} from 'react';
import Game from './Game';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Conway's Game of Life</h1>
        <Game />
      </div>
    );
  }
}

export default App;
