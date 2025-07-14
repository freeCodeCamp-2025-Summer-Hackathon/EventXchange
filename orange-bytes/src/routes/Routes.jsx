import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import React from "react";
// import page jsx files
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Landing from "../pages/Landing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "", element: <Landing />},
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      // {path: "*", element: <PageNotFound />},
    ]
  }
],
);