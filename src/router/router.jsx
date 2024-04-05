import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Layout from "../layouts/Layout";
import Overview from "../pages/Overview";
import Members from "../pages/Members";
import Profile from "../pages/Profile";
import PrivateRoute from "../guards/PrivateRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <Overview />,
      },
      {
        path: "members",
        element: <Members />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

export default Router;
