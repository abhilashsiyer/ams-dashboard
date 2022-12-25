import React from "react";
import HomeAMS from "./../../assets/HomeAMSSample.png";
import "./style.scss";
import { Link } from "react-router-dom";

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            background: `url(${HomeAMS})`,
          }}></div>
        <Link to={"/registration"}>Get Started</Link>
      </div>
      <div className="wrap">
        <Link to={"/matrices"}>Matrices</Link>
      </div>
    </div>
  );
};

export default Directory;
