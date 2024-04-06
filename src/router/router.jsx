import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Layout from "../layouts/Layout";
import Overview from "../pages/Overview";
import Members from "../pages/Members";
import Profile from "../pages/Profile";
import PrivateRoute from "../guards/PrivateRoute";
import Redirect from "../guards/Redirect";

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Redirect>
        <Login />
      </Redirect>
    ),
  },
  {
    path: "/login",
    element: (
      <Redirect>
        <Login />
      </Redirect>
    ),
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
