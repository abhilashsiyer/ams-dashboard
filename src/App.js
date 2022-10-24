import "./default.scss";
import Homepage from "./pages/Homepage";
import {connect} from "react-redux";
import Registration from "./pages/Registration";
import MainLayout from "./layouts/MainLayout";
import { Routes, Route, Navigate } from "react-router-dom";
import React, { Component } from "react";
import Login from "./pages/Login";
import { auth, handleUserProfile } from "./firebase/utils";
import Results from "./pages/Results";
import {setCurrentUser} from "./redux/User/user.actions"


class App extends Component {


  authListener = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.authListener = auth.onAuthStateChanged(async (userAuth) => {
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
  }

  componentWillUnmount() {
    this.authListener();
  }

  render() {
    const { currentUser } = this.props;
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
              currentUser ? (
                <Navigate to="/" />
              ) : (
                <MainLayout>
                  <Results />
                </MainLayout>
              )
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
}

const mapStateToProps = ({user}) =>({
  currentUser: user.currentUser 
 })

 const mapDispathToProps = dispatch =>({
  setCurrentUser:user => dispatch(setCurrentUser(user))
 })

export default connect(mapStateToProps, mapDispathToProps)(App);
