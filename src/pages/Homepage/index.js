import React from "react";
import Directory from "../../components/Directory";
import "./style.scss";

const Homepage = (props) => {
  return (
    <section className="homepage">
      <h2>Write and execute tests with ease using AMS</h2>
      <Directory />
    </section>
  );
};

export default Homepage;
