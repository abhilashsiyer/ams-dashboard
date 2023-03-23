import React from "react";
import SampleTest from "./../../assets/SampleTest.png";
import VerifyPage from "./../../assets/verifyPage.png";
import CreateAndroidRun from "./../../assets/createRun.png";
import Results from "./../../assets/Results.png";
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
      <h3>Now, you have your tests but how do you run? We got you covered with createRun API's</h3>
      <p>You upload your test and apk under test with an api to us. Send some basic initiator details in createAndroidRun api.
      </p>
      <img src={CreateAndroidRun} alt="AMS logo" className="center" />
      <p>That's it! Tests will be run in pre-defined set of devices in device cloud. </p>
      <p> Don't worry about devices we have 100's of them and we can change it as per your need.</p>
      <h3>Finally, we also got you with dashboard which easily informs you on result of your test</h3>
      <img src={Results} alt="AMS logo" className="center" />
      <h1 className="finalSt">Click Get Started to begin your simiplified automation journey!</h1>
    </section>
  );
};

export default Homepage;
