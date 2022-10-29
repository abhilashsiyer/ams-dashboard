import "./default.scss";
import Homepage from "./pages/Homepage";
import {connect} from "react-redux";
import Registration from "./pages/Registration";
import MainLayout from "./layouts/MainLayout";
import { Routes, Route, Navigate } from "react-router-dom";
import React, { useEffect } from "react";
import Login from "./pages/Login";
import { auth, handleUserProfile } from "./firebase/utils";
import Results from "./pages/Results";
import {setCurrentUser} from "./redux/User/user.actions";
import WithAuth from "./hoc/withAuth";


const App = props => {
  const { setCurrentUser, currentUser } = props;

  useEffect(()=>{
    const authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
        setCurrentUser({
            id: snapshot.id,
          ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(null);
      }
    });

    return (()=>{
      authListener();
    })
  },[]);

    return (
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Homepage />
              </MainLayout>
            }
          />
          <Route
            path="/registration"
            element={
              <MainLayout>
                <Registration />
              </MainLayout>
            }
          />
          <Route
            path="/results"
            element={
              <WithAuth>
              <MainLayout>
                  <Results />
                </MainLayout>
               </WithAuth> 
            }
          />
          <Route
            path="/login"
            element={
              currentUser ? (
                <Navigate to="/" />
              ) : (
                <MainLayout>
                  <Login />
                </MainLayout>
              )
            }
          />
        </Routes>
      </div>
    );
  }

const mapStateToProps = ({user}) =>({
  currentUser: user.currentUser 
 })

 const mapDispathToProps = dispatch =>({
  setCurrentUser:user => dispatch(setCurrentUser(user))
 })

export default connect(mapStateToProps, mapDispathToProps)(App);
