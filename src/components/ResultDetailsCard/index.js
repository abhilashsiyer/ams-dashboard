import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchResultStart } from '../../redux/Results/results.actions';
import './style.scss';
import ExpandCollapse from "../ExpandCollapse";

const mapState = ({resultsData}) =>({
  result: resultsData.result 
 });

const ResultDetailsCard = () => {
  const dispatch = useDispatch();
  const { matriceId, testCaseName, appId, projectId } = useParams();
  const { result } = useSelector(mapState);
  const fetchResult = {testCaseName, matriceId, appId, projectId};

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
          <li key= {"testCaseNameTitle"}>
            <h1 className="testCaseNameTitle">{testCaseName}</h1>
          </li>
          <li key= {"expandCollapseContainer"}>
            {testCasesList.map((testCase) => {
              const { testCaseName, deviceName,deviceInfo, logcatSignedUrl,videoSignedUrl,testResult,validationFiles } = testCase;
              if (!testCaseName || !deviceName) return null;

              return (
                <div className='expandCollapseContainer'>
                  <ExpandCollapse
                      baseImg={validationFiles.mainBaseFileUrl}
                      toCompareImg= {validationFiles.toCompareBaseUrl}
                      manufacturer= {deviceInfo.manufacturer}
                      name = {deviceInfo.name}
                      result = {testResult}
                      testVideoUrl = {videoSignedUrl}
                      key= {deviceName}
                    />
                </div>
              );
            })}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ResultDetailsCard;