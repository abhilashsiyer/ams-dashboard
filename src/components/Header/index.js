import "./style.scss";

import AMSLogo from "./../../assets/AMS.png";
import { Link } from "react-router-dom";
import { auth } from "./../../firebase/utils";
import Button from "../Forms/Button";

import { useSelector } from "react-redux";

const mapState = ({user}) =>({
  currentUser: user.currentUser 
 });

const Header = () => {
  const { currentUser } = useSelector(mapState);
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

export default Header;
