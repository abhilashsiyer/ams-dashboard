import React, { useState } from "react";
import Video from "../Video";
import './../ExpandCollapse/style.scss';

const ExpandCollapse = ({ baseImg, toCompareImg, manufacturer, name, result, testVideoUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  const styles = {
    container: {
      border: "1px solid #ccc",
      padding: "10px",
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
      onClick={handleExpandClick}>
      <div>
        <span className="">
          {manufacturer} {name}
          {" => "}
          {result}
        </span>
      </div>
      <div style={styles.content}>
        {isExpanded && (
          <div className="expandedResults">
              <span className="validationTitle">Validation Results</span>
            <div className="validationResults">
              {baseImg && (
                <img className="baseImg" src={baseImg} alt="base Image" />
              )}

              {toCompareImg && (
                <img
                  className="compareImg"
                  src={toCompareImg}
                  alt="compare Image"
                />
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
