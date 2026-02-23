import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ role }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  // 1️⃣ If not logged in → go to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 2️⃣ If role doesn't match → redirect
  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  // 3️⃣ If everything correct → allow access
  return <Outlet />;
};

export default ProtectedRoute;