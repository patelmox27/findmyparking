import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../admin/AdminSidebar";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content Area */}
      <div className="flex-1 bg-gray-100">
        <div className="p-6">
          <Outlet />
        </div>
      </div>

    </div>
  );
};

export default AdminLayout;