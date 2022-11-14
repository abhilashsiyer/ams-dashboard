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

  if (!Array.isArray(results)) return null;
  if (results.length < 1) {
    // console.log(results)
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

      {results.map((result) => {
          const { documentID, testGif, testName, testResult } = result;
          if (!testResult || !testName || !testGif) return null;
          return(
            <Result key = {documentID}
            {...result}
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