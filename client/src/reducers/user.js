const user = (
  state = {
    data: null,
    token: null
  },
  action
) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return {
        data: action.data,
        token: state.token
      };
    case 'UPDATE_TOKEN':
      return {
        ...state,
        token: action.token
      };
    case 'UPDATE_ALL':
      return action.user;
    default:
      return state;
  }
};

export default user;
