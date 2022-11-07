import React, { useState, useEffect} from 'react';
import AuthWrapper from './../AuthWrapper';
import FormInput from "../Forms/FormInput";
import Button from "../Forms/Button";
import './../Signup/style.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import {useDispatch} from 'react-redux';
import {signUpUser, resetAllAuthForms} from './../../redux/User/user.actions';
import { useSelector } from "react-redux";

const mapState = ({user}) =>({
  signUpSuccess: user.signUpSuccess,
  signUpError: user.signUpError,
 });

const Signup = props => {
  const { signUpSuccess, signUpError} = useSelector(mapState);
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
    if (signUpSuccess) {
      reset(); 
      dispatch(resetAllAuthForms());
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signUpSuccess]);

  useEffect(() => {
    if (Array.isArray(signUpError) && signUpError.length>0) {
      setErrors(signUpError)
    }
  }, [signUpError]);

  const handleFormSubmit =  (e) => {
    e.preventDefault();
    dispatch(signUpUser({displayName,email,password, confirmPassword}));
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

          <Button type="submit">
            Register
          </Button>
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
