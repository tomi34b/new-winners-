// Redirect.jsx
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Redirect = (props) => {
  const navigate = useNavigate();
  const { accessToken } = useContext(AuthContext);

  useEffect(() => {
    if (accessToken) {
      navigate("/dashboard");
    }
  }, [accessToken]);

  return <>{props.children}</>;
};

export default Redirect;
