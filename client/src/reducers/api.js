const api = (
  state = {
    isRedirect: false,
    url: ''
  },
  action
) => {
  switch (action.type) {
    case 'REDIRECT':
      return {
        isRedirect: true,
        url: action.url
      };
    case 'RESET_URL':
      return {
        isRedirect: false,
        url: ''
      };
    default:
      return state;
  }
};

export default api;
