import React, { useState, useEffect  } from 'react';
import "./style.scss";
import Button from "../Forms/Button";
import AuthWrapper from "../AuthWrapper";
import FormInput from "../Forms/FormInput";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import {useDispatch} from 'react-redux';
import {emailSignInStart, googleSignInStart} from './../../redux/User/user.actions';
import { changeLoadingStateStart } from '../../redux/Loader/loader.actions';

import { useSelector } from "react-redux";

const mapState = ({user}) =>({
  currentUser: user.currentUser 
 });

const SignIn = props => {
  const { currentUser } = useSelector(mapState);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    if (currentUser) {
      resetForm();
      const pathBeforeLogin = localStorage.getItem('routeBeforeLogin');
      console.log('pathBeforeLoginIInSignIn', pathBeforeLogin);
      
      if (pathBeforeLogin){
        if (pathBeforeLogin ==="/"){
          navigate("/projects");
        }
        else {
          navigate(pathBeforeLogin);
        }
      }
      else {
        navigate("/projects");
      }
      
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(emailSignInStart({ email, password }));
    let loaderState = true;
    dispatch(changeLoadingStateStart(loaderState));
  };

  const handleGoogleSignIn = () => {
    dispatch(googleSignInStart());
  }

  const configAuthWrapper = {
    headline: 'LogIn'
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        <form onSubmit={handleSubmit}>

          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={e => setEmail(e.target.value)}
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            handleChange={e => setPassword(e.target.value)}
          />
        </form>

        <a className="submit" type="submit" onClick={handleSubmit}>
            LOG IN
        </a>

        <div className="socialSignin">
              <a className="submitGoogle" onClick={handleGoogleSignIn}>
                Sign in with Google
              </a>
        </div>

        <div className="links">
            <Link to="/">
              Cancel
            </Link>
          </div>
        
      </div>
    </AuthWrapper>
  );
  }

export default SignIn;
