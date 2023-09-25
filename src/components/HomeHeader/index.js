import "./style.scss";

import AMSLogo from "./../../assets/AMS_Home.png";
import { Link, useLocation } from "react-router-dom";
import Button from "../Forms/Button";

import { useSelector, useDispatch } from "react-redux";
import { signOutUserStart } from '../../redux/User/user.actions';
import { useNavigate } from 'react-router';


const mapState = ({user}) =>({
  currentUser: user.currentUser 
 });

const HomeHeader = props => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);
  let navigate = useNavigate();
  const location = useLocation();


  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          {/* <Link to="/">
            <img src={AMSLogo} alt="AMS logo" />
            <h3>Automation Made Simple</h3>
          </Link> */}
        </div>
        <div className="callToActions">
          {currentUser && (
            <nav className="nav-items">
              {!location.pathname.includes("/projects") && (
                <Link to="/projects">
                  <a className="login">Projects</a>
                </Link>
              )}
              <button
                className="logoutButton"
                onClick={() => {
                  signOut();
                  navigate("/");
                  localStorage.setItem("routeBeforeLogin", "/");
                }}>
                Logout
              </button>
            </nav>
          )}

          {!currentUser && (
            <nav className="nav-items">
              {!location.pathname.includes("/login") && (
                <Link to="/login">
                  <a className="login">Login</a>
                </Link>
              )}
              {!location.pathname.includes("/registration") && (
                <Link to="/registration">
                  <a className="getStarted">Get Started</a>
                </Link>
              )}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

HomeHeader.defaultProps = {
  currentUser: null,
};

export default HomeHeader;
