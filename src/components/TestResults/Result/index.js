import React from "react";
import Button from "../../Forms/Button";
import { Link } from "react-router-dom";

const Result = ({ testCaseName, deviceTestResults, matriceId, projectId }) => {

  return (
    <div className="result">
      <div className="thumb">
        <Link to={`/projects/${projectId}/matrices/${matriceId}/testCase/${testCaseName}`}>
          <h3 className="testNameTitle">{testCaseName}</h3>
          {/* <img src={testGif} alt={testName} /> */}
        </Link>
      </div>

      <div className="details">
        <ul>
          <li>
            <span className="name">
              {deviceTestResults.map((deviceResult) => {
                const { deviceName, deviceInfo, result } = deviceResult[0];
                return (
                  <Link to={`/projects/${projectId}/matrices/${matriceId}/testCase/${testCaseName}`}>
                      <h3 className= "testResultDescription" key = {deviceName}>{`${deviceInfo.manufacturer} ${deviceInfo.name}`} {" - "} {result}</h3>
                  </Link>
                )
              })}
              {/* <Link to={`/testResult/${testCaseName}`}>
                <Button>{testResult}</Button>
              </Link> */}
            </span>
          </li>
          {/* <li key="{name}">
            <span className="price">
              {testResult}
            </span>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Result;
