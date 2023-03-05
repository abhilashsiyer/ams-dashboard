import React from "react";
import Button from "../../Forms/Button";
import { Link } from "react-router-dom";

const Result = ({ testCaseName, deviceTestResults, matriceId, projectId }) => {

  return (
    <div className="result">
      <div className="thumb">
        <Link to={`/projects/${projectId}/matrices/${matriceId}/testCase/${testCaseName}`}>
          <h2>{testCaseName}</h2>
          {/* <img src={testGif} alt={testName} /> */}
        </Link>
      </div>

      <div className="details">
        <ul>
          <li>
            <span className="name">
              {deviceTestResults.map((deviceResult) => {
                const { deviceName, deviceInfo, result } = deviceResult[0];
                return <h3 key = {deviceName}>{`${deviceInfo.manufacturer} ${deviceInfo.name}`} {"=>"} {result}</h3>;
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
