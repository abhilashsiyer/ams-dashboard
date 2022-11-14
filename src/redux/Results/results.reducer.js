import resultTypes from './results.types';

const INITIAL_STATE = {
  results: [],
  result: {}
};

const resultsReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case resultTypes.SET_RESULTS:
      return {
        ...state,
        results: action.payload
      }
      case resultTypes.SET_RESULT:
      return {
        ...state,
        result: action.payload
      } 
    default:
      return state;
  }
};

export default resultsReducer;