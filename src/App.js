import "./default.scss";
import Homepage from "./pages/Homepage";
import { useDispatch } from 'react-redux';
import Registration from "./pages/Registration";
import MainLayout from "./layouts/MainLayout";
import { Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import Login from "./pages/Login";
import { auth, handleUserProfile } from "./firebase/utils";
import Results from "./pages/Results";
import {setCurrentUser} from "./redux/User/user.actions";
import WithAuth from "./hoc/withAuth";


const App = props => {
  const dispatch = useDispatch();

  useEffect(()=>{
    const authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          dispatch(setCurrentUser({
            id: snapshot.id,
          ...snapshot.data(),
          }));
        });
      } else {
        dispatch(setCurrentUser(userAuth));
      }
    });

    return (()=>{
      authListener();
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              <MainLayout>
                  <Login />
              </MainLayout>
            }
          />
        </Routes>
      </div>
    );
  }

export default App;
