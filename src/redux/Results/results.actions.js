import resultsTypes from './results.types';

export const fetchResultsStart = (resultIdentifiers) => ({
    type: resultsTypes.FETCH_RESULTS_START,
    payload: resultIdentifiers
  });
  
  export const setResults = results => ({
    type: resultsTypes.SET_RESULTS,
    payload: results
  });

  export const fetchResultStart = fetchResult => ({
    type: resultsTypes.FETCH_RESULT_START,
    payload: fetchResult
  });
  
  export const setResult = result => ({
    type: resultsTypes.SET_RESULT,
    payload: result
  });  