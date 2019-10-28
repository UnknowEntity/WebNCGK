import { connect } from 'react-redux';
import Game from '../components/Game';
import { stopAction } from '../actions';

const mapStateToProps = state => ({
  username: state.user.data.username
});

const mapDispatchToProps = dispatch => ({
  stopRedirect: () => {
    dispatch(stopAction());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
