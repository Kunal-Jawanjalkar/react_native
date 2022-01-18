export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER_DETAILS':
      return {
        ...state,
        userDetails: action.payload,
      };

    default:
      throw new Error('action not matched');
  }
};
