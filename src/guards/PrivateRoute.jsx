// PrivateRoute.jsx
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const PrivateRoute = (props) => {
  const navigate = useNavigate();
  const { accessToken } = useContext(AuthContext);

  console.log(accessToken);

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, [accessToken]);

  return <>{props.children}</>;
};

export default PrivateRoute;
