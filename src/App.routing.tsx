import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Toast from "./components/Toaster/Toast";
import useLocalStorage from "./utils/localStorage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));
// const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
// const Post = lazy(() => import("./pages/Post/Post"));
// const Card = lazy(() => import("./pages/Cards/Cards"));
// const Admin = lazy(() => import("./pages/Admin/Admin"));
// const My404 = lazy(() => import("./pages/My404/My404"));
// const Test = lazy(() => import("./pages/Test/Test"));
const Home = lazy(() => import("./pages/Home/Home"));

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          {/* <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute redirectTo="/">
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/post"
            element={
              <PrivateRoute redirectTo="/">
                <Post />
              </PrivateRoute>
            }
          />
          <Route
            path="/cards"
            element={
              <PrivateRoute redirectTo="/">
                <Card />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <PrivateRoute redirectTo="/">
                <Admin />
              </PrivateRoute>
            }
          />
          <Route
            path="/test"
            element={
              <PrivateRoute redirectTo="/">
                <Test />
              </PrivateRoute>
            }
          />
          <Route
            path="*"
            element={
              <PrivateRoute redirectTo="/">
                <My404 />
              </PrivateRoute>
            }
          /> */}
        </Routes>
        <Toast />
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
