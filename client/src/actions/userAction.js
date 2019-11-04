import { actions } from 'react-redux-form';

export const getUser = data => ({
  type: 'UPDATE_DATA',
  data
});

export const getToken = token => ({
  type: 'UPDATE_TOKEN',
  token
});

export const redirectApi = url => ({
  type: 'REDIRECT',
  url
});

export const stopAction = () => ({
  type: 'RESET_URL'
});

export const getAllUserData = user => ({
  type: 'UPDATE_ALL',
  user
});

export const getProfile = () => {
  return (dispatch, getState) => {
    const state = getState();
    const { user } = state;
    console.log(state);
    dispatch(actions.merge('userFormData', user.data));
  };
};
