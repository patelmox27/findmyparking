import React from "react";
import { NavLink } from "react-router-dom";
import { Users, LayoutDashboard, CarFront, LogOut } from "lucide-react";

const AdminSidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-5">
      <h2 className="text-2xl font-bold mb-8 text-center">
        Admin Panel
      </h2>

      <nav className="flex flex-col gap-4">

        <NavLink
          to="/admin/dashboard"
          className="flex items-center gap-3 p-2 rounded hover:bg-gray-700"
        >
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/getapidemo"
          className="flex items-center gap-3 p-2 rounded hover:bg-gray-700"
        >
          <Users size={18} />
          Users
        </NavLink>

        <NavLink
          to="/admin/managelots"
          className="flex items-center gap-3 p-2 rounded hover:bg-gray-700"
        >
          <CarFront size={18} />
          Manage Lots
        </NavLink>

        <NavLink
          to="/"
          className="flex items-center gap-3 p-2 rounded hover:bg-red-600 mt-10"
        >
          <LogOut size={18} />
          Logout
        </NavLink>

      </nav>
    </div>
  );
};

export default AdminSidebar;