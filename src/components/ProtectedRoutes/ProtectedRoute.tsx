import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../context/AuthenticationContext";
const ProtectedRoute = () => {
  const auth = useAuthContext();

  if (!auth?.isAuthenticated) {
    return <Navigate to="/signIn" />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
