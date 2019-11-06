import { connect } from 'react-redux';
import { updateStepNumber, updateNextPlayer, aIClick } from '../actions';
import Moves from '../components/Moves';

const mapStateToProps = state => ({
  history: state.history,
  stepNumber: state.stepNumber,
  reverse: state.reverse
});

const mapDispatchToProps = dispatch => ({
  onClick: move => {
    if (move % 2 === 0) {
      dispatch(updateStepNumber(move));
    } else {
      dispatch(updateStepNumber(move));
      dispatch(aIClick());
    }
    dispatch(updateNextPlayer(move % 2 === 0));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Moves);
