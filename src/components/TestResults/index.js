import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchResultsStart } from './../../redux/Results/results.actions';
import Result from './Result';
import './../TestResults/style.scss';

const mapState = ({ resultsData }) => ({
    results: resultsData.results
});

const TestResults = () => {
  const dispatch = useDispatch();
  const { results } = useSelector(mapState);
  const {matriceId, projectId} = useParams();

  useEffect(() => {
    dispatch(
        fetchResultsStart(matriceId)
    )
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {testCases} = results;
  console.log('** testCasesList in components',results)


  if (!Array.isArray(testCases)) return null;
  if (testCases.length < 1) {
    return (
      <div className="results">
        <p>
          No search results.
        </p>
      </div>
    );
  }

  return (
    <div className="results">

      <h1>
        Browse results
      </h1>
      <div className="testResults">

      {testCases.map((testCase) => {

          const { testCaseName, deviceTestResults } = testCase;
          if (!testCaseName || !deviceTestResults) return null;
          const currentResult = {testCaseName,deviceTestResults,matriceId, projectId};
          return(
            <Result key = {testCaseName}
            {...currentResult}
          />
          )
        })}
      
      </div>
    </div>
  );
};

export default TestResults;