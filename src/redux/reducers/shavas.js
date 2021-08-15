const initialState = {
  items: [],
  isLoaded: false,
};

const shavas = (state = initialState, action) => {
  if (action.type === 'SET_SHAVAS') {
    return {
      ...state,
      items: action.payload,
      isLoaded: true,
    };
  }
  return state;
};

export default shavas;