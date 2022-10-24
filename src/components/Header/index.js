import "./style.scss";

import AMSLogo from "./../../assets/AMS.png";
import { Link } from "react-router-dom";
import { auth } from "./../../firebase/utils";
import Button from "../Forms/Button";
import { connect } from "react-redux";

const Header = (props) => {
  const { currentUser } = props;
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={AMSLogo} alt="AMS logo" />
          </Link>
        </div>
        <div className="callToActions">
          {currentUser && (
            <ul>
              <Button
                onClick={() => {
                  console.log("Logout clicked");
                  auth.signOut();
                }}>
                Logout
              </Button>
            </ul>
          )}

          {!currentUser && (
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null,
};

const mapStateToProps = ({user}) =>({
 currentUser: user.currentUser 
});

export default connect(mapStateToProps, null) (Header);
