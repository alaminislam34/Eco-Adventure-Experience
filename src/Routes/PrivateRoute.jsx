/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ProviderContext } from "../ContextProvider/Provider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user } = useContext(ProviderContext);
  if (user) {
    return children;
  }
  return (
    <div>
      <Navigate state={location.pathname} to={`/login`}></Navigate>
    </div>
  );
};

export default PrivateRoute;
