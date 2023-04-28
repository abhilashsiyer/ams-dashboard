import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchResultsStart } from './../../redux/Results/results.actions';

import TestResult from './TestResult';
import './../TestResults/style.scss';

const mapState = ({ resultsData }) => ({
    results: resultsData.results
});

const TestResults = () => {
  const dispatch = useDispatch();
  const { results } = useSelector(mapState);
  const {matriceId, projectId, appId} = useParams();

  useEffect(() => {
    dispatch(
        fetchResultsStart({matriceId,appId})
    )
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {testCases} = results;

  if (!Array.isArray(testCases)) return null;
  if (testCases.length < 1) {
    return (
      <div className="results">
        <h1>
          No search results.
        </h1>
      </div>
    );
  }

  return (
    <div className="results">

  <div className="resultDetails">
        <h1>Results</h1>
      <div className="testResults">

      {testCases.map((testCase) => {

          const { testCaseName, deviceTestResults } = testCase;
          if (!testCaseName || !deviceTestResults) return null;
          const currentResult = {testCaseName,deviceTestResults,matriceId, projectId, appId};
          return(
            <TestResult key = {testCaseName}
            {...currentResult}
          />
          )
        })}
      
      </div>
    </div>
  </div>
  );
};

export default TestResults;