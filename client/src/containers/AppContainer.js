import { connect } from 'react-redux';
import Game from '../App';

const mapStateToProps = state => {
  console.log(state);
  const { user } = state;
  console.log(user);
  return {
    id: user.data.id
  };
};

export default connect(mapStateToProps)(Game);
