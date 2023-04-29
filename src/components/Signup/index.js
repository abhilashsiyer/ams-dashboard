import React, { useState, useEffect} from 'react';
import AuthWrapper from './../AuthWrapper';
import FormInput from "../Forms/FormInput";
import Button from "../Forms/Button";
import './../Signup/style.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import {useDispatch} from 'react-redux';
import {signUpUserStart} from './../../redux/User/user.actions';
import { useSelector } from "react-redux";
import { changeLoadingStateStart } from '../../redux/Loader/loader.actions';

const mapState = ({user}) =>({
  currentUser: user.currentUser,
  userErr: user.userErr,
 });

const Signup = props => {
  const { currentUser, userErr} = useSelector(mapState);
  const [displayName, setDisplayName] = useState('');
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);
  let navigate = useNavigate();

  const reset = () => {
    setDisplayName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrors([]);
  };

  useEffect(() => {
    if (currentUser) {
      reset(); 
      navigate('/projects');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  useEffect(() => {
    if (Array.isArray(userErr) && userErr.length>0) {
      setErrors(userErr)
    }
  }, [userErr]);

  const handleFormSubmit =  (e) => {
    e.preventDefault();
    dispatch(signUpUserStart({displayName,email,password, confirmPassword}));
    let loaderState = true;
    dispatch(changeLoadingStateStart(loaderState));
  }

  const configAuthWrapper = {
    headline: 'Registration'
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">

        {errors.length > 0 && (
          <ul>
            {errors.map((err, index) => {
              return (
                <li key={index}>
                  {err}
                </li>
              );
            })}
          </ul>
        )}

        <form onSubmit={handleFormSubmit}>

          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            placeholder="Full name"
            handleChange={e => setDisplayName(e.target.value)}
          />

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

          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm Password"
            handleChange={e => setConfirmPassword(e.target.value)}
          />

          <a type="submit" className= "register" onClick={handleFormSubmit}>
            Register
          </a>
        </form>

        <div className="links">
          <Link to="/login">
            LogIn
          </Link>
          {` | `}
          <Link to="/recovery">
            Reset Password
            </Link>
        </div>
      </div>
    </AuthWrapper>
  );
}

export default Signup;
