import appsTypes from './apps.types';

const INITIAL_STATE = {
  results: [],
};

const appsReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case appsTypes.SET_APPS:
      return {
        ...state,
        results: action.payload
      }
    default:
      return state;
  }
};

export default appsReducer;