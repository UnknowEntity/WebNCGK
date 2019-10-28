import { connect } from 'react-redux';
import { getAllUserData, redirectApi, stopAction } from '../actions';
import Login from '../components/Login';

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
    fetch(`/user/login`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password
      }),
      redirect: 'follow'
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        dispatch(getAllUserData({ data: res.user, token: res.token }));
        dispatch(redirectApi('/game'));
      })
      .catch(error => {
        console.log(error);
      });
  },
  stopRedirect: () => {
    dispatch(stopAction());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
