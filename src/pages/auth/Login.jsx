import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Shield } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [role, setRole] = useState("user");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submithandler = async (e) => {
    e.preventDefault();
    setLoading(true);


    try {
      const res = await axios.post(
        "https://node5.onrender.com/user/login",
        formData
      );

      console.log("response...", res);
      console.log("response data", res.data);

      if (res.status === 200) {
        toast.success("Login successful!");

        // Store user data (VERY IMPORTANT)
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...res.data,
            role: role, // if backend does not send role
          })
        );

        // Role-based navigation
        if (role === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/user/dashboard");
        }
      }
    } catch (err) {
      console.log("Login error", err);
      toast.error("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-blue-600 to-indigo-600 px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">

        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Login to FindMyParking
        </h2>

        {/* Role Toggle */}
        <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
          <button
            type="button"
            onClick={() => setRole("user")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition ${role === "user"
              ? "bg-blue-600 text-white"
              : "text-gray-600"
              }`}
          >
            <User size={18} />
            User
          </button>

          <button
            type="button"
            onClick={() => setRole("admin")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition ${role === "admin"
              ? "bg-blue-600 text-white"
              : "text-gray-600"
              }`}
          >
            <Shield size={18} />
            Admin
          </button>
        </div>

        <form onSubmit={submithandler} className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 disabled:opacity-50"
          >
            {loading
              ? "Logging in..."
              : `Login as ${role === "admin" ? "Admin" : "User"}`}
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">
            Don't have an account?{" "}
            <Link
              to="/SignUp"
              className="text-blue-600 font-medium hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;