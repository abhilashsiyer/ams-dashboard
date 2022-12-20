import resultsTypes from './results.types';

export const fetchResultsStart = matriceId => ({
    type: resultsTypes.FETCH_RESULTS_START,
    payload: matriceId
  });
  
  export const setResults = results => ({
    type: resultsTypes.SET_RESULTS,
    payload: results
  });

  export const fetchResultStart = (resultID) => ({
    type: resultsTypes.FETCH_RESULT_START,
    payload: resultID
  });
  
  export const setResult = result => ({
    type: resultsTypes.SET_RESULT,
    payload: result
  });  