import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/UserContexts";

const PrivateRoute = ({ children}) => {
  const location = useLocation();
  const { user, loader } = useContext(AuthContext);
  //   console.log(user);
  if (loader) {
    console.log("loading spiner working");
    return <div>Loading...</div>;
  }
  if (user && user?.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
