import { connect } from 'react-redux';
import { getUser, redirectApi, stopAction, getProfile } from '../actions';
import Profile from '../components/Profile';
import { actions } from 'react-redux-form';

const mapStateToProps = state => {
  const { api } = state;
  return {
    isRedirect: api.isRedirect,
    url: api.url
  };
};

const mapDispatchToProps = dispatch => ({
  handleSubmit: data => {
    console.log(data);
    fetch(`/user/update`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data
      }),
      redirect: 'follow'
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        dispatch(getUser({ user: data.user }));
        dispatch(redirectApi('/'));
      })
      .catch(error => {
        console.log(error);
      });
  },
  stopRedirect: () => {
    dispatch(stopAction());
  },
  onLoad: () => {
    dispatch(getProfile());
  },
  Cancel: () => {
    dispatch(actions.reset('userFormData'));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
