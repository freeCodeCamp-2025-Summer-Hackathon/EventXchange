import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

// Pages
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Logout from "../pages/Logout";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import Notifications from "../pages/Notifications";
import Notification from "../pages/Notification";
import Calender from "../pages/Calender";
import Events from "../pages/Events";
import Event from "../pages/Event";
import CreateEvent from "../pages/CreateEvent";
import EditEvent from "../pages/EditEvent";
import PageNotFound from "../pages/PageNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "logout", element: <Logout /> },
      { path: "users/:userid", element: <Profile /> },
      { path: "settings", element: <Settings /> },
      { path: "notifications", element: <Notifications /> },
      { path: "notifications/:notificationid", element: <Notification /> },
      { path: "calender", element: <Calender /> },
      { path: "events", element: <Events /> },
      { path: "events/create-event", element: <CreateEvent /> },
      { path: "events/:eventid", element: <Event /> },
      { path: "events/:eventid/edit", element: <EditEvent /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);
