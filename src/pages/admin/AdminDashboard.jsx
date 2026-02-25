import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Admin Dashboard 🛠️
        </h1>
        <p className="text-gray-500 mt-2">
          Monitor parking lots, revenue, and system analytics.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-4 gap-6 mb-6">

        <div className="bg-white shadow-md rounded-xl p-5">
          <h3 className="text-gray-500 text-sm">Total Parking Lots</h3>
          <p className="text-2xl font-bold text-blue-600 mt-2">5</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-5">
          <h3 className="text-gray-500 text-sm">Total Slots</h3>
          <p className="text-2xl font-bold text-green-600 mt-2">250</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-5">
          <h3 className="text-gray-500 text-sm">Occupied Slots</h3>
          <p className="text-2xl font-bold text-red-600 mt-2">175</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-5">
          <h3 className="text-gray-500 text-sm">Total Revenue</h3>
          <p className="text-2xl font-bold text-purple-600 mt-2">₹ 1,25,000</p>
        </div>

      </div>

      {/* Management Section */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* Manage Parking Lots */}
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-2">Manage Parking Lots</h2>
          <p className="text-gray-500 mb-4">
            Add, update or remove parking locations.
          </p>
          <Link
            to="/admin/managelots"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Manage Lots
          </Link>
        </div>

        {/* Manage Slots */}
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-2">Manage Slots</h2>
          <p className="text-gray-500 mb-4">
            Allocate regular, EV, or handicap slots.
          </p>
          <Link
            to="/admin/slots"
            className="bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Manage Slots
          </Link>
        </div>

        {/* View Analytics */}
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-2">Analytics & Reports</h2>
          <p className="text-gray-500 mb-4">
            Track revenue, peak hours and usage patterns.
          </p>
          <Link
            to="/admin/analytics"
            className="bg-purple-600 text-white px-4 py-2 rounded-lg"
          >
            View Analytics
          </Link>
        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;