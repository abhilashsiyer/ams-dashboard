import matricesTypes from './matrices.types';

export const fetchMatricesStart = () => ({
    type: matricesTypes.FETCH_MATRICES_START
  });
  
  export const setMatrices = results => ({
    type: matricesTypes.SET_MATRICES,
    payload: results
  });  