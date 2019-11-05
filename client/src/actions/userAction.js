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

export const getProfile = data => {
  return dispatch => {
    dispatch(actions.merge('userFormData', data));
  };
};

export const postStuffProtected = (data, url, redirectUrl) => {
  return (dispatch, getState) => {
    const state = getState();
    const { user } = state;
    fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`
      },
      body: JSON.stringify({
        data
      }),
      redirect: 'follow'
    })
      .then()
      .catch(error => {
        console.log(error);
      });
    dispatch(redirectApi(redirectUrl));
  };
};

export const getStuffProtected = (url, nextAction) => {
  return (dispatch, getState) => {
    const state = getState();
    const { user } = state;
    fetch(url, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`
      },
      redirect: 'follow'
    })
      .then(res => res.json())
      .then(res => {
        dispatch(nextAction(res.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
