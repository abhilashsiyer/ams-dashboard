import "./style.scss";

import AMSLogo from "./../../assets/AMS.png";
import { Link } from "react-router-dom";
import Button from "../Forms/Button";

import { useSelector, useDispatch } from "react-redux";
import { signOutUserStart } from './../../redux/User/user.actions';
import { useNavigate } from 'react-router';


const mapState = ({user}) =>({
  currentUser: user.currentUser 
 });

const Header = props => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);
  let navigate = useNavigate();

  const signOut = () => {
    dispatch(signOutUserStart());
  };

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
                  signOut();
                  navigate("/");
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
