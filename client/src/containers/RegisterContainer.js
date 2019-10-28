import { connect } from 'react-redux';
import { redirectApi } from '../actions';
import Register from '../components/Register';

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
    fetch(`/user/register`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      redirect: 'follow'
    }).then(
      response => response.json(),
      // eslint-disable-next-line no-console
      error => console.log('An error occurred.', error)
    );
    dispatch(redirectApi('/user/login'));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
