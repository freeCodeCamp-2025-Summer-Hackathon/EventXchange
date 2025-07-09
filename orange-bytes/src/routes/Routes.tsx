import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import React from "react";
// import page jsx files

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // {path: "", element: <Home />},
      // {path: "login", element: <Login />},
      // {path: "*", element: <PageNotFound />},
    ]
  }
],
);