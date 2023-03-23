import loaderTypes from './loader.types';

const INITIAL_STATE = {
  results: false,
  fetchDone: false
};

const loaderReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case loaderTypes.SHOW_LOADER:
      return {
        ...state,
        results: action.payload
      } 
    default:
      return state;
  }
};

export default loaderReducer;