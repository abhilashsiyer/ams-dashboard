import loaderTypes from './loader.types';

export const changeLoadingStateStart = (loaderState) => ({
    type: loaderTypes.SHOW_LOADER,
    payload:loaderState
  });

  export const setLoadingState = results => ({
    type: loaderTypes.SET_LOADER,
    payload: results
  });  
  