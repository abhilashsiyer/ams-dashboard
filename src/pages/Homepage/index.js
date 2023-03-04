import React from "react";
import Directory from "../../components/Directory";
import SampleTest from "./../../assets/SampleTest.png";
import VerifyPage from "./../../assets/verifyPage.png";
import "./style.scss";

const Homepage = (props) => {
  return (
    <section className="homepage">
      <h1>Write tests for mobile apps faster than you have ever done</h1>
      <p>AMS removes all the complexities in setting up and writing automated tests.</p>
      <p>It gives you simplified methods to write tests. Allowing you to focus on your tests than setting up the tests.</p>
      <h3>Writing a test is as simple as -</h3>
      <img src={SampleTest} alt="AMS logo" className="center" />
      <h3>You don't even need to write many assertions, Thanks to our page validator</h3>
      <p>For above test, we can validate the entire page using verifyPage</p>
      <img src={VerifyPage} alt="AMS logo" className="center" />
      <p>This will validate the entire page and let us know for any differences in the page</p>
    </section>
  );
};

export default Homepage;
