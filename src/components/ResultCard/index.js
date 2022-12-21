import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchResultStart, fetchResultsStart } from './../../redux/Results/results.actions';
import './../ResultCard/style.scss';

const mapState = ({resultsData}) =>({
  result: resultsData.result 
 });

const ResultCard = () => {
  const dispatch = useDispatch();
  const { matriceId, testCaseName } = useParams();
  const { result } = useSelector(mapState);
  const fetchResult = {testCaseName,matriceId};

  useEffect(() => {
    dispatch(
      fetchResultStart(fetchResult)
    )
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log('** Device Results',result);
  const { testCasesList } = result;

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
    <div className="productCard">
      <div className="hero">
        {/* <h2>{testCaseName}</h2> */}
        {/* <img src={testGif} alt={testName}/> */}
      </div>
      <div className="productDetails">
        <ul>
          <li>
            <h1>{testCaseName}</h1>
          </li>
          <li>
            {testCasesList.map((testCase) => {
              const { testCaseName, deviceName,logcatSignedUrl,videoSignedUrl,testResult } = testCase;
              if (!testCaseName || !deviceName) return null;

              return <h3 key = {deviceName}>{deviceName} {'=>'} {testResult}</h3>;
            })}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ResultCard;