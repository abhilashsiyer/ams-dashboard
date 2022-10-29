import React, { useState } from 'react';
import "./style.scss";
import Button from "../Forms/Button";
import { auth, signInWithGoogle } from "../../firebase/utils";
import AuthWrapper from "../AuthWrapper";
import FormInput from "../Forms/FormInput";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

const SignIn = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      await auth.signInWithEmailAndPassword(email,password) ;
      resetForm();
      navigate('/');
      
    }
    catch(err){
      console.log(err)
    }
  };

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

          <Button type="submit">
            LogIn
          </Button>

          <div className="socialSignin">
            <div className="row">
              <Button onClick={signInWithGoogle}>
                Sign in with Google
              </Button>
            </div>
          </div>

          <div className="links">
            <Link to="/registration">
              Register
            </Link>
            {` | `}
            <Link to="/recovery">
              Reset Password
            </Link>
          </div>

        </form>
      </div>
    </AuthWrapper>
  );
  }

export default SignIn;
