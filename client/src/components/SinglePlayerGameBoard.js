import React from 'react';
import './Game.css';
import MovesList from '../containers/MovesList';
import GameStatus from '../containers/GameStatus';
import GameSquares from '../containers/SinglePlayerGame';
import ResetBtn from '../containers/ResetBtn';
import ReverseBtn from '../containers/ReverseBtn';

function Game(stopRedirect) {
  return (
    <div className="App">
      <div onLoad={() => stopRedirect()}></div>
      <header className="App-header">
        <div className="game">
          <div className="game-board">
            <GameSquares />
          </div>
          <div className="game-info">
            <ResetBtn />
            <div>
              <ReverseBtn />
            </div>
            <GameStatus />
            <MovesList />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Game;
