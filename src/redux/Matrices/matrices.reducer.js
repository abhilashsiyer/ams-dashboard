import matriceTypes from './matrices.types';

const INITIAL_STATE = {
  results: [],
};

const matricesReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case matriceTypes.SET_MATRICES:
      return {
        ...state,
        results: action.payload
      }
    default:
      return state;
  }
};

export default matricesReducer;