import matricesTypes from './matrices.types';

export const fetchMatricesStart = (projectId) => ({
    type: matricesTypes.FETCH_MATRICES_START,
    payload:projectId
  });
  
  export const setMatrices = results => ({
    type: matricesTypes.SET_MATRICES,
    payload: results
  });  