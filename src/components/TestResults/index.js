import React, { useEffect } from 'react';
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

  useEffect(() => {
    dispatch(
        fetchResultsStart()
    )
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {testCasesList} = results;
  console.log('** testCasesList in components',testCasesList)

  if (!Array.isArray(testCasesList)) return null;
  if (testCasesList.length < 1) {
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

      {testCasesList.map((testCase) => {
          const { testResult, logcatSignedUrl, testCaseName, videoSignedUrl } = testCase;
          if (!testResult || !logcatSignedUrl || !testCaseName) return null;
          return(
            <Result key = {testCaseName}
            {...testCase}
          />
          )

          // "https://media1.giphy.com/media/MeJgB3yMMwIaHmKD4z/giphy.gif"
          

          // const configResult = {
          //   testGif,
          //   testName,
          //   testResult
          // };

          // return (
          //   <Result {...configResult} />
          // );
        })}
      
      </div>
    </div>
  );
};

export default TestResults;