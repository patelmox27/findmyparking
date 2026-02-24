import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/common/ProtectedRoute";

import MainLayout from "../components/layout/MainLayout";
import AuthLayout from "../components/layout/AuthLayout";
import AdminLayout from "../components/layout/AdminLayout";

import Home from "../pages/user/Home";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import SearchParking from "../pages/user/SearchParking";
import Reservation from "../pages/user/Reservation";
import UserDashboard from "../pages/user/UserDashboard";

import AdminDashboard from "../pages/admin/AdminDashboard";
import ManageLots from "../pages/admin/ManageLots";
import NotFound from "../components/common/NotFound";
import { GetApiDemo } from "../components/user/GetApiDemo";

const AppRouter = () => {
  return (
    <Routes>

      {/* 🔹 PUBLIC */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchParking />} />
      </Route>

      {/* 🔹 AUTH */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>

      {/* 🔹 USER PROTECTED */}
      <Route element={<ProtectedRoute role="user" />}>
        <Route element={<MainLayout />}>
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/reservation/:id" element={<Reservation />} />
        </Route>
      </Route>

      {/* 🔹 ADMIN PROTECTED (UPDATED) */}
      <Route element={<ProtectedRoute role="admin" />}>
        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/managelots" element={<ManageLots />} />
          <Route path="/admin/getapidemo" element={<GetApiDemo />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
};

export default AppRouter; 