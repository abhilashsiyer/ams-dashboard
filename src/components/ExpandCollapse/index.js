import React, { useState } from "react";
import Video from "../Video";
import './../ExpandCollapse/style.scss';

const ExpandCollapse = ({ baseImg, toCompareImg, manufacturer, name, result, testVideoUrl, key }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  const styles = {
    container: {
      border: "1px solid #ccc",
      padding: "20px",
      cursor: "pointer",
    },
    content: {
      display: isExpanded ? "block" : "none"
    }
  };

  return (
    <div
      className="resultContainer"
      style={styles.container}
      onClick={handleExpandClick}
      key={key}>
      <div className="deviceTitle">
        <span>
          {manufacturer} {name}
          {"  - "}
        </span>

        {result.includes("Passed") && <span className="green-text">{result}</span>}

        {!result.includes("Passed") && <span className="red-text">{result}</span>}
        
      </div>
      <div style={styles.content}>
        {isExpanded && (
          <div className="expandedResults">
            {baseImg && (
                <span className="vTitle">Page Validation Results</span>
              )}
            <div className="validationResults">
              {baseImg && (
                <div>
                <img className="baseImg" src={baseImg} alt="base Image" />
                <span className="vTitle">Base Image</span>
                </div>
              )}

              {toCompareImg!='None' && (
                <div>
                 <img
                  className="compareImg"
                  src={toCompareImg}
                  alt="compare Image"
                />
                <span className="vTitle">Compared Image</span>
                </div>
              )}
            </div>
            <div className="testVideo">
              <Video videoUrl={testVideoUrl} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpandCollapse;
