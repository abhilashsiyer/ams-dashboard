import "./default.scss";
import Homepage from "./pages/Homepage";
import { useDispatch } from 'react-redux';
import Registration from "./pages/Registration";
import MainLayout from "./layouts/MainLayout";
import { Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Matrices from "./pages/Matrices";
import ResultDetails from "./pages/ResultDetails";
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
            path="/searchresults"
            element={
              <MainLayout>
                  <Search />
              </MainLayout>
            }
          />
          <Route
            path="/matrices"
            element={
              <MainLayout>
                  <Matrices />
              </MainLayout>
            }
          />
          <Route
            path="/matrices/:matriceId"
            element={
              <MainLayout>
                  <Search />
              </MainLayout>
            }
          />
          <Route
            path="/testResult/:resultID"
            element={
              <MainLayout>
                  <ResultDetails />
              </MainLayout>
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
