import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Shield } from "lucide-react";

const Login = () => {
  const [role, setRole] = useState("user");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // Temporary authentication logic
    if (!formData.email || !formData.password) {
      setError("Please enter both email and password.");
      return;
    }

    const userData = {
      email: formData.email,
      role: role,
    };

    // Save user in localStorage
    localStorage.setItem("user", JSON.stringify(userData));

    // Navigate based on role
    if (role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/user/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-blue-600 to-indigo-600 px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">

        {/* Title */}
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

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 text-red-600 p-2 rounded-lg text-sm mb-4">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">

          <div>
            <label className="block text-gray-700 mb-2">
              Email
            </label>
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
            <label className="block text-gray-700 mb-2">
              Password
            </label>
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
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Login as {role === "admin" ? "Admin" : "User"}
          </button>
        </form>

        {/* Footer */}
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


// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { User, Shield } from "lucide-react";

// const Login = () => {
//   const [role, setRole] = useState("user");
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Temporary Logic (Later connect to backend)
//     if (role === "admin") {
//       navigate("/admin/dashboard");
//     } else {
//       navigate("/user/dashboard");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-blue-600 to-indigo-600 px-4">

//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">

//         {/* Title */}
//         <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
//           Login to FindMyParking
//         </h2>

//         {/* Role Toggle */}
//         <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
//           <button
//             onClick={() => setRole("user")}
//             className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition ${role === "user"
//               ? "bg-blue-600 text-white"
//               : "text-gray-600"
//               }`}
//           >
//             <User size={18} />
//             User
//           </button>

//           <button
//             onClick={() => setRole("admin")}
//             className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition ${role === "admin"
//               ? "bg-blue-600 text-white"
//               : "text-gray-600"
//               }`}
//           >
//             <Shield size={18} />
//             Admin
//           </button>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleLogin} className="space-y-5">

//           <div>
//             <label className="block text-gray-700 mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               required
//               onChange={handleChange}
//               className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your email"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               required
//               onChange={handleChange}
//               className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your password"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
//           >
//             Login as {role === "admin" ? "Admin" : "User"}
//           </button>
//         </form>

//         {/* Footer Links */}
//         <div className="text-center mt-6">
//           <p className="text-gray-600 text-sm">
//             Don't have an account?{" "}
//             <Link to="/register" className="text-blue-600 font-medium">
//               Register
//             </Link>
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Login;