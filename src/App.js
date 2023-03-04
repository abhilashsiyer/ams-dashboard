import "./default.scss";
import Homepage from "./pages/Homepage";
import { useDispatch } from 'react-redux';
import Registration from "./pages/Registration";
import MainLayout from "./layouts/MainLayout";
import HomeLayout from "./layouts/HomeLayout";
import { Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Matrices from "./pages/Matrices";
import ResultDetails from "./pages/ResultDetails";
import Projects from "./pages/Projects";
import WithAuth from "./hoc/withAuth";
import { checkUserSession } from './redux/User/user.actions';

const App = props => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(checkUserSession());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    return (
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <HomeLayout>
                <Homepage />
              </HomeLayout>
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
            path="/matrices"
            element={
              <WithAuth path="/matrices">
                <MainLayout>
                  <Matrices />
                </MainLayout>
              </WithAuth>
            }
          />
          <Route
            path="/projects"
            element={
              <WithAuth path="/projects">
                <MainLayout>
                  <Projects />
                </MainLayout>
              </WithAuth>
            }
          />
          <Route
            path="/matrices/:matriceId"
            element={
              <WithAuth path="/matrices/">
                <MainLayout>
                  <Search />
                </MainLayout>
              </WithAuth>
            }
          />
          <Route
            path="/matrices/:matriceId/:testCaseName"
            element={
              <WithAuth path="/matrices/">
                <MainLayout>
                  <ResultDetails />
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
