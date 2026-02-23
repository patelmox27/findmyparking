import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 hover:text-blue-700"
        >
          FindMyParking
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          {/* Always Visible */}
          <Link
            to="/search"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Search
          </Link>

          {user ? (
            <>
              {/* Role Based Dashboard */}
              <Link
                to={user.role === "admin" ? "/admin/dashboard" : "/dashboard"}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Sign Up
              </Link>
            </>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;