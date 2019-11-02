import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App container row">
      <div className="col HeaderBtn">
        <a
          className="App-link btn btn-outline-success font-weight-bold"
          href="/user/register"
        >
          Register
        </a>
        <a
          className="App-link btn btn-success text-light font-weight-bold"
          href="/user/Login"
        >
          Login
        </a>
      </div>
      <div className="w-100" />
      <div className="App-header col">
        <h1 className="text-uppercase font-weight-bold">tic tac toe</h1>
      </div>
      <div className="w-100" />
      <div className="col-12 PlayBtn">
        <a
          className="App-link btn btn-success text-light font-weight-bold btn-lg"
          href="/game/singleplayer"
        >
          Single Player
        </a>
      </div>
      <div className="col-12 PlayBtn">
        <a
          className="App-link btn btn-success text-light font-weight-bold btn-lg text-uppercase"
          href="/game/multiplayer"
        >
          MultiPlayer
        </a>
      </div>
    </div>
  );
}

export default App;
