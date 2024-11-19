/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ProviderContext } from "../ContextProvider/Provider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(ProviderContext);
  if (user) {
    return children;
  }
  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <Navigate state={location.pathname} to={`/login`}></Navigate>
    </div>
  );
};

export default PrivateRoute;
