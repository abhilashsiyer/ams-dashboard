import React from "react";
import Button from "../../Forms/Button";
import { Link } from "react-router-dom";

const MatriceResult = ({ executionTestMatriceId, userTestMatriceId, clientInfo, project }) => {
  // if (!testGif || !testName || !testResult) return null;

  return (
    <div className="result">
      <div className="thumb">
        <Link to={`/matrices/${executionTestMatriceId}`}>
          <h2>{executionTestMatriceId}</h2>
          {/* <img src={testGif} alt={testName} /> */}
        </Link>
      </div>

      <div className="details">
        <ul>
          <li>
            {/* <span className="name">
              <Link to={`/matrices/${matriceId}`}>
                <h3>{clientInfo}</h3>
              </Link>
            </span> */}
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

export default MatriceResult;
