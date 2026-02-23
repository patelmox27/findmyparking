import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      {/* No Navbar Here */}
      <Outlet />
    </div>
  );
};

export default AuthLayout;