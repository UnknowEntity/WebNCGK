import { combineReducers } from 'redux';
import { createForms } from 'react-redux-form';
import initialUser from './forms';
import history from './history';
import xIsNext from './xIsNext';
import winner from './winner';
import stepNumber from './stepNumber';
import reverse from './reverse';
import winSquares from './winSquares';
import user from './user';
import api from './api';

export default combineReducers({
  history,
  xIsNext,
  winner,
  stepNumber,
  reverse,
  winSquares,
  user,
  api,
  ...createForms({
    userFormData: initialUser
  })
});
