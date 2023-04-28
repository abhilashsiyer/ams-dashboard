import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { changeLoadingStateStart } from '../../../redux/Loader/loader.actions'

const TestResult = ({ testCaseName, deviceTestResults, matriceId, projectId, appId }) => {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    console.log('**handleSubmit from test results')
    let loaderState = true;
    dispatch(changeLoadingStateStart(loaderState));
  };

  return (
    <div className="result" key={testCaseName} onClick={handleSubmit}>
      <Link
        to={`/projects/${projectId}/apps/${appId}/matrices/${matriceId}/testCase/${testCaseName}`}>
        <div className="thumb">
          <h3 className="testNameTitle">{testCaseName}</h3>
        </div>

        <div className="details">
          <ul>
            <li>
              <span className="name">
                {deviceTestResults.map((deviceResult) => {
                  const { deviceName, deviceInfo, result } = deviceResult[0];
                  return (
                    <h3 className="testResultDescription" key={deviceName}>
                      {`${deviceInfo.manufacturer} ${deviceInfo.name}`} {" - "}{" "}
                      {result}
                    </h3>
                  );
                })}
              </span>
            </li>
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default TestResult;
