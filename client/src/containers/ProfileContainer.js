import { connect } from 'react-redux';
import {
  postStuffProtected,
  stopAction,
  getProfile,
  getStuffProtected
} from '../actions';
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
    dispatch(postStuffProtected(data, '/user/update', '/'));
  },
  stopRedirect: () => {
    dispatch(stopAction());
  },
  onLoad: () => {
    dispatch(getStuffProtected('/user/info', getProfile));
  },
  Cancel: () => {
    dispatch(actions.reset('userFormData'));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
