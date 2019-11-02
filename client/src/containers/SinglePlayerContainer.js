import { connect } from 'react-redux';
import Game from '../components/SinglePlayerGameBoard';
import { stopAction } from '../actions';

const mapDispatchToProps = dispatch => ({
  stopRedirect: () => {
    dispatch(stopAction());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Game);
