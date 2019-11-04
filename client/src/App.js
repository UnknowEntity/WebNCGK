import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App(id) {
  let Id = id.id;
  console.log(id);
  let Disable = () => {
    if (Id) {
      return (
        <Link
          className="App-link btn btn-success text-light font-weight-bold btn-lg text-uppercase"
          to="/game/multiplayer"
        >
          MultiPlayer
        </Link>
      );
    } else {
      return null;
    }
  };
  let IsLogin = () => {
    if (Id) {
      return (
        <div className="col HeaderBtn">
          <Link
            className="App-link btn btn-outline-success font-weight-bold"
            to="/user/profile"
          >
            Profile
          </Link>
        </div>
      );
    } else {
      return (
        <div className="col HeaderBtn">
          <Link
            className="App-link btn btn-outline-success font-weight-bold"
            to="/user/register"
          >
            Register
          </Link>
          <Link
            className="App-link btn btn-success text-light font-weight-bold"
            to="/user/Login"
          >
            Login
          </Link>
        </div>
      );
    }
  };
  return (
    <div className="App container row">
      <IsLogin />
      <div className="w-100" />
      <div className="App-header col">
        <h1 className="text-uppercase font-weight-bold">tic tac toe</h1>
      </div>
      <div className="w-100" />
      <div className="col-12 PlayBtn">
        <Link
          className="App-link btn btn-success text-light font-weight-bold btn-lg"
          to="/game/singleplayer"
        >
          Single Player
        </Link>
      </div>
      <div className="col-12 PlayBtn">
        <Disable />
      </div>
    </div>
  );
}

export default App;
