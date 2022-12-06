import React from "react";
import Button from "../../Forms/Button";
import { Link } from "react-router-dom";

const Result = ({ testResult, logcatSignedUrl, testCaseName, videoSignedUrl  }) => {
  // if (!testGif || !testName || !testResult) return null;

  return (
    <div className="result">
      <div className="thumb">
        <Link to={`/testResult/${testCaseName}`}>
          <h2>{testCaseName}</h2>
          {/* <img src={testGif} alt={testName} /> */}
        </Link>
      </div>

      <div className="details">
        <ul>
          <li>
            <span className="name">
              <Link to={`/testResult/${testCaseName}`}>
                <Button>{testResult}</Button>
              </Link>
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
