import "./default.scss";
import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";
import Products from "./pages/Products";
import MainLayout from "./layouts/MainLayout";
import { Routes, Route, Navigate } from "react-router-dom";
import React, { Component } from "react";
import Login from "./pages/Login";
import { auth, handleUserProfile } from "./firebase/utils";

const initialState = { currentUser: null };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }
  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      } else {
        this.setState({ ...initialState });
      }
      // if (!userAuth) {
      //   this.setState({ ...initialState });
      // }
      // this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.authListener();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout currentUser={currentUser}>
                <Homepage />
              </MainLayout>
            }
          />
          <Route
            path="/registration"
            element={
              <MainLayout currentUser={currentUser}>
                <Registration />
              </MainLayout>
            }
          />
          <Route
            path="/products"
            element={
              <MainLayout currentUser={currentUser}>
                <Products currentUser={currentUser} />
              </MainLayout>
            }
          />
          <Route
            path="/login"
            element={
              currentUser ? (
                <Navigate to="/" />
              ) : (
                <MainLayout currentUser={currentUser}>
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

export default App;
