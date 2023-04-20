import resultTypes from './results.types';

const INITIAL_STATE = {
  results: [],
  result: {},
  fetchResultDone:false,
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
      case resultTypes.SET_RESULTS_DONE:
      return {
        ...state,
        fetchResultDone: action.payload
      }
    default:
      return state;
  }
};

export default resultsReducer;